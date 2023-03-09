import { useState } from "react";
import { Box, Text, Flex, Select, useMediaQuery, Stack, Spacer, Heading, } from "@chakra-ui/react";
import { NairaBeneficiaries } from "./BankBeneficiary/NairaBeneficiaries";
import { BsCaretDownFill } from "react-icons/bs"
import { TestBeneficiaryModal } from "../Modals/FisrtModal";
import PsycheTagBeneficiaries from "./PsycheTag/PsycheTagBeneficiaries";
import AllBeneficiaries from "./AllBeneficiaries";


export default function BeneficiariesPage() {
    const [isMobileDevice] = useMediaQuery('(max-width: 800px)')
    const [paymentType, setPaymentType] = useState("default");


    const ChangePaymentType = (e) => {
        setPaymentType(e.target.value)
    }


    return (
        <Box w="100%">
            <Stack mb="34px" justify="center">
                <Stack pb="2.5rem" align="center" direction={isMobileDevice ? "column" : "row"} flexWrap={"wrap"} >
                    <Heading fontSize="24px" lineHeight="32px" fontWeight="700" >Beneficiaries</Heading>
                    <Spacer />
                    {/* <NewBeneficiaryModal /> */}
                    <TestBeneficiaryModal />
                </Stack>
                <Flex align={"center"} gap={5}>
                    <Text> Filter by: {" "}</Text>
                    <Select style={SelecStyle} icon={<BsCaretDownFill />} onChange={ChangePaymentType} w="186px">
                        <option value="default">Payment Method</option>
                        <option value="Bank">Bank Transafer</option>
                        <option value="PsycheTag">PsycheTag</option>
                    </Select>
                </Flex>
            </Stack>
            <Flex p={(paymentType === "Bank" || paymentType === "PsycheTag") ? "40px 32px" : null} w="100%" flexWrap="wrap" h={'auto'} minH={"287px"} bg="#EBEDF0" borderRadius=".9rem" >
                {(paymentType === "default") && <AllBeneficiaries />}
                {(paymentType === "Bank") && <NairaBeneficiaries />}
                {(paymentType === "PsycheTag") && <PsycheTagBeneficiaries />}

            </Flex>
        </Box >
    )
}

const SelecStyle = {
    border: "1px solid #C5D8EA",
    borderRadius: "8px",
    height: "50px",
}