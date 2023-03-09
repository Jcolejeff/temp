import { Box, Flex, Image, useMediaQuery, VStack } from "@chakra-ui/react";
import HeaderLogo from "../../Media/Images/PsycheFinance-logo.svg"

export default function PasswordResetContainer(props) {
    const [onMobile] = useMediaQuery('(max-width: 800px)')
    const { ContainerHeader, ContainerForm, Height, Width } = props;
    return (
        <Box overflow={"hidden"}>
            <Flex direction={'column'} align={'center'} justify={'center'} w={onMobile ? "390px" : "100%"}>
                <Box mt={56} display='flex' justifyContent={'center'} alignItems='center'>
                    <Image src={HeaderLogo} alt='header logo' />
                </Box>
                <Box p={onMobile ? "0px 10px 0px 10px" : ''} mt={onMobile ? 30 : 56} height={Height} minWidth={onMobile ? "" : "469px"}
                    width={Width} borderRadius='18px' boxShadow={onMobile ? "" : "0px 0px 50px rgba(153, 200, 248, 0.15)"}>
                    <VStack m={onMobile ? "auto" : ''} ml={onMobile ? "" : 40} mr={onMobile ? 24 : 40} align={onMobile ? "start" : "start"}>
                        <Box mt={52}>
                            {ContainerHeader}
                        </Box>
                        <Box pt={32} w={onMobile ? '342px' : '390px'}>
                            {ContainerForm}
                        </Box>
                    </VStack>
                </Box>
            </Flex >
        </Box >
    )
}