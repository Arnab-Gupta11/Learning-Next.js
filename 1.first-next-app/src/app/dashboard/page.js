"use client";

import { useRouter } from "next/navigation";

const DashboardPage = () => {
  // The useRouter hook allows you to programmatically change routes inside Client Components. Import it form "next/navigation"
  const router = useRouter();
  console.log("🚀 ~ DashboardPage ~ router:", router);
  const handleNavigate = () => {
    router.push("dashboard/addshop");
  };

  return (
    <div>
      <button onClick={handleNavigate} className="border mx-3 my-1">
        Add Shop
      </button>
    </div>
  );
};

export default DashboardPage;
