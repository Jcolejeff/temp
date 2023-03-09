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
import { ReactComponent as Arrow } from "../../../assets/images/arrow-right.svg";

function CreatTagModal() {
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
				rightIcon={<Arrow />}
				onClick={onOpen}
				color="#0f5ca8"
				bg="#e7eff6"
				fontWeight={"normal"}
				py={"1.5rem"}
				rounded={"4rem"}
			>
				Create tag
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

export default CreatTagModal;
