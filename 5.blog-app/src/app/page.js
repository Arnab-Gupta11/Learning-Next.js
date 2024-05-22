import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-slate-900 to-violet-950 p-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold mb-4">Browse our blog collection</h2>
        <Link className="bg-gradient-to-r from-slate-300 to-white text-sm text-violet-950 font-semibold py-2 px-6 rounded-full" href={"/blogs"}>
          Explore Blogs
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
