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
					You have successfully sent the sum of N100,000 to Boluwatife Oluwafemi
					of Wema Bank (01234576902)
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
