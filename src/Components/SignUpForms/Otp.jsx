import React from "react";
import Right from "../Common/AuthLayout/Right";
import OtpInput from "../Common/OtpInput";
import SolidFormButton from "../Common/SolidFormButton";

const Otp = (props) => {
  const { onFormSubmit } = props;
  return (
    <>
      <div className="bg-[#F7F9FB] h-screen flex flex-col gap-y-14 justify-center">
        <div className="flex justify-center">
          <img src="/images/psycheLogo.svg" className="" />
        </div>
        <div className="flex justify-center ">
          <div className="lg:bg-white  bg-[#F7F9FB] lg:w-[450px] p-5  rounded-2xl ">
            <h2 className="font-semibold mb-2">
              Enter One Time Password (OTP)
            </h2>
            <p className="text-sm mb-5 text-[#778899] w-full">
              A 4-digit OTP has been sent to your email{" "}
              <span className="text-black">(@bolu@psyche.com) </span>. Enter the
              OTP below
            </p>
            <p className="text-[#0F5CA8] text-sm">Change email address</p>
            <div className="py-10">
              <OtpInput />
            </div>

            <div className="flex justify-center">
              <SolidFormButton title={"Continue"} onClick={onFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
