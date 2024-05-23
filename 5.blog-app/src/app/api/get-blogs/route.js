import connectToDB from "@/db";
import Blog from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const blogs = await Blog.find({});
    if (blogs) {
      return NextResponse.json({
        success: true,
        data: blogs,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again later",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: true,
      message: error.message,
    });
  }
}
