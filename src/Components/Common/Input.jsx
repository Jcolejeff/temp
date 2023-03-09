import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import React from "react";

const Input = (props) => {
  const {
    // icon on the left
    leftIcon,
    name,
    // Icon on the right
    rightIcon,
    // Error handling
    isError,
    // input value
    value,
    // helper text for formik
    helperText,
    // styling for the input boxes, width, height, color etc can be adjusted from here
    inputStyles,
    //  styling for  the entire container, width, height, color etc can be adjusted from here
    containerClassName,
    className,
    // ref props

    ref,
    // onChange Function
    onChange,
  } = props;

  const containerStyles = twMerge(
    `flex items-center p-3 rounded-md border-2 gap-2 bg-white w-full `,
    className,
    isError ? "border-red-600" : ""
  );

  const _inputStyles = twMerge(
    `w-full outline-none placeholder:text-sm `,
    inputStyles
  );
  return (
    <div className={containerClassName || ""}>
      <div
        className={`${containerStyles} rounded-md border-2 border-[#C5D8EA]`}
      >
        {leftIcon}

        <div className="flex-1">
          <input ref={ref} {...props} name={name} onChange={onChange} className={_inputStyles} value={value} />
        </div>
        {rightIcon}
      </div>
      <span className={`w-full  text-xs ${isError ? "text-red-600" : ""}`}>
        {helperText}
      </span>
    </div>
  );
};

export default Input;
