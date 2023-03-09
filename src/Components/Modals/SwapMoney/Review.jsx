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
} from "@chakra-ui/react";
import { ReactComponent as Icon } from "../../../assets/images/convert.svg";
import { ReactComponent as Arrow } from "../../../assets/images/goback.svg";

const Review = ({
	onClose,
	setStep,
	userInfo,
	setSuccess,
	setError,
	numberOfSteps,
}) => {
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
						setStep(numberOfSteps.firstStep);
					}}
				></Arrow>
				<Flex alignItems="center" gap="0.6rem">
					<Icon></Icon>
					<Text fontSize="lg" fontWeight={"bold"}>
						Review Transaction
					</Text>
				</Flex>
			</Flex>

			<Container>
				<Text fontSize={"md"} textAlign={"center"} mb={"1rem"}>
					Swap
					<Text display={"inline"} fontWeight={"bold"}>
						{" "}
						$1,000 (USDC)
					</Text>{" "}
					to
					<Text display={"inline"} fontWeight={"bold"}>
						{" "}
						N750,000
					</Text>{" "}
				</Text>
				<Box
					padding={"1rem"}
					sx={{
						backgroundColor: "#EBEDF0",
					}}
					rounded={"md"}
					lineHeight={"1.8rem"}
				>
					<Flex justifyContent={"space-between"}></Flex>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"sm"} color={"gray.500"}>
							Transacion Fees
						</Text>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							{" "}
							$10
						</Text>
					</Flex>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"sm"} color={"gray.500"}>
							Amount debited (USDC wallet):
						</Text>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							{" "}
							$1,010
						</Text>
					</Flex>
				</Box>
			</Container>
			<Flex direction={"column"} py={"12"} gap={"1.5rem"} alignItems={"center"}>
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
					width={"70%"}
					onClick={() => {
						setSuccess(true);
					}}
				>
					Swap
				</Button>
				<Button
					onClick={onClose}
					border="1px"
					borderColor="gray.200"
					rounded="xl"
					variant={"ghost"}
					fontWeight={"light"}
					fontSize="md"
					py={"1.5rem"}
					width={"70%"}
				>
					Cancel
				</Button>
			</Flex>
		</Box>
	);
};

export default Review;
