import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Left from "../Common/AuthLayout/Left";
import Right from "../Common/AuthLayout/Right";
import CustomCheckbox from "../Common/CustomCheckbox";
import FormTitle from "../Common/FormTitle";
import Input from "../Common/Input";
import OutlineFormButton from "../Common/OutlineFormButton";
import PasswordInput from "../Common/PasswordInput";
import SolidFormButton from "../Common/SolidFormButton";

const AccountVerification = (props) => {
  const { onFormSubmit, handlePrevious, handleSkip } = props;

  const inputFile = useRef(null);
  const [image, setImage] = useState("");

  const handleUpload = async (e) => {
    if (e.target.files === null) {
      return;
    }
    const files = e.target.files[0];
    console.log("files: ", files);
    const imageLoaded = URL.createObjectURL(e.target.files[0]);
    setImage(imageLoaded);
  };
  return (
    <>
      <div className="flex  ">
        <Left className="hidden lg:visible pt-[150px]">
          <div className="flex flex-col items-center">
            <img src="/images/auth/AccountVerificationImg.svg" />{" "}
            <div className="px-9">
              <h2 className="text-2xl text-left text-[#0F5CA8] mt-7 font-semibold">
                Finance without fear: our payment solution prioritizes security.
              </h2>
              <p className="text-left mt-5">
                Our payment solution prioritizes security for worry-free
                financial management. Cutting-edge technology ensures protection
                for your assets & transactions.{" "}
              </p>
            </div>
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
            <p className="mt-5">Step 2 of 3</p>

            <h1 className="font-semibold text-xl mt-3">
              Complete your account verification
            </h1>
            <p className="text-sm mt-3 text-[#778899]">
              Submit your ID card and submit your BVN for full access
            </p>

            <form action="">
              <div className="flex  mt-10 gap-5">
                <div className="w-full">
                  <label htmlFor="" className="w-full">
                    <FormTitle title={"Bank Verification Number (BVN)"} />
                    <Input />
                  </label>
                </div>
                <div className="w-full">
                  {" "}
                  <label htmlFor="" className="w-full">
                    <FormTitle title={"Upload ID Card"} />
                    <div>
                      <input
                        accept="image/jpg,.png"
                        ref={inputFile}
                        type="file"
                        id="getFile"
                        className={`hidden`}
                        onChange={handleUpload}
                        title="image"
                      />
                      <div
                        className={`mb-3 h-[100px] w-full  rounded-lg border-2 border-[#C5D8EA] border-dashed  bg-white`}
                        onClick={(e) => inputFile.current?.click()}
                      >
                        {image ? (
                          <img
                            src={image}
                            alt="image"
                            className="h-[100px] rounded-lg w-full"
                          />
                        ) : (
                          <div className="flex justify-center mt-3">
                            <div className="">
                              <span className="flex justify-center">
                                <img
                                  src="/images/auth/IdCard.svg"
                                  alt=""
                                  style={{ alignSelf: "center" }}
                                />
                              </span>
                              <p className=" text-sm mt-3 ">
                                Drag and drop your ID card here or{" "}
                                <span className="text-main-blue font-semibold">
                                  {" "}
                                  Browse{" "}
                                </span>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </label>
                  <p className="text-sm text-[#778899] mt-2">
                    The required ID Card are listed below:
                  </p>
                  <div className="mt-3">
                    <CustomCheckbox
                      buttonClassName="rounded-sm p-[1px] mr-2"
                      color="#0F5CA8"
                    />
                    <label htmlFor="" className="text-sm">
                      National ID Card
                    </label>
                  </div>
                  <div className="mt-3">
                    <CustomCheckbox
                      buttonClassName="rounded-sm p-[1px] mr-2"
                      color="#0F5CA8"
                    />
                    <label htmlFor="" className="text-sm">
                      Voters Card
                    </label>
                  </div>
                  <div className="mt-3">
                    <CustomCheckbox
                      buttonClassName="rounded-sm p-[1px] mr-2"
                      color="#0F5CA8"
                    />
                    <label htmlFor="" className="text-sm">
                      National Identification Number (NIN) Slip
                    </label>
                  </div>
                  <div className="mt-3">
                    <CustomCheckbox
                      buttonClassName="rounded-sm p-[1px] mr-2"
                      color="#0F5CA8"
                    />
                    <label htmlFor="" className="text-sm">
                      International Passport
                    </label>
                  </div>
                  <div className="mt-3">
                    <CustomCheckbox
                      buttonClassName="rounded-sm p-[1px] mr-2"
                      color="#0F5CA8"
                    />
                    <label htmlFor="" className="text-sm">
                      Drivers License
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-10">
                <OutlineFormButton title={"Skip"} onClick={handleSkip} />
                <SolidFormButton title={"Continue"} onClick={onFormSubmit} />
              </div>
            </form>
          </div>
        </Right>
      </div>
    </>
  );
};

export default AccountVerification;
