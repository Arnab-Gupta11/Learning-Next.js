import { useRouter } from "next/navigation";
import { useState } from "react";

const useFormDialog = (initialFormValu) => {
  const [openBlogForm, setOpenBlogForm] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialFormValu);
  const [loading, setLoading] = useState(false);
  const [currentEditedBlogID, setCurrentEditedBlogID] = useState(null);
  const router = useRouter();
  return { openBlogForm, setOpenBlogForm, blogFormData, setBlogFormData, loading, setLoading, currentEditedBlogID, setCurrentEditedBlogID, router };
};

export default useFormDialog;
