import connectToDB from "@/db";
import Blog from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    console.log(searchParams.get("id"));
    const deletedBlogId = searchParams.get("id");
    if (!deletedBlogId) {
      return NextResponse.json({
        success: false,
        message: "Blog ID is required",
      });
    }

    const deleteCurrentBlogByID = await Blog.findByIdAndDelete(deletedBlogId);
    console.log(deleteCurrentBlogByID);
    if (deleteCurrentBlogByID) {
      return NextResponse.json({
        success: true,
        message: "Blog is deleted successfully",
      });
    }
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
