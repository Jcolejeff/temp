import { useState } from "react";
import { Box, Button, Text, Divider, Image, Spacer, Stack, VStack, Heading, HStack, Flex, } from "@chakra-ui/react";
import DateInput from "./Reuseables";
import { AiFillDollarCircle } from "react-icons/ai";
import NaijaLogo from "../../../Media/Images/Nigerian-logo.svg";
import AnalyticChart from "./NairaChart";
import USDChart from "./USDChart";
import AllBeneficiaries from "./Beneficiary/AllBeneficiaries";

export default function Analytics() {
    const [walletType, setWalletType] = useState({
        Naira: true,
        USD: false,
    })

    const SetNairaWallet = () => {
        setWalletType({ Naira: true })
    }

    const SetUSDWallet = () => {
        setWalletType({ USD: true })
    }


    return (
        <Box>
            <Box borderRadius={8} bg="white" p={10}>
                <section>
                    <Stack mb={5} direction={'row'}>

                        <Button w="82px" h="40px" border={walletType.Naira ? "2px solid #0F5CA8" : "1px solid #C5D8EA"} onClick={SetNairaWallet}
                            leftIcon={<Image alt="naira" h="22px" borderRadius={10} src={NaijaLogo} />}
                        >NGN</Button>

                        <Button w="82px" h="40px" border={walletType.USD ? "2px solid #0F5CA8" : "1px solid #C5D8EA"} onClick={SetUSDWallet} leftIcon={<AiFillDollarCircle h="24px" fontSize={26} color="#0F5CA8" />}>USDC</Button>

                    </Stack>
                    <Divider border={'2px solid #DDE1E6'} />
                </section>
                <section>
                    <VStack mt={'40px'} align={'flex-start'} justify={'flex-start'}>
                        <Text>Wallet Balance</Text>
                        <Heading>{walletType.USD ? '$100,000.00' : "N100,000.00"}</Heading>
                    </VStack>
                </section >
                <Flex mt={"72px"}>
                    <Heading>Wallet Analytics</Heading>
                    <Spacer />
                    <Stack align="center" direction={'row'}>
                        <Text>Date:</Text>
                        <DateInput />
                    </Stack>
                </Flex>
                <Flex gap={20}>
                    <HStack>
                        <Box w={"15px"} h={"15px"} bg="#FFA500" borderRadius={"50%"}></Box>
                        <Text>Total Inflow - {walletType.Naira ? "N500,000.00" : "$500,000.00"}</Text>
                    </HStack>
                    <HStack>
                        <Box w={"15px"} h={"15px"} bg="#1B1C1E" borderRadius={"50%"}></Box>
                        <Text>Total Outflow -{walletType.Naira ? "N100,000.00" : "$100,000.00"}</Text>
                    </HStack>
                </Flex>
            </Box>
            {walletType.Naira ?
                <>
                    <Box pt={10} >
                        <AnalyticChart />
                    </Box>
                    <Divider />
                    <Box>
                        <AllBeneficiaries />
                    </Box>
                </>
                :
                <>
                    <Box pt={10} pb={5}>
                        <USDChart />
                    </Box>
                    <Divider />
                    <Box>
                        <AllBeneficiaries />
                    </Box>
                </>
            }
        </Box >
    )
}