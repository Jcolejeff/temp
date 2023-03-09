import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Left from "../Common/AuthLayout/Left";
import Right from "../Common/AuthLayout/Right";
import CountryDropdown from "../Common/CountryDropdown";
import CustomCheckbox from "../Common/CustomCheckbox";
import FormTitle from "../Common/FormTitle";
import Input from "../Common/Input";
import PasswordInput from "../Common/PasswordInput";
import SolidFormButton from "../Common/SolidFormButton";

const CreateAccount = (props) => {
  const { onFormSubmit, page } = props;

  return (
    <>
      <div className="flex ">
        <Left className=" h-screen  pt-[100px] ">
          <div className="flex flex-col items-center justify-center ">
            {" "}
            <img src="/images/auth/CreateAccountImg.svg" />{" "}
            <div className="px-9">
              <h2 className="text-2xl text-left text-[#0F5CA8] mt-7 font-semibold">
                Experience seamless financial transactions with our banking
                meets crypto payment solution.
              </h2>
              <p className="text-left mt-5">
                Effortless traditional banking & crypto combined on our seamless
                payment solution. Experience security & convenience in one
                place.
              </p>
            </div>
          </div>
        </Left>

        <Right className="px-5">
          <img src="/images/psycheLogo.svg" className="mt-10" />

          <div className="mt-7">
            <p>Step 1 of 3</p>

            <h1 className="font-semibold text-xl mt-3">Create Your Account</h1>
            <p className="text-sm mt-3">
              Enter your Personal Details to setup your account
            </p>

            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-5 mt-10">
              <img src="/images/auth/GoogleButton.svg" />
              <img src="/images/auth/AppleButton.svg" />
            </div>
            <div className="inline-flex items-center  gap-2 justify-center w-full">
              <hr className="w-64 h-px my-8 bg-[#EBEDF0] border-0 " />
              <span className="px-3 font-medium text-gray-300 ">or</span>
              <hr className="w-64 h-px my-8 bg-[#EBEDF0] border-0" />
            </div>

            <form action="">
              <div className={`${FormLayout}`}>
                <label htmlFor="" className="w-full">
                  <FormTitle title="Full Name" />
                  <Input containerClassName="w-full" />
                </label>

                <label htmlFor="" className="w-full">
                  <FormTitle title="Email Address" />
                  <Input containerClassName="w-full" />
                </label>
              </div>
              <div className={`${FormLayout}`}>
                <label htmlFor="" className="w-full">
                  <FormTitle title="Select Country" />
                  <CountryDropdown />
                </label>

                <label htmlFor="" className="w-full">
                  <FormTitle title="Phone Number" />
                  <Input containerClassName="w-full" />
                </label>
              </div>
              <div className={`${FormLayout}`}>
                <label htmlFor="" className="w-full">
                  <FormTitle title="Password" />
                  <PasswordInput />
                </label>

                <label htmlFor="" className="w-full">
                  <FormTitle title="Confirm Password" />
                  <PasswordInput />
                </label>
              </div>

              <div className="mt-5 flex items-center">
                <CustomCheckbox
                  buttonClassName="w-[20px] h-[20px] rounded-sm p-[1px] mr-2"
                  color="#0F5CA8"
                />
                <label htmlFor="">
                  I agree to the terms and conditions of{" "}
                  <a href="" className="text-[#0F5CA8] font-semibold">
                    Psyche Finance
                  </a>{" "}
                </label>
              </div>
              <SolidFormButton
                onClick={onFormSubmit}
                title={"Create Account"}
                className="mt-5"
              />
            </form>
            <p className="mt-8">
              Already have an account?
              <a href="" className="text-[#0F5CA8] font-semibold">
                Login Here
              </a>
            </p>
          </div>
        </Right>
      </div>
    </>
  );
};

const FormLayout = twMerge(
  `flex lg:flex-row md:flex-row flex-col items-center gap-5 w-full mt-5`
);

export default CreateAccount;
