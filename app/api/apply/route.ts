import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";
import { verifyToken } from "@/lib/auth";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Unauthorized. Please log in first." },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    await connectDB();

    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const programme = formData.get("programme") as string;
    const qualification = formData.get("qualification") as string;
    const studyMode = formData.get("studyMode") as string;
    const motivation = formData.get("motivation") as string;
    const cv = formData.get("cv");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !programme ||
      !qualification ||
      !studyMode ||
      !motivation ||
      !cv
    ) {
      return NextResponse.json(
        { message: "All fields including CV are required." },
        { status: 400 }
      );
    }

    if (typeof cv === "string") {
      return NextResponse.json(
        { message: "Invalid CV upload." },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(cv.type)) {
      return NextResponse.json(
        { message: "Only PDF, DOC, and DOCX files are allowed." },
        { status: 400 }
      );
    }

    const bytes = await cv.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const safeFileName = cv.name.replace(/\s+/g, "-");
    const key = `applications/cvs/${Date.now()}-${safeFileName}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: key,
        Body: buffer,
        ContentType: cv.type,
      })
    );

    const cvUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    const application = await Application.create({
      user: decoded.userId,
      firstName,
      lastName,
      email,
      phone,
      programme,
      qualification,
      studyMode,
      motivation,
      cvUrl,
      cvKey: key,
      cvFileName: cv.name,
    });

    return NextResponse.json(
      {
        message: "Application submitted successfully.",
        application,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("APPLICATION_SUBMIT_ERROR:", error);
    return NextResponse.json(
      { message: "Something went wrong while submitting the application." },
      { status: 500 }
    );
  }
}