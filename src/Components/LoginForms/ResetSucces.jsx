import { Box, Flex, Heading, Icon, Stack, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { FormTitle2 } from "../Common/FormTitle";
import { SolidBtnStyle } from "../pages/dashboard/Wallet/Reuseables";
import { ReactComponent as Tick } from "../../assets/images/blue-tick-circle.svg"
import { useNavigate } from "react-router";

export default function ResetSuccess() {
    const [onMobile] = useMediaQuery('(max-width: 992px)')
    const Navigate = useNavigate()
    return (
        <Box minH="100vh" display="flex" bg="#F7F9FB" justifyContent="center" alignItems="center">
            <Flex style={ContinerStyle}>
                <Box display={'flex'} justifyContent='center' alignItems={'center'} borderRadius={"50%"} bg={'#C5D8EA'} w="70px" h="70px">
                    <Icon color={'white'} fontSize={41} as={Tick} />
                </Box>
                <Box mt="32px">
                    <Heading mb="8px" lineHeight="32px" w="389px" fontSize="24px">Yaay!! Your Password reset has been completed</Heading>
                    <Text style={TextStyle} lineHeight="24px" w="389px">Login to your account with your new password and continue to explore Psyche</Text>
                </Box>
                <Box mt={"80px"} h="46px" w="288px">
                    <Button style={SolidBtnStyle} onClick={() => { Navigate("/sign-in") }}>Continue to Login</Button>
                </Box>
            </Flex>
        </Box >
    )
}

const ContinerStyle = {
    boxShadow: "0px 0px 50px rgba(153, 200, 248, 0.15)",
    borderRadius: "15px",
    width: "469px",
    height: "460px",
    background: "#ffffff",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
}


const TextStyle = {
    fontFamily: 'Aeonik',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    textTransform: "capitalize",
    color: "#778899",
    marginTop: "8px"
}