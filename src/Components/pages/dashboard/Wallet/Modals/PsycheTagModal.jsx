import { Modal, Button, useDisclosure, ModalOverlay, Text, ModalContent, ModalBody, Stack, Box, VStack, IconButton, Heading, } from '@chakra-ui/react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SolidBtnStyle } from '../Reuseables';


export default function PsycheTagSuccessModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const component = () => {
        return (
            <>
                <VStack justify="center">
                    <Box bg="#E7EFF6" borderRadius="50%" p={5}>
                        <IconButton icon={<BsFillCheckCircleFill p={5} fontSize={"32px"} color="#0F5CA8" />} />
                    </Box>
                    <Stack textAlign="center" align="center">
                        <Heading my={"20px"} fontSize="18px" fontWeight="700">Beneficiary Added Successfully</Heading>
                        <Text>Your beneficiary list has been updated with the user tag @Bolu112 </Text>
                    </Stack>
                    <Box pt="4rem">
                        <Button style={SolidBtnStyle} onClick={onClose}>Done</Button>
                    </Box>
                </VStack>

            </>
        )
    }
    return (
        <>
            <Button style={SolidBtnStyle} onClick={onOpen} {...onOpen ? onclose : ""} _hover={"none"}>Add to Beneficiary</Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent  h={"370px"}>
                    <Stack mt={-3} ml={"95%"}>
                        <Button borderRadius="50%" onClick={onClose}>X</Button>
                    </Stack>
                    <ModalBody>{component()}</ModalBody>
                </ModalContent>

            </Modal>
        </>
    )
}