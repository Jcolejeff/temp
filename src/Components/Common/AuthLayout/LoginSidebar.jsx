import { Heading, Box, Flex, Image, Button, IconButton, Stack, VStack, Text, useMediaQuery, } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md"
import UserAvatar1 from "../../Media/Images/first-user.svg"
import UserAvatar2 from "../../Media/Images/second-user.svg"
import UserAvatar3 from "../../Media/Images/third-user.svg"
import UserAvatar4 from "../../Media/Images/fourth-user-avata.svg"
import UserAvatar5 from "../../Media/Images/fith-user-avata.svg"
import UserAvatar6 from "../../Media/Images/lady-with-glass-green-bg.svg"
import UserAvaterOnTransHis from "../../Media/Images/user-avata-on-trans-history-card.svg"
import UserAvaterBelowTransHis from "../../Media/Images/user-below-trans-history-card.svg"

export default function LoginSidebar() {
    const [isLargeDevice] = useMediaQuery('(min-width: 1280px)')
    return (
        <Box display={isLargeDevice ? 'block' : 'none'} h="100%" position="absolute" w="429px" left={0} right="auto" minH="100vh" bg="#EBEDF0">
            <VStack height='100%' align='center' justify='center' spacing={'10em'}>
                <Box>
                    <Box pb={5} position={'relative'} zIndex={5}>
                        <Stack spacing='-5' direction='row' justify='center' align='center' width='238px'
                            background='#FEF4EC' height='71px' padding='16px 8px'
                            borderRadius='1em'>
                            <Image src={UserAvatar1} />
                            <Image src={UserAvatar2} />
                            <Image src={UserAvatar3} />
                            <Image src={UserAvatar4} />
                            <Image src={UserAvatar5} />
                            <IconButton h="40px" w="40px" borderRadius='50%' p='.25em' isRound fontSize='2em' icon={<MdAdd />} />
                        </Stack>
                        <Image zIndex={10} ml='38%' mt='-.7em' mb='-2.8em' src={UserAvatar6} />
                    </Box>
                    <Box bg='white' p="18px 16px" borderRadius='1.1em' zIndex='1' position={'abosolute'} transform={"matrix(0.96, -0.27, 0.28, 0.96, 0, 0)"}
                        height='74px' width={'318px'} justifyContent='center'>

                        <Stack align={"center"} direction="row" gap={20} >
                            <Flex justify="center" align="space-around">
                                <Image pr={"3px"} src={UserAvaterOnTransHis} />
                                <VStack w="166px" justify="center" align="start">
                                    <Text lineHeight={'22px'} fontSize={'14px'}>Payment Received </Text>
                                    <Text lineHeight={'22px'} fontSize={'14px'} color='#0F5CA8'>From: 110398312</Text>
                                </VStack>
                                <VStack lineHeight={'22px'} width='59px' mr={'.2em'}>
                                    <Text width={'56px'} fontSize={'14px'} color='black' fontWeight={'700'}>N10,000</Text>
                                    <Button width={'76px'} height='26px' bg={'#12B76A'} colorScheme="#12B76A" borderRadius={'8px'}>Completed</Button>
                                </VStack>
                            </Flex>
                        </Stack>
                        <Image ml='70%' src={UserAvaterBelowTransHis} />
                    </Box>
                </Box>

                <Box mt={10} padding='.5em'>
                    <VStack direction='column' justify='start' align='start' w="365px">
                        <Heading fontSize='30px' fontFamily={'Aeonik'} fontWeight='600' color={'#0F5CA8'} lineHeight='1.4em'>
                            Unleash the power of <br />
                            banking with Psyche
                        </Heading>
                        <Text w={"365px"} pt="16px" color={'#1B1C1E'} lineHeight='24px' textAlign={'start'} fontWeight={'400'} fontSize={'16px'} fontFamily='Aeonik'>
                            Smoothly conduct your payments by using our <br />
                            Psyche tag to send and receive payment between <br /> users.
                        </Text>
                    </VStack>
                </Box>
            </VStack>

        </Box>
    )

}

