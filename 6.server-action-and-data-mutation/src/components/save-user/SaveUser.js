"use client";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { UserContext } from "@/context/UserProbider";

const SaveUser = () => {
  const { loading } = useContext(UserContext);

  return (
    <div>
      <Button className="bg-indigo-950 rounded-[5px] px-5 py-2 text-white hover:bg-indigo-900">{loading ? "Saving user..." : "Save user"}</Button>
    </div>
  );
};

export default SaveUser;
