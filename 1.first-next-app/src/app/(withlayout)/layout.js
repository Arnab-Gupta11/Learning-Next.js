import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h2>Header</h2>
      {children}
      <h2>Footer</h2>
    </div>
  );
};

export default Layout;
