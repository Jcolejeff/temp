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
	Grid,
	GridItem,
} from "@chakra-ui/react";
import { ReactComponent as Icon } from "../../../../../assets/images/money.svg";
import { ReactComponent as Arrow } from "../../../../../assets/images/goback.svg";

const Review = ({ onClose, setIndex, userInfo }) => {
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
						setIndex(0);
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
					Send the sum of
					<Text display={"inline"} fontWeight={"bold"}>
						{" "}
						$10,100
					</Text>{" "}
					to bolu
				</Text>
				<Box
					padding={"1rem"}
					sx={{
						backgroundColor: "#EBEDF0",
					}}
					rounded={"md"}
					lineHeight={"1.8rem"}
					overflow={"hidden"}
				>
					<Grid
						justifyContent={"space-between"}
						gridTemplateColumns={"1fr 1fr"}
					>
						<GridItem fontSize={"sm"} color={"gray.500"}>
							Address:
						</GridItem>
						<GridItem
							fontSize={"sm"}
							fontWeight={"bold"}
							textOverflow={""}
							justifySelf={"end"}
						>
							{" "}
							0xea674fdde714fd979de 3edf0f56aa9716b898ec8
						</GridItem>
					</Grid>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"sm"} color={"gray.500"}>
							Network
						</Text>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							{" "}
							Ethereum
						</Text>
					</Flex>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"sm"} color={"gray.500"}>
							Transaction Fees (1%):
						</Text>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							{" "}
							$100
						</Text>
					</Flex>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"sm"} color={"gray.500"}>
							Total fees to be charged:
						</Text>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							{" "}
							$10,100
						</Text>
					</Flex>
				</Box>
				<FormControl display="flex" alignItems="center" mt={"1.3rem"}>
					<Switch id="save" size="lg" />
					<FormLabel htmlFor="save" m="1rem">
						Add to beneficiary?
					</FormLabel>
				</FormControl>
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
						setIndex(2);
					}}
				>
					Send Money
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
