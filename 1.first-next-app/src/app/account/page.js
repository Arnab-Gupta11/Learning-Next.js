import { redirect } from "next/navigation";
import React from "react";

const AccountPage = () => {
  const userProfileInfo = null;
  //redirect use to navigate to a specific route in server component.Import it form "next/navigation"
  if (userProfileInfo === null) redirect("profile");
  return <div>AccountPage</div>;
};

export default AccountPage;
