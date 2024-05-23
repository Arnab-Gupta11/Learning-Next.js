import connectToDB from "@/db";
import Blog from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const updatedBlogId = searchParams.get("id");
    const updatedBlogData = await req.json();
    const { title, description } = updatedBlogData;
    if (title && description && updatedBlogId) {
      await Blog.findOneAndUpdate(
        {
          _id: updatedBlogId,
        },
        { ...updatedBlogData },
        { new: true }
      );
      return NextResponse.json({
        success: true,
        message: "Blog is updated successfully",
      });
    }
    return NextResponse.json({
      success: false,
      message: "Something went wrong!! please try again",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
