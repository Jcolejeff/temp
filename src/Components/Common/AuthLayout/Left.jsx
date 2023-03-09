import React from "react";

const Left = ({ children, className }) => {
  return (
    <>
      <div
        style={{ width: "429px", minHeight: "52em", height: "100vh" }}
        className={`${className} bg-[#EBEDF0] hidden lg:block`}
      >
        {children}
      </div>
    </>
  );
};

export default Left;
