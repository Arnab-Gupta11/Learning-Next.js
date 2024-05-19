"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AddShopPage = () => {
  const router = useRouter();
  return (
    <div>
      AddShopPage
      <button onClick={() => router.back()} className="border mx-3 my-1">
        back
      </button>
    </div>
  );
};

export default AddShopPage;
