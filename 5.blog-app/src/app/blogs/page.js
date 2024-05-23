import BlogCard from "@/components/BlogCard/BlogCard";
import PostBlog from "@/components/PostBlog/PostBlog";
import { getAllBlogs } from "@/utils/getAllBlogs";
import React from "react";

const BlogPage = async () => {
  const blogs = await getAllBlogs();
  console.log(blogs);
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-violet-950 p-6">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-white font-bold mb-4">Explore our blog</h2>
          <div>
            <PostBlog />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-0 gap-2 mt-10">
          {blogs?.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
