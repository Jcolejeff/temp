import React from "react";
import styled from "styled-components";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Button,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <SettingsWrapper>
      <div className="hero"> </div>
      <Flex gap="5">
        <div className="avi">
          <img src="/images/settingsavi.svg" />
        </div>

        <div>
          <h3 className="text-lg font-bold mt-3  ">Boluwatife Oluwafemi</h3>
          <p className="mt-2">boluwatifeoluwafemi@gmail.com</p>
        </div>
      </Flex>

      <div>
        <Tabs>
          <TabList>
            <Tab>Personal Information</Tab>
            <Tab>Security</Tab>
          </TabList>

          <div className="bg-white mt-5 py-5 rounded-xl">
            <TabPanels>
              <TabPanel>
                <div>
                  <p className="text-xs">Full Name</p>
                  <p>Boluwatife Oluwafemi</p>
                </div>
                <form>
                  <div className="mt-10 flex items-center">
                    <label className="text-xs ">
                      Email address
                      <Input
                        variant="unstyled"
                        placeholder="Email Address"
                        colorScheme="black"
                      />
                    </label>
                    <button className="border-2 border-[#0F5CA8] text-[#0F5CA8] px-5 py-2 rounded-2xl">
                      Update Email
                    </button>
                  </div>
                  <div className="mt-10 flex items-center">
                    <label className="text-xs ">
                      Phone Number
                      <Input variant="unstyled" placeholder="Phone number" />
                    </label>
                    <button className="border-2 border-[#0F5CA8] text-[#0F5CA8] px-5 py-2 rounded-2xl">
                      Update Number
                    </button>
                  </div>
                  <div className="mt-10 flex items-center">
                    <label className="text-xs ">
                      Psyche Tag
                      <Input variant="unstyled" placeholder="Tag" />
                    </label>
                    <button className="border-2 border-[#0F5CA8] text-[#0F5CA8] px-5 py-2 rounded-2xl">
                      Update Tag
                    </button>
                  </div>
                  <Flex justify="end">
                    {" "}
                    <button className="text-white bg-[#0F5CA8] px-5 py-2 rounded-2xl mt-20">
                      Update Information
                    </button>
                  </Flex>
                </form>
              </TabPanel>
              <TabPanel>
                <form>
                  <div className="mt-2 flex items-center gap-20">
                    <span>
                      <p className="font-bold">Password</p>
                      <p className="text-sm text-[#778899]">
                        Update your account password
                      </p>
                    </span>
                    <button className="border-2 border-[#0F5CA8] text-[#0F5CA8] px-5 py-2 rounded-2xl">
                      Update Password
                    </button>
                  </div>
                  <div className="mt-10 flex items-center gap-20">
                    <span>
                      <p className="font-bold">Transaction PIN</p>
                      <p className="text-sm text-[#778899]">
                        Change your 4-digit transaction PIN
                      </p>
                    </span>
                    <button className="border-2 border-[#0F5CA8] text-[#0F5CA8] px-5 py-2 rounded-2xl">
                      Change PIN
                    </button>
                  </div>
                  <div className="mt-10">
                    <span className="flex">
                      <p className="font-bold">Idenitfy Verification</p>
                      <button className="bg-[#D1FADF] ml-1 text-[#12B76A] px-[8px] font-bold text-xs rounded-2xl">
                        Verified
                      </button>
                    </span>
                    <p className="text-sm w-2/5 text-[#778899]">
                      Tighten your account security by enabling 2FA
                      authentication
                    </p>
                  </div>
                  <Flex justify="end">
                    {" "}
                    <button className="text-white bg-[#0F5CA8] px-5 py-2 rounded-2xl mt-20">
                      Update Changes
                    </button>
                  </Flex>
                </form>
              </TabPanel>
            </TabPanels>
          </div>
        </Tabs>
      </div>
    </SettingsWrapper>
  );
};

const SettingsWrapper = styled.section`
  .hero {
    background: linear-gradient(90deg, #c0f7fc 0%, #78acfe 50%, #4e7eff 100%);
    width: 100%;
    height: 120px;
    border-radius: 6px;
  }
  .avi {
    position: relative;
    bottom: 20px;
  }
`;

export default Profile;
