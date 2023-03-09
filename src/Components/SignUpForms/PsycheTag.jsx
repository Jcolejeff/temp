import React from "react";
import Left from "../Common/AuthLayout/Left";
import Right from "../Common/AuthLayout/Right";

import FormTitle from "../Common/FormTitle";
import Input from "../Common/Input";
import OutlineFormButton from "../Common/OutlineFormButton";
import SolidFormButton from "../Common/SolidFormButton";
import { Icon } from "@iconify/react";

const PsycheTag = (props) => {
  const { onFormSubmit, handlePrevious, handleSkip } = props;
  return (
    <>
      <div className="flex ">
        <Left className="pt-[200px]">
          {" "}
          <img src="/images/auth/PsycheTag.svg" />{" "}
          <div className="px-9">
            <h2 className="text-2xl text-left text-[#0F5CA8] mt-7 font-semibold">
              Experience seamless payments with the use of your Psyche tags.
            </h2>
            <p className="text-left mt-5">
              Smoothly conduct your payments by using our Psyche tag to send and
              receive payment from other users.
            </p>
          </div>
        </Left>

        <Right className="px-5">
          <img src="/images/psycheLogo.svg" className="mt-16" />

          <div className="mt-10">
            <span
              className="flex items-center gap-1 cursor-pointer"
              onClick={handlePrevious}
            >
              <Icon icon="mdi:arrow-left-box" color="#0F5CA8" />
              <p className="text-main-blue">Go Back</p>
            </span>
            <p className="mt-5">Step 3 of 3</p>

            <h1 className="font-semibold text-xl mt-3">
              Create your Psyche Tag
            </h1>
            <p className="text-sm mt-3 text-[#778899]">
              Send and receive payment using your Psyche tag
            </p>

            <form action="">
              <div className=" mt-10 ">
                <div className="">
                  <label htmlFor="" className="">
                    <FormTitle title={"Pysche Tag"} />
                    <Input
                      leftIcon={<p className="text-[#6898C8]">@</p>}
                      containerClassName="lg:w-1/2 w-full md:w-2/3"
                    />
                  </label>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col gap-5 mt-14 w-full lg:w-0 ">
                <OutlineFormButton
                  title={"Skip"}
                  onClick={handleSkip}
                  className="w-full  lg:w-fit md:w-fit"
                />
                <SolidFormButton
                  title={"Continue"}
                  onClick={onFormSubmit}
                  className="w-full lg:w-fit md:w-fit"
                />
              </div>
            </form>
          </div>
        </Right>
      </div>
    </>
  );
};

export default PsycheTag;
