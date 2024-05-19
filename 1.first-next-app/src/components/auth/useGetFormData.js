"use client";
import { useFormik } from "formik";
import { useState } from "react";

const useGetFormData = (initialValues, postFormData) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await postFormData(values);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return {
    handleSubmit: formik.handleSubmit,
    values: formik.values,
    handleChange: formik.handleChange,
    loading,
  };
};

export default useGetFormData;
