import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, useMediaQuery, Button, } from "@chakra-ui/react";
import { useState } from "react";
import FirstStep from "../../../Modals/PaymentLinks/FirstStep";
import SecondStep from "../../../Modals/PaymentLinks//SecondStep";

function NewPaymentLinkModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobileDevice] = useMediaQuery('(max-width: 650px)')

    const [index, setIndex] = useState(0);
    const [step, setStep] = useState("default");
    const numberOfSteps = {
        secondStep: "secondStep",
    };
    const CloseModal = () => {
        onClose();
        setStep(numberOfSteps.default);
    };
    const component = () => {
        switch (step) {
            case numberOfSteps.secondStep:
                return <SecondStep onClose={CloseModal} setStep={setStep}></SecondStep>;

            default:
                return (
                    <FirstStep
                        index={index}
                        setIndex={setIndex}
                        setStep={setStep}
                        onClose={onClose}
                    ></FirstStep>
                );
        }
    };
    return (
        <>
            <Button style={HeaderButtonStyle} w={isMobileDevice ? "163px" : "187px"} onClick={onOpen} color="white">
                Create Payment Link
            </Button>

            <Modal isOpen={isOpen} onClose={CloseModal} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent
                    paddingBlock={4}
                    width={[
                        "95%", // 0-30em
                    ]}
                >
                    <ModalCloseButton />

                    <ModalBody>{component()}</ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default NewPaymentLinkModal;


const HeaderButtonStyle = {
    padding: "12px 8px",
    height: "46px",
    background: "#0F5CA8",
    borderRadius: "8px",
}
