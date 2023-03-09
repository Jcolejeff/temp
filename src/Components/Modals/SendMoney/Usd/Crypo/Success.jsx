import React from "react";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import Icon from "../../../../../assets/images/up.png";
const Success = ({ onClose }) => {
	return (
		<Box>
			<Flex direction={"column"} alignItems={"center"} gap={"1.5rem"}>
				<Box>
					<Image src={Icon} />
				</Box>
				<Text fontSize="lg" fontWeight={"bold"}>
					Transaction Successful
				</Text>
				<Text fontSize="md" fontWeight={"normal"} textAlign={"center"}>
					You have successfully sent the sum of $1,000 to
					0xea674fdde714fd979de3edf0f56aa9716b898ec8
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
				>
					Done
				</Button>
			</Flex>
		</Box>
	);
};

export default Success;
