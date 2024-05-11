import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h2>dashboard Header</h2>
      {children}
      <h2>dashboard Footer</h2>
    </div>
  );
};

export default Layout;
