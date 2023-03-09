import { Box, VStack, Image, Stack, Text, useMediaQuery, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, IconButton, Divider, } from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc"
import { BsApple, } from "react-icons/bs"
import { FormTitle2 } from "../Common/FormTitle";
import { Link } from "react-router-dom";
import axios from "axios";
import HeaderLogo from "../Media/Images/PsycheFinance-logo.svg"
import AuthProviderBtn from "../Common/AuthLayout/AuthProvidersButton";
import SolidFormButton from "../Common/SolidFormButton";
import AlternateInput from "../Common/AltInput";
import { HiEye, HiEyeOff } from "react-icons/hi"




export default function LoginInterface() {
    const [isMobileDevice] = useMediaQuery('(max-width: 920px)')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });


    const PasswordToggle = () => {
        if (!isPasswordVisible) {
            setIsPasswordVisible(true)
        } else {
            setIsPasswordVisible(false)
        }
    }



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://818zrqvx4h.execute-api.us-east-1.amazonaws.com/dev/v1/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userCredentials.email, userCredentials.password),
            });
            const data = await response.json();
            if (response.ok) {
                // Save the authentication token to local storage or a cookie
                localStorage.setItem('token', data.token);
                console.log('Login successful!');
            } else {
                console.log('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    const HandleChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials(PrevValue => {
            return {
                ...PrevValue,
                [name]: value
            }
        })

    }

    return (
        <Box pl={isMobileDevice ? "10px" : '16px'} w='100%' overflowX={'none'}>
            <VStack align={isMobileDevice ? "center" : 'start'} justify='start' h={'832px'} w="100%">
                <Box mt="56px" mb={"64px"}>
                    <Image src={HeaderLogo} />
                </Box>
                <Box>
                    <FormTitle2 title='Login To Your Account' info='Enter your email and password to login to your account' />
                </Box>
                <Stack pt="32px" pl={isMobileDevice ? "0px" : "103px"} spacing={'15px'} direction={isMobileDevice ? 'column' : 'row'}
                    justify={isMobileDevice ? "center" : 'center'} align={isMobileDevice ? "center" : 'center'}>
                    <AuthProviderBtn leftIcon={<FcGoogle />} buttonText='Login with Google ' />
                    <AuthProviderBtn leftIcon={<BsApple />} buttonText='Login with Apple' />
                </Stack>

                <Stack w="405px" direction="row" textAlign='center' justify={isMobileDevice ? 'center' : 'end'} >
                    <Text >or</Text>
                </Stack>
                <form method="post" onSubmit={handleLogin}>
                    <Box display='flex' flexDirection={'column'} w='100%'>
                        <Flex gap={'15px'} mt={"32px"} direction={isMobileDevice ? 'column' : 'row'} >
                            <FormControl>
                                <FormLabel style={LabelStyles}>Email Address</FormLabel>
                                <AlternateInput name="email" value={userCredentials.email} onChange={HandleChange} type='email' />
                            </FormControl>

                            <FormControl w={isMobileDevice ? "330px" : "390px"}>
                                <FormLabel style={LabelStyles}>Password</FormLabel>
                                <InputGroup >
                                    <InputRightElement w="20px" h="100%" children={<IconButton onClick={PasswordToggle} variant={"ghost"} icon={!isPasswordVisible ? <HiEye /> : <HiEyeOff />} />} />
                                    <Input border='1px solid #C5D8EA' borderRadius={8} w={isMobileDevice ? "342px" : "390px"} h="38px"
                                        type={!isPasswordVisible ? "password" : "text"}
                                        name='password' value={userCredentials.password} onChange={HandleChange} />
                                </InputGroup>
                            </FormControl>
                        </Flex>
                        <Box ml={isMobileDevice ? 11 : 'auto'} mt={16}>
                            <Link>
                                <Text fontSize={14} lineHeight={'22px'} color={'#0F5CA8'}>Forgot password??</Text>
                            </Link>
                        </Box>
                        <Stack mt={"5rem"}>
                            <SolidFormButton type='submit' title='Login' />
                        </Stack>
                    </Box>
                </form>

                <Flex gap={5} pt={"25px"}>
                    <Text>New to Psyche?</Text>
                    <Link to='#'>
                        <Text color={'#0F5CA8'}>
                            Create an account
                        </Text>
                    </Link>
                </Flex>
            </VStack >
        </Box >
    )
}

const LabelStyles = {
    color: '#1B1C1E',
    fontFamily: 'Aeonik',
    fontSize: "14px",
    fontWeight: '400',
    lineHeight: '22px'
}