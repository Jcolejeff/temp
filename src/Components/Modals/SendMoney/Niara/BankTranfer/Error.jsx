import React from "react";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import Icon from "../../../../../assets/images/sad 1.png";
const Error = () => {
	return (
		<Box>
			<Flex direction={"column"} alignItems={"center"} gap={"1.5rem"}>
				<Box>
					<Image src={Icon} />
				</Box>
				<Text fontSize="lg" fontWeight={"bold"}>
					Transaction Unsuccessful
				</Text>
				<Text fontSize="md" fontWeight={"normal"} textAlign={"center"}>
					We encountered a problem while trying to fulfill your transaction. Try
					again later.
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
				>
					Try again
				</Button>
			</Flex>
		</Box>
	);
};

export default Error;
