import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

export default function SolidFormButton(props) {
  const [onMobile] = useMediaQuery('(max-width: 992px)')
  const { title, type, className, onClick } = props;
  return (
    <div>
      <button style={{ width: onMobile ? 324 : '' }}
        onClick={onClick}
        className={`${className} rounded-lg py-[10px] text-white px-[100px] bg-[#0F5CA8]`}
        type={type}
      >
        {title}
      </button>
    </div>
  );
}
