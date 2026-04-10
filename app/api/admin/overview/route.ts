import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Application from "@/models/Application";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find({})
      .select("-password")
      .sort({ createdAt: -1 })
      .lean();

    const applications = await Application.find({})
      .populate("user", "fullName email")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(
      {
        totalUsers: users.length,
        totalApplications: applications.length,
        users,
        applications,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("ADMIN_OVERVIEW_ERROR:", error);

    return NextResponse.json(
      { message: "Something went wrong while loading admin data." },
      { status: 500 }
    );
  }
}