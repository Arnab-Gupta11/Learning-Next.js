import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>sidebar</h1>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
