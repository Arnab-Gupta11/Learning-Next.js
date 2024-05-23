"use client";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "../ui/button";
import useFormDialog from "@/hooks/useFormDialog";
import PostBlogForm from "../PostBlog/PostBlogForm";
import axios from "axios";

const UpdateBlog = ({ blog }) => {
  const initialFormValu = {
    title: blog?.title,
    description: blog?.description,
  };
  const { openBlogForm, setOpenBlogForm, blogFormData, setBlogFormData, loading, setLoading, router, currentEditedBlogID, setCurrentEditedBlogID } =
    useFormDialog(initialFormValu);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`/api/update-blog?id=${blog?._id}`, blogFormData);
      if (res?.data.success) {
        setOpenBlogForm(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button
        onClick={() => {
          setCurrentEditedBlogID(blog?._id);
          setOpenBlogForm(true);
        }}
        className="text-green-700 bg-slate-50 hover:bg-slate-100 hover:scale-105"
      >
        <FaRegEdit size={25} />
      </Button>
      <PostBlogForm
        openBlogForm={openBlogForm}
        setOpenBlogForm={setOpenBlogForm}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        loading={loading}
        setLoading={setLoading}
        handleBlogSubmit={handleUpdate}
        currentEditedBlogID={currentEditedBlogID}
        setCurrentEditedBlogID={setCurrentEditedBlogID}
      />
    </>
  );
};

export default UpdateBlog;
