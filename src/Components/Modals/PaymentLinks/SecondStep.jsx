import React, { useState } from "react";
import { Flex, Box, Text, Button, useClipboard } from "@chakra-ui/react";
import { ReactComponent as Icon } from "../../../assets/images/payment2.svg";
const Success = ({ onClose }) => {
	const { onCopy, value, setValue, hasCopied } = useClipboard("");
	const [link, setLink] = useState("https:psyche-finance/tyts/ioosn");
	return (
		<Box>
			<Flex direction={"column"} alignItems={"center"} gap={"1.5rem"}>
				<Icon />
				<Text fontSize="lg" fontWeight={"bold"}>
					Your Payment Link is Ready
				</Text>
				<Flex alignItems={"center"} gap={"0.5rem"} color={"#0F5CA8"}>
					<Box
						p={"1rem"}
						onClick={() => setValue(link)}
						bg={"#E7EFF6"}
						rounded="md"
					>
						{link}
					</Box>
					<Button bg={"#E7EFF6"} onClick={onCopy} py={"1.8rem"}>
						{hasCopied ? "Copied!" : "Copy"}
					</Button>
				</Flex>
				<Text fontSize="md" fontWeight={"semibold"} textAlign={"center"}>
					Receiving payment from client just got easier. Copy the link and send
					to your customers to receive payments
				</Text>
				<Button
					type="submit"
					border="1px"
					borderColor="gray.200"
					rounded="xl"
					fontWeight={"light"}
					fontSize="md"
					py={"1.5rem"}
					bg={"#0F5CA8"}
					width={"70%"}
					color={"white"}
					onClick={onClose}
					mt="9"
				>
					Continue
				</Button>
			</Flex>
		</Box>
	);
};

export default Success;
