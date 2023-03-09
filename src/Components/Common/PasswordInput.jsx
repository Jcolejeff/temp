import { Icon } from "@iconify/react";
import Input from "./Input";
import { useState } from "react";

const PasswordInput = (props) => {
  const { onChange, name, value } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <Input value={value} name={name} onChange={onChange}
      placeholder="Password"
      type={isPasswordVisible ? "text" : "password"}
      rightIcon={
        <button type="button" onClick={toggleVisibility}>
          {!isPasswordVisible ? (
            <Icon icon="ic:baseline-remove-red-eye" />
          ) : (
            <Icon icon="mdi:eye-off" />
          )}
        </button>
      }
      className=" w-full"
    />
  );
};

export default PasswordInput;


