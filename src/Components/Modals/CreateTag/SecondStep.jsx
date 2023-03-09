import React, { useState } from "react";
import { Flex, Box, Text, Button, useClipboard } from "@chakra-ui/react";
import { ReactComponent as Icon } from "../../../assets/images/payment2.svg";
const Success = ({ onClose }) => {
	const { onCopy, value, setValue, hasCopied } = useClipboard("");
	return (
		<Box>
			<Flex direction={"column"} alignItems={"center"} gap={"1.5rem"}>
				<Icon />
				<Text fontSize="lg" fontWeight={"bold"}>
					Psyche Tag Created Successfully
				</Text>

				<Text fontSize="md" fontWeight={"normal"} textAlign={"center"}>
					Your Psyche Tag has been updated. Start receiving payment using your
					new tag
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
					Done
				</Button>
			</Flex>
		</Box>
	);
};

export default Success;
