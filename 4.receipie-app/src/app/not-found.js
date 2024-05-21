import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="max-w-full min-h-screen flex items-center justify-center">
      <div>
        <p className="text-lg mb-2 font-medium text-center">This Page is not available</p>
        <Link href={"/"} className="bg-black text-white px-4 py-2 rounded-md mx-auto">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
