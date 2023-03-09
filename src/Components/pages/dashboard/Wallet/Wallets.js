import { ReactComponent as Eye } from "../../../../assets/images/eye-slash.svg";
import styled from "styled-components";
import { Stack, Button, Flex, Heading, Select, Spacer, Icon, Text, useMediaQuery, HStack, TableContainer, Table, Tr, Th, Td, Thead, Tbody, IconButton, Box, } from "@chakra-ui/react";
import Transactions from "./TransactionHistory";
import DateInput, { TransactionModals } from "./Reuseables";
import { ReactComponent as TrendsUp } from "../../../../assets/images/status-up.svg";
import { ReactComponent as User } from "../../../../assets/images/profile.svg";
import { ReactComponent as Send } from "../../../../assets/images/money-send.svg";
import { ReactComponent as Swap } from "../../../../assets/images/convert.svg";
import { ReactComponent as Add } from "../../../../assets/images/add-circle.svg";
import { BsCaretLeftFill, BsCaretRightFill, BsCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";



const Wallets = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)
	const [isMobileDevice] = useMediaQuery('(max-width: 920px)')


	const HideBalance = () => {
		if (!isPasswordVisible) {
			setIsPasswordVisible(true)
		} else {
			setIsPasswordVisible(false)
		}
	}


	const TransactionList = Transactions.map((Transaction) => {
		return (
			<Tr>
				<Td h="56px"><Text>{Transaction.date}</Text></Td>
				<Td><Text>{Transaction.time}</Text></Td>
				<Td>
					<Stack align="center" direction="row">
						<Icon fontSize="20px" as={(Transaction.type === "Add Money") ? Add : (Transaction.type === "Send Money") ? Send : (Transaction.type === "Swap") ? Swap : null} />
						<Text>{Transaction.type}</Text>
					</Stack>
				</Td>
				<Td><Text>{Transaction.Amount}</Text></Td>
				<Td><Text>{Transaction.ReferenceNumber}</Text></Td>
				<Td>
					<Text fontSize={"30"} style={
						(Transaction.Status === "Completed") ? CompletedStyle :
							(Transaction.Status === "Pending") ? PendingStyle :
								(Transaction.Status === "Canceled") ? CanceledStyle : null}>{Transaction.Status}</Text>
				</Td>
			</Tr>
		)
	})

	return (
		<Wrapper>
			<div>
				<section>
					<Flex position={'relative'} zIndex={1} fontFamily={'Aeonik'} mb={"1.5rem"} direction={isMobileDevice ? "column" : "row"}>
						<Heading>Wallet Balance</Heading>
						<Spacer />
						<HStack>
							<Link to="beneficiaries">
								<Button style={TopButtonStyle} bg='#FCEDFC'
									color={"#8B278B"} leftIcon={<User mr="12px" />}>Beneficiaries</Button>
							</Link>
							<Link to="analytics">
								<Button style={TopButtonStyle} bg="#E7EFF6"
									color={"#0F5CA8"} leftIcon={<TrendsUp />}>Wallet Analytics </Button>
							</Link>
						</HStack>
					</Flex>
					<section className="balance">
						<Flex gap="40px" direction={isMobileDevice ? "column" : "row"}>
							<div className="naira">

								<Box w="100%">
									<Flex w="100%" justify="space-between">
										<Box>
											{!isPasswordVisible ? <h2>N 0.00</h2> : <h2>*****</h2>}
											<h4>Nigerian Naira Wallet</h4>
										</Box>
										<Eye onClick={HideBalance} />
									</Flex>
									<Stack pt="32px">
										<TransactionModals />
									</Stack>
								</Box>

							</div>
							<div className="usd">
								<Box w="100%">
									<Flex w="100%" justify="space-between">
										<Box>
											<h2>$ 0.00</h2>
											<h4>USDC Wallet</h4>
										</Box>
										<Eye />
									</Flex>
									<Stack pt="32px">
										<TransactionModals />
									</Stack>
								</Box>
							</div>
						</Flex>
					</section>
					<section>
						<Text fontFamily='Aeonik' lineHeight="26px" fontWeight="700" fontSize='18px' pt="40px">Transaction History</Text>
						<Flex fontWeight={600} fontFamily={'Aeonik'} fontSize={'1rem'} gap={5} pt={'1rem'} align={isMobileDevice ? 'start' : 'center'} direction={isMobileDevice ? 'column' : 'row'}>
							<Text >Sort by: &nbsp; </Text>
							<Stack direction={isMobileDevice ? "column" : "row"} spacing="16px">
								<Select placeholder="Wallets" style={SelectStyle} icon={<BsCaretDownFill fontSize="18px" />} w="123px">
									<option value={'naira'}>Naira</option>
									<option value={"usd"}>USD</option>
								</Select>
								<Select placeholder="Transaction Type" style={SelectStyle} icon={<BsCaretDownFill fontSize="18px" />} w="202px">
									<option value={'naira'}>Add money</option>
									<option value={"usd"}>Send money</option>
									<option value={"usd"}>Swap</option>
								</Select>
							</Stack>
							<Spacer />
							<Stack align={'center'} direction={'row'}>
								<Text>Date: </Text>
								<DateInput />
							</Stack>
						</Flex>
					</section>
					<Box pt={'1rem'}>
						<TableContainer>
							<Table colorScheme="#E7EFF6" variant="stripped">
								<Thead h="56px" bg="#1B1C1E">
									<Tr>
										<Th style={TableHeaderStyle}>Date</Th>
										<Th style={TableHeaderStyle}>Time</Th>
										<Th style={TableHeaderStyle}>Type </Th>
										<Th style={TableHeaderStyle}>Amount </Th>
										<Th style={TableHeaderStyle}>Reference Number </Th>
										<Th style={TableHeaderStyle}>Status </Th>
									</Tr>
								</Thead>
								<Tbody>
									{TransactionList}
								</Tbody>
							</Table>
						</TableContainer>
						<Flex justify={'end'}>
							<Stack direction={'row'} mt={10} mb={30} align={'center'} justify={'flex-end'}>
								<Button>2</Button>
								<Button>3</Button>
								<Button>1</Button>
								<Text>...</Text>
								<IconButton icon={<BsCaretLeftFill />} />
								<IconButton icon={<BsCaretRightFill />} />
							</Stack>
						</Flex>
					</Box>
				</section>
			</div >
		</Wrapper >
	);
};

export default Wallets;

const SelectStyle = {
	borderRadius: "8px",
	border: "1px solid #C5D8EA",
	height: "45px",
}

const TopButtonStyle = {
	borderRadius: "20px",
	height: '40px',
	width: "172px",
	lineHeight: "22px",
	fontWeight: "semi-bold",
	fontSize: '16px'
}

const TableHeaderStyle = {
	textTransform: "capitalize",
	fontSize: "13px",
	fontWeight: "500",
	lineHeight: "23px",
	color: "#FFFFFF",
}

const PendingStyle = {
	fontFamily: 'Aeonik',
	fontStyle: "normal",
	fontWeight: "semi-bold",
	fontSize: "16px",
	lineHeight: "24px",
	textTransform: "capitalize",
	color: "#E5AE40",
	background: "#FDF3DF",
	width: "100px",
	height: "32px",
	padding: "4px 12px",
	borderRadius: "15px"

}

var CanceledStyle = {
	fontFamily: 'Aeonik',
	fontStyle: "normal",
	fontWeight: "semi-bold",
	fontSize: "16px",
	lineHeight: "24px",
	textTransform: "capitalize",
	color: "#F04438",
	background: "#FEE4E2",
	width: "100px",
	height: "32px",
	padding: "4px 12px",
	borderRadius: "15px"

}

const CompletedStyle = {
	fontFamily: 'Aeonik',
	fontStyle: "normal",
	fontWeight: "400",
	fontSize: "16px",
	lineHeight: "24px",
	textTransform: "capitalize",
	background: "#D1FADF",
	color: "#12B76A",
	width: "113px",
	height: "32px",
	padding: "4px 16px",
	borderRadius: "15px"
}

const Wrapper = styled.section`
	.container {
		width: 100%;
	}
	.welcome-text {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}
	.verify {
		background-color: #fceabb;
		margin-block: 2rem;
		padding-block: 2rem;
		padding-inline: 1rem;
		h5 {
			font-weight: bold;
		}
		h6 {
			font-size: 0.8rem;
			margin-block: 1rem;
		}
		div {
			display: flex;
			gap: 2rem;
			align-items: center;
			span {
				display: flex;
				align-items: center;
				gap: 1rem;
			}
			p {
				font-size: 1rem;
			}
		}
	}
	.balance {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2rem;
		.naira,
		.usd {
			background-blend-mode: soft-light, normal;
			border-radius: 8px;
			padding-inline: 1rem;
			padding-block-end: 2rem;
			padding-block-start: 2rem;
			color: white;
			display: flex;
			justify-content: space-between;
			h2 {
				font-size: 2rem;
				font-weight: bold;
			}
		}

		.naira {
			background: linear-gradient(90deg, #0052d4 0%, #4364f7 50%, #6fb1fc 100%);
		}
		.usd {
			background: linear-gradient(90deg, #2b5876 0%, #4e4376 100%);
		}
	}
	.modals {
		margin-block: 4rem;

		h2 {
			font-weight: bold;
			font-size: 1.2rem;
			margin-block-end: 1rem;
		}
		.modals-btn {
			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		}
	}
	.transactions {
		.error {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
		h3 {
			font-size: 1rem;
			font-weight: bold;
			margin-block-end: 1.5rem;
		}
	}
`;
