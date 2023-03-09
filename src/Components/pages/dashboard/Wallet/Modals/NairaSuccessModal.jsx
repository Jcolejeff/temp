import { Button, Text, Stack, Box, VStack, IconButton, Heading, } from '@chakra-ui/react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SolidBtnStyle } from '../Reuseables';

export default function BankBeneficiarySuccessModal({ HandleModal, Clicked, onClose }) {

    return (
        <>
            <VStack justify="center" align="center" w="auto" h="494px">
                <Box bg="#E7EFF6" borderRadius="50%" p={5}>
                    <IconButton icon={<BsFillCheckCircleFill p={5} fontSize={"32px"} color="#0F5CA8" />} />
                </Box>
                <Stack textAlign="center" align="center">
                    <Heading my={"20px"} fontSize="18px" fontWeight="700">Beneficiary Added Successfully</Heading>
                    <Text><strong>Boluwatife Oluwafemi (01234576902), Wema Bank</strong> has <br />
                        been added to your beneficiary list.</Text>
                </Stack>
                <Box pt="4rem">
                    <Button style={SolidBtnStyle} onClick={onClose} >Done</Button>
                </Box>
            </VStack>

        </>
    )
}
//