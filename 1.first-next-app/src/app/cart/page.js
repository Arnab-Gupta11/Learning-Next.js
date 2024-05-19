"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const CartPage = () => {
  //we can use this hooks in client component to get the url endpoint name and query params value.
  //   usePathname is a Client Component hook that lets you read the current URL's pathname.
  const pathname = usePathname();
  console.log(pathname);
  //   useSearchParams is a Client Component hook that lets you read the current URL's query string.
  const serchParams = useSearchParams();
  console.log(serchParams.get("type"), serchParams.get("price"));
  return <div>CartPage</div>;
};

export default CartPage;
