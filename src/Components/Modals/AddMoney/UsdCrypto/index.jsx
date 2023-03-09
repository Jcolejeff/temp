import React from "react";
import {
	Box,
	Flex,
	Text,
	Button,
	Container,
	FormControl,
	FormLabel,
	Switch,
	Image,
	useClipboard,
	Textarea,
} from "@chakra-ui/react";
import { ReactComponent as Icon } from "../../../../assets/images/add-circle1.svg";
import { ReactComponent as Arrow } from "../../../../assets/images/goback.svg";
import Code from "../../../../assets/images/QR Code.svg";

const Review = ({
	onClose,
	setIndex,
	userInfo,
	setSuccess,
	setTransaction,
}) => {
	const { onCopy, value, setValue, hasCopied } = useClipboard(
		"0xf3f0e35b4efd0b6c76c54e3cc02c2bb4f41de21d"
	);
	return (
		<Box>
			<Flex
				justifyContent={"start"}
				direction="column"
				mt="1rem"
				gap="1rem"
				mb="2rem"
			>
				<Arrow
					onClick={() => {
						setTransaction("default");
					}}
				></Arrow>
				<Flex alignItems="center" gap="0.6rem">
					<Icon></Icon>
					<Text fontSize="lg" fontWeight={"bold"}>
						Add money
					</Text>
				</Flex>
			</Flex>

			<Container>
				<Flex direction={"column"} alignItems={"center"} gap={"1.5rem"}>
					<Box>
						<Image src={Code} />
					</Box>

					<Text fontSize="md" fontWeight={"normal"} textAlign={"center"}>
						Scan this QR Code or copy your wallet address as shown below
					</Text>
				</Flex>
				<Flex my={4} direction="column">
					<Text ml="1rem" color="gray.500">
						Wallet Address
					</Text>
					<Textarea
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
						mr={2}
						border="none"
						placeholder="0xf3f0e35b4efd0b6c76c54e3cc02c2bb4f41de21d"
						type="textArea"
						disabled
						fontWeight="bold"
					/>
					<Text ml="1rem" fontSize="md" color="gray.500">
						Network
					</Text>
					<Text ml="1rem" my="1.2rem">
						BEP 20
					</Text>
					<Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
				</Flex>
			</Container>
			<Flex justifyContent={"center"}>
				<Button
					colorScheme="blue"
					type="submit"
					border="1px"
					borderColor="gray.200"
					rounded="xl"
					fontWeight={"light"}
					fontSize="md"
					py={"1.5rem"}
					bg={"#0F5CA8"}
					width={"94%"}
					onClick={onClose}
				>
					Done
				</Button>
			</Flex>
		</Box>
	);
};

export default Review;
