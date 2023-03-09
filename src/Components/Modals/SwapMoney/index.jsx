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
import { ReactComponent as Icon } from "../../../assets/images/convert.svg";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Review from "./Review";
import Error from "./Error";
import Success from "./Success";

function SwapMoneyModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [index, setIndex] = useState(0);
	const [step, setStep] = useState("default");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const numberOfSteps = {
		secondStep: "secondStep",
		default: "default",
		firstStep: "firstStep",
	};
	const CloseModal = () => {
		onClose();
		setStep(numberOfSteps.default);
		setError(false);
		setSuccess(false);
	};
	const component = () => {
		if (error) {
			return <Error onClose={CloseModal}></Error>;
		}
		if (success) {
			return <Success onClose={CloseModal}></Success>;
		}

		switch (step) {
			case numberOfSteps.secondStep:
				return (
					<Review
						onClose={CloseModal}
						setSuccess={setSuccess}
						setError={setError}
						setStep={setStep}
						numberOfSteps={numberOfSteps}
					></Review>
				);
			case numberOfSteps.firstStep:
				return (
					<FirstStep
						index={index}
						setIndex={setIndex}
						setStep={setStep}
						onClose={onClose}
					></FirstStep>
				);

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
				color="#008080"
				bg="white"
				fontWeight={"medium"}
				py={"1.5rem"}
			>
				Swap
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

export default SwapMoneyModal;
