import connectToDB from "@/db";
import Blog from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const blog = await req.json();
    const { title, description } = blog;
    if (title && description) {
      //create a new blog
      const newBlog = await Blog.create(blog);
      if (newBlog) {
        return NextResponse.json({
          success: true,
          message: "Blog created successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Something went wrong!! Please try again.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Title and description are required",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
