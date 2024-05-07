import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  //Return the params
  //   console.log(params);
  //Return any queary as object
  //   console.log(searchParams);
  return (
    <div>
      DynamicPage {params.id} name: {searchParams.name}
    </div>
  );
};

export default DynamicPage;
