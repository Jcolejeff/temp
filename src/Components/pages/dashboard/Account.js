import { Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Wrapper from "../../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setIsNext(!isNext);
      //   console.log("move to next page");
    }, 3000);
    setIsClicked(!isClicked);
  };

  clearTimeout(handleClick);

  return (
    <>
      <div className="flex justify-between ">
        <h2 className="text-lg font-bold mb-10">Virtual Accounts</h2>
        <div>
          {isNext ? (
            <button className="text-[#0F5CA8] border-2 border-[#0F5CA8] px-3 bg-white py-1 rounded-lg text-xs">
              Statement of Account
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="bg-white rounded-lg">
        <Flex justify="space-between">
          <div className="py-5 pl-5">
            <span className="flex gap-5 items-center">
              <img src="/images/flag.svg" className="rounded-full" />
              <p className="font-bold">Nigerian Naira Virtual Account</p>
            </span>
            {isNext ? (
              <>
                <Flex justify="space-between" className="mt-10">
                  <div>
                    <p className="text-xs text-[#778899]">Account Name</p>
                    <span className="flex items-center gap-1">
                      <p className="font-bold">Boluwatife Oluwafemi</p>
                      <Icon icon="ci:copy" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-[#778899]">Bank Code</p>
                    <span className="flex items-center gap-1">
                      <p className="font-bold">035</p>
                      <Icon icon="ci:copy" />
                    </span>
                  </div>
                </Flex>
                <Flex justify="space-between" className="mt-10">
                  <div>
                    <p className="text-xs text-[#778899]">Account Number</p>
                    <span className="flex items-center gap-1">
                      <p className="font-bold">0129786578</p>
                      <Icon icon="ci:copy" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-[#778899]">Bank Name</p>

                    <p className="font-bold">Wema Bank</p>
                  </div>
                </Flex>
              </>
            ) : (
              <div>
                <p className="mt-5 text-sm">
                  Take control of your finances. Request a NGN virtual account
                  now to easily fund your NGN wallet.
                </p>
                <button
                  className={`${
                    isClicked
                      ? "bg-[#C5D8EA] text-[#0F5CAB]"
                      : "text-white bg-[#0F5CA8]"
                  }  px-5 text-sm py-2 rounded-lg mt-2 cursor-pointer`}
                  onClick={handleClick}
                  disabled={isClicked ? true : false}
                >
                  {isClicked ? "Pending Account" : "Request Account"}
                </button>
              </div>
            )}
          </div>
          <div>
            {isNext ? (
              <img src="/images/bigFlag.svg" className="" />
            ) : (
              <img src="/images/nairaCard.svg" alt="" />
            )}
          </div>
        </Flex>
      </div>
    </>
  );
};

export default AddJob;
