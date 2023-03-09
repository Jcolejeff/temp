import { Icon } from "@iconify/react";
import React, { HTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function CustomCheckbox(props) {
  const {
    color = "#5EAD56",
    onChange,
    size = 10,
    buttonClassName,
    initialValue = false,
    checked = false,
    value = null,
    setValue,
  } = props;
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => {
    onChange && onChange(!isChecked);
    if (value !== null) {
      // setValue();
    } else {
      setIsChecked((prev) => {
        return !prev;
      });
    }
  };

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  useEffect(() => {
    setIsChecked(initialValue);
  }, [initialValue]);

  // const _size = `text-[200px]`;
  const _color = `bg-[${color}]`;
  return (
    <button
      title="check"
      type="button"
      className={`${buttonClassName} w-fit cursor-pointer border-[1px] border-[#0F5CA8]`}
      onClick={toggle}
      defaultChecked={checked}
      style={{ backgroundColor: isChecked ? color : "white" }}
    >
      <Icon
        icon="fluent:checkmark-12-filled"
        width={size}
        height={size}
        className={`${isChecked ? "text-white" : "opacity-0"}`}
        // color={`${isChecked ? "white" : "blue"}`}
      />
    </button>
  );
}

export default CustomCheckbox;
