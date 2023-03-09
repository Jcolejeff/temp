import { useState } from "react";
import { Box, Stack, FormControl, FormLabel, Text, VStack, Image, Heading, Container, Button, } from "@chakra-ui/react";
import HeaderLogo from "../Media/Images/PsycheFinance-logo.svg"
import { SolidBtnStyle } from "../pages/dashboard/Wallet/Reuseables";
import PasswordInput from "../Common/PasswordInput";


export default function NewPassword() {
    const [password, setPassword] = useState({
        FirstPassword: "",
        SecondPassword: ""
    })


    const HandleSubmit = (e) => {
        if (password.FirstPassword === password.SecondPassword) {
            alert("Your password does match")
            console.log(password)
        } else {
            alert("Your password does not  match")
        }
        e.preventDefault()
    }

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setPassword((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <Box bg="#F7F9FB" justifyContent="center" flexDirection="column" display="flex" minH="100vh" h="auto" alignItems="center">
            <Image alt="header logo" src={HeaderLogo} />
            <Box mt="56px">
                <VStack borderRadius="15px" bg="white" w="482px" h="402px" align="center" justify="center">
                    <Container as="div">
                        <Heading style={HeadingStyle}>Reset your password</Heading>
                        <Text style={TextStyle}>Enter your email to reset your password</Text>
                        <Stack justify="center">
                            <form onSubmit={HandleSubmit} style={{ marginTop: '32px' }}>
                                <FormControl w="390px">
                                    <FormLabel fontWeight="400" color="#778899" fontSize="14px">Enter New Password</FormLabel>
                                    <PasswordInput name="FirstPassword" onChange={HandleChange} />
                                </FormControl>
                                <FormControl w="390px" mt="32px">
                                    <FormLabel fontWeight="400" color="#778899" fontSize="14px">Confirm New Password</FormLabel>
                                    <PasswordInput name="SecondPassword" onChange={HandleChange} />
                                </FormControl>
                                <FormControl alignItems="center" pt="80px">
                                    <Button style={SolidBtnStyle} type="submit">Continue</Button>
                                </FormControl>
                            </form>
                        </Stack>
                    </Container>
                </VStack>
            </Box >
        </Box >
    )
}

const HeadingStyle = {
    fontFamily: 'Aeonik',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "32px",
    textTransform: "capitalize",
    color: "#1B1C1E"
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