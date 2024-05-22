import PostBlog from "@/components/PostBlog/PostBlog";
import React from "react";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-violet-950 p-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h2 className="text-3xl text-white font-bold mb-4">Explore our blog</h2>
        <div>
          <PostBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
