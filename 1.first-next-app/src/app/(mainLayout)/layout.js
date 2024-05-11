import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <h1>home header</h1>
      <div>{children}</div>
      <h1>home footer</h1>
    </div>
  );
};

export default MainLayout;
