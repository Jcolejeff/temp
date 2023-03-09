import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { ReactComponent as Icon } from "../../../assets/images/link-circle.svg";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

function PaymentLinkModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
			<Button
				leftIcon={<Icon />}
				onClick={onOpen}
				color="#A146A1"
				bg="white"
				fontWeight={"medium"}
				py={"1.5rem"}
			>
				Payment Link
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

export default PaymentLinkModal;
