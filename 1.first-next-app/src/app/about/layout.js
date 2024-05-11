import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1>About header</h1>
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
