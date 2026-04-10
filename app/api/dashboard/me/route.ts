import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { verifyToken } from "@/lib/auth";
import User from "@/models/User";
import Application from "@/models/Application";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Unauthorized." },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    await connectDB();

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    const latestApplication = await Application.findOne({
      user: decoded.userId,
    }).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        user,
        application: latestApplication,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DASHBOARD_ME_ERROR:", error);
    return NextResponse.json(
      { message: "Something went wrong while loading dashboard data." },
      { status: 500 }
    );
  }
}