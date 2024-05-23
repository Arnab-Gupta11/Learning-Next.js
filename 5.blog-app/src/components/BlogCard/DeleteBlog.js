"use client";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteBlog = ({ blogId }) => {
  const router = useRouter();
  const handleBlogDelete = async () => {
    try {
      const res = await axios.delete(`/api/delete-blog?id=${blogId}`);
      if (res.data.success) {
        router.refresh();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Button onClick={handleBlogDelete} className="text-red-700 bg-slate-50 hover:bg-slate-100 hover:scale-105">
      <MdDeleteOutline size={25} />
    </Button>
  );
};

export default DeleteBlog;
