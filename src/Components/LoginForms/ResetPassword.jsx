import { useState } from "react";
import { Box, Stack, FormControl, FormLabel, useMediaQuery, Input, Text, VStack, Image, Heading, Container } from "@chakra-ui/react";
import SolidFormButton from "../Common/SolidFormButton";
import HeaderLogo from "../Media/Images/PsycheFinance-logo.svg"
import Right from "../Common/AuthLayout/Right";


export default function PasswordReset() {
    const [onMobile] = useMediaQuery('(max-width: 992px)')
    const [email, setEmail] = useState("")


    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    const HandleChange = (e) => {
        setEmail(e.target.value)
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
                                <FormControl>
                                    <FormLabel fontWeight="400" color="#778899" fontSize="14px">Email Addess</FormLabel>
                                    <Input onChange={HandleChange} borderRadius="8px" border="1px solid #C5D8EA" h="38px" w="390px" type="email" />
                                </FormControl>
                                <FormControl alignItems="center" pt="80px">
                                    <SolidFormButton type="submit" title='Continue' />
                                </FormControl>
                            </form>
                        </Stack>
                    </Container>
                </VStack>
            </Box>
        </Box>
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