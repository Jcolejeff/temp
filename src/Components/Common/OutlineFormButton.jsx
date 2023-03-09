import React from "react";

export default function OutlineFormButton(props) {
  const { title, className, onClick } = props;
  return (
    <div>
      <button
        onClick={onClick}
        className={`${className} rounded-lg py-[10px] border-2 px-[100px] border-[#0F5CA8]`}
      >
        {title}
      </button>
    </div>
  );
}
