"use client";
import UserProbider from "@/context/UserProbider";

const CommonLayout = ({ children }) => {
  return <UserProbider>{children}</UserProbider>;
};

export default CommonLayout;
