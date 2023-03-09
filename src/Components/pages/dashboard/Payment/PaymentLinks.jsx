import React, { useState } from "react";
import { Table, Thead, Tbody, Text, Tr, Th, Td, Button, useMediaQuery, TableContainer, Box, IconButton, useClipboard, Image, Flex, Stack, Input, InputGroup, InputLeftElement, Spacer, useToast } from '@chakra-ui/react'
import { PaymentLinkData } from "../Wallet/Reuseables";
import { ReactComponent as Next } from "../../../../assets/images/arrow-right-sm.svg"
import { ReactComponent as Search } from "../../../../assets/images/search-normal.svg"
import NGN from "../../../../assets/images/Nigeria-ng-sm.svg"
import PaymentIcon from "../../../../assets/images/blue-link-circle.svg"
import { BsFillCircleFill } from "react-icons/bs";
import NewPaymentLinkModal from "./Modal";


export default function PaymentLink() {
    const [isMobileDevice] = useMediaQuery('(max-width: 650px)')
    const { onCopy, setValue, hasCopied } = useClipboard("");
    const [numberOfLinks] = useState(2);
    const toast = useToast()


    const SuccessToast = () => {
        return (
            toast({
                title: 'Payment Link',
                description: "Your payment link was successfully copied.",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
        )
    }


    function NoPaymentLink() {
        return (
            <>
            <Tr>
                <Td colSpan="7">
                <Stack justify="center" align="center" w="100%" h="341px">
                    <Image w="58.33px" h="58.33px" src={PaymentIcon} />
                    <Text pt="38px">No payment link has been created yet</Text>
                </Stack>
                </Td>
            </Tr>
            </>
        )
    }


    function PaymentLinksComponent() {
        return (
            <>
                {
                    PaymentLinkData.map((data) => {
                        const newValue = () => {
                            setValue(data.Link)
                            onCopy()
                            if (hasCopied) {
                                return SuccessToast()
                            }
                        }
                        return (
                            <Tr>
                                <Td>
                                    <Text>{data.Institution}</Text>
                                </Td>
                                <Td>
                                    <Flex gap="8px" align="center">
                                        <Image src={NGN} />
                                        <Text>{data.Currency}</Text>
                                    </Flex>
                                </Td>
                                <Td>
                                    <Text> {data.Amount}</Text>
                                </Td>
                                <Td>
                                    <Text key={data.id}>{data.DateAndTime}</Text>
                                </Td>
                                <Td>
                                    <Stack direction="row" align="center"
                                        style={data.Status === "Active" ? ActiveStyle : InactiveStyle}>
                                        <BsFillCircleFill />
                                        <Text>{data.Status}</Text>
                                    </Stack>
                                </Td>
                                <Td>
                                    <Button id={data.id} key={data.id} style={CopyButtonStyle} onClick={newValue}>Copy Link</Button>
                                </Td>
                                <Td>
                                    <IconButton variant="ghost" icon={<Next />} />
                                </Td>
                            </Tr>
                        )
                    })
                }
            </>
        )
    }
    return (
        <React.Fragment>
            <Flex direction={isMobileDevice ? "column" : "row"} align={isMobileDevice ? "start" : "center"} pb={20}>
                <Stack>
                    <Text fontFamily="Aeonik" fontSize="24px" fontWeight="700" lineHeight="32px">Payment Link</Text>
                </Stack>
                <Spacer />
                <Stack gap="16px" direction="row">
                    <InputGroup h="auto" width="auto">
                        <InputLeftElement h="100%" children={<Search />} />
                        <Input border="1px solid #C5D8EA" h="46px" w={isMobileDevice ? "163px" : "195px"} borderRadius="8px"
                            placeholder="Search" type="search" />
                    </InputGroup>
                    <NewPaymentLinkModal />
                </Stack>
            </Flex>
            <Box width="100%">
                <TableContainer>
                    <Table variant='simple' align="center" justifyContent="center">
                        <Thead bg="#1B1C1E" h="56px">
                            <Tr>
                                <Th style={TableHeaderStyle}>Title</Th>
                                <Th style={TableHeaderStyle}>Currency</Th>
                                <Th style={TableHeaderStyle}>Amount</Th>
                                <Th style={TableHeaderStyle}>Date & Time</Th>
                                <Th style={TableHeaderStyle}>Status</Th>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody bg="white">
                            {(numberOfLinks >= 1) ? PaymentLinksComponent() : NoPaymentLink()}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </React.Fragment>
    )
}

const TableHeaderStyle = {
    textTransform: "capitalize",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "23px",
    color: "#FFFFFF",
}

const CopyButtonStyle = {
    width: "97px",
    height: "40px",
    background: "#E7EFF6",
    borderRadius: "20px",
    fontFamily: 'Aeonik',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    textTransform: "capitalize",
    color: "#0F5CA8",
}

const InactiveStyle = {
    fontFamily: 'Aeonik',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    textTransform: "capitalize",
    color: "#778899",
    background: "#EBEDF0",
    width: "100px",
    height: "32px",
    padding: "4px 12px",
    borderRadius: "15px"

}

const ActiveStyle = {
    fontFamily: 'Aeonik',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    textTransform: "capitalize",
    background: "#D1FADF",
    color: "#12B76A",
    width: "100px",
    height: "32px",
    padding: "4px 12px",
    borderRadius: "15px"
}