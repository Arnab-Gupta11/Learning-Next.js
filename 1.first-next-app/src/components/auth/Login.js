"use client";

import { createUser } from ".";
import useGetFormData from "./useGetFormData";

const Login = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const { handleSubmit, values, handleChange, loading } = useGetFormData(initialValues, createUser);

  return (
    <form className="bg-white text-black flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input className="border" id="firstName" name="firstName" type="text" onChange={handleChange} value={values.firstName} />
      <label htmlFor="lastName">Last Name</label>
      <input className="border" id="lastName" name="lastName" type="text" onChange={handleChange} value={values.lastName} />
      <label htmlFor="email">Email Address</label>
      <input className="border" id="email" name="email" type="email" onChange={handleChange} value={values.email} />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Login;
