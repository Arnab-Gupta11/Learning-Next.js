"use client";

import { useState } from "react";
import PostBlogForm from "./PostBlogForm";
import axios from "axios";
const initialFormValu = {
  title: "",
  description: "",
};
const PostBlog = () => {
  const [openBlogForm, setOpenBlogForm] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialFormValu);
  const [loading, setLoading] = useState(false);
  const handleBlogSubmit = async () => {
    try {
      setLoading(true);
      await axios.post("/api/add-blog", blogFormData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        onClick={() => setOpenBlogForm(true)}
        className="bg-gradient-to-r from-slate-300 to-white text-sm text-violet-950 hover:bg-gradient-to-l font-semibold py-2 px-6 rounded-full"
      >
        Create Blog
      </button>
      <PostBlogForm
        openBlogForm={openBlogForm}
        setOpenBlogForm={setOpenBlogForm}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        loading={loading}
        setLoading={setLoading}
        handleBlogSubmit={handleBlogSubmit}
      />
    </div>
  );
};

export default PostBlog;
