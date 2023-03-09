import React from "react";

const Right = ({ children, className }) => {
  return (
    <>
      <div className={`${className} bg-[#F7F9FB] w-full lg:w-2/3`}>
        {children}
      </div>
    </>
  );
};

export default Right;
