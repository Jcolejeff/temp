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
import { ReactComponent as Icon } from "../../../assets/images/add-circle.svg";
import FirstComponent from "./FirstComponent";
import NairaBankTransfer from "./Naira/BankTransfer";
import NairaMonoDirect from "./Naira/MonoDirect";
import UsdCryptoAddress from "./UsdCrypto";

function AddMoneyModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [index, setIndex] = useState(0);
	const [transaction, setTransaction] = useState("default");
	const typesOfTransactions = {
		nairaBank: "nairaBank",
		nairaMonoDirect: "nairaMonoDirect",
		usdCrypto: "usdCrypto",
		default: "default",
	};
	const CloseModal = () => {
		onClose();
		setTransaction(typesOfTransactions.default);
	};
	const component = () => {
		switch (transaction) {
			case typesOfTransactions.nairaBank:
				return (
					<NairaBankTransfer
						onClose={CloseModal}
						setTransaction={setTransaction}
					></NairaBankTransfer>
				);
			case typesOfTransactions.nairaMonoDirect:
				return (
					<NairaMonoDirect
						onClose={CloseModal}
						setTransaction={setTransaction}
					></NairaMonoDirect>
				);
			case typesOfTransactions.usdCrypto:
				return (
					<UsdCryptoAddress
						onClose={CloseModal}
						setTransaction={setTransaction}
					></UsdCryptoAddress>
				);

			default:
				return (
					<FirstComponent
						index={index}
						setIndex={setIndex}
						setTransaction={setTransaction}
						typesOfTransactions={typesOfTransactions}
					></FirstComponent>
				);
		}
	};
	return (
		<>
			<Button
				leftIcon={<Icon />}
				onClick={onOpen}
				color="#008000"
				bg="white"
				fontWeight={"medium"}
				py={"1.5rem"}
			>
				Add Money
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

export default AddMoneyModal;
