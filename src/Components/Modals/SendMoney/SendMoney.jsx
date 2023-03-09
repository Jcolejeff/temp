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
import { ReactComponent as Icon } from "../../../assets/images/money-send.svg";
import FirstComponent from "./FirstComponent";
import NairaBankTransfer from "./Niara/BankTranfer";
import NairaPsycheTag from "./Niara/PsycheTag";
import UsdPsycheTag from "./Usd/PsycheTag";
import UsdCryptoAddress from "./Usd/Crypo";

function AddMoneyModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [index, setIndex] = useState(0);
	const [transaction, setTransaction] = useState("default");
	const typesOfTransactions = {
		nairaBank: "nairaBank",
		nairaPsycheTag: "nairaPsycheTag",
		usdCrypto: "usdCrypto",
		usdPsycheTag: "usdPsycheTag",
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
			case typesOfTransactions.nairaPsycheTag:
				return (
					<NairaPsycheTag
						onClose={CloseModal}
						setTransaction={setTransaction}
					></NairaPsycheTag>
				);
			case typesOfTransactions.usdCrypto:
				return (
					<UsdCryptoAddress
						onClose={CloseModal}
						setTransaction={setTransaction}
					></UsdCryptoAddress>
				);
			case typesOfTransactions.usdPsycheTag:
				return (
					<UsdPsycheTag
						onClose={CloseModal}
						setTransaction={setTransaction}
					></UsdPsycheTag>
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
				color="#0F5CA8"
				bg="white"
				fontWeight={"medium"}
				py={"1.5rem"}
			>
				Send money
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
