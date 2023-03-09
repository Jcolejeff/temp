import React from "react";
import { Button, Stack, Box, Text, Flex, VStack } from "@chakra-ui/react";
import { ReactComponent as NigIcon } from "../../../assets/images/Nigeria (NG).svg";
import UsdIcon from "../../../assets/images/newusd.png";
import { ReactComponent as SelectIcon } from "../../../assets/images/money.svg";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const FirstComponent = ({
	index,
	setIndex,
	setTransaction,
	typesOfTransactions,
}) => {
	return (
		<Box>
			<Stack spacing={4}>
				<Box padding={2}>
					<Flex direction={"row"}>
						<SelectIcon></SelectIcon>
						<Text fontSize="md" ml={4} mb={6}>
							select Wallet
						</Text>
					</Flex>
				</Box>

				<Menu>
					<MenuButton
						as={Button}
						border="1px"
						borderColor="gray.200"
						rounded="xl"
						bg="white"
						py={6}
					>
						<Flex direction={"row"} alignItems="center">
							<NigIcon></NigIcon>
							<Text fontSize="md" ml={4}>
								Nigeria Niara Wallet
							</Text>
						</Flex>
					</MenuButton>
					<MenuList>
						<VStack spacing="1.5rem" py="1rem">
							<Button
								onClick={() => {
									setTransaction(typesOfTransactions.nairaBank);
								}}
							>
								Bank Transfer
							</Button>
							<Button
								onClick={() => {
									setTransaction(typesOfTransactions.nairaPsycheTag);
								}}
								variant={"solid"}
								colorScheme="green"
								width="7.5rem"
							>
								Psyche Tag
							</Button>
						</VStack>
					</MenuList>
				</Menu>
				<Menu>
					<MenuButton
						as={Button}
						border="1px"
						borderColor="gray.200"
						rounded="xl"
						py={6}
						bg="white"
					>
						<Flex direction={"row"} alignItems="center">
							<img src={UsdIcon} alt="" />
							<Text fontSize="md" ml={4}>
								USD Coin Wallet
							</Text>
						</Flex>
					</MenuButton>
					<MenuList>
						<VStack spacing="1.5rem" py="1rem">
							<Button
								onClick={() => {
									setTransaction(typesOfTransactions.usdCrypto);
								}}
							>
								Crypto address
							</Button>
							<Button
								variant={"solid"}
								colorScheme="green"
								width="7.5rem"
								onClick={() => {
									setTransaction(typesOfTransactions.usdPsycheTag);
								}}
							>
								Psyche Tag
							</Button>
						</VStack>
					</MenuList>
				</Menu>
			</Stack>
		</Box>
	);
};

export default FirstComponent;
