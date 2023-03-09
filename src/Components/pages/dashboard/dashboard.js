import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Tick } from "../../../assets/images/tick-circle.svg";
import { ReactComponent as Line } from "../../../assets/images/Line 4.svg";
import { ReactComponent as Eye } from "../../../assets/images/eye-slash.svg";
import { ReactComponent as Emoji } from "../../../assets/images/emoji.svg";
import { ReactComponent as Error } from "../../../assets/images/transaction-minus.svg";
import { ReactComponent as ViewAll } from "../../../assets/images/veiwAll.svg";
import TransactionHistory, { TitleItems } from "./Wallet/TransactionHistory";
import { ReactComponent as Swap } from "../../../assets/images/convert.svg";
import { ReactComponent as Send } from "../../../assets/images/money-send.svg";
import { ReactComponent as Add } from "../../../assets/images/add-circle.svg";

import {
	SendMoneyModal,
	AddMoneyModal,
	SwapMoneyModal,
	PaymentLinkModal,
} from "../../Modals/";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Box,
	Flex,
	Text,
	Heading,
	transition,
} from "@chakra-ui/react";
const DashBoard = () => {
	const [transactions, setTransactions] = useState([{}]);

	const TableHeadings = TitleItems.map((heading) => {
		return (
			<Th
				textColor="white"
				fontWeight={500}
				key={heading.id}
				fontSize={".75rem"}
			>
				{heading.title}
			</Th>
		);
	});
	const TransactionItems = TransactionHistory.map((Transaction) => {
		const getIcon = () => {
			if (Transaction.type.toLowerCase().startsWith("add")) {
				return <Add />;
			} else if (Transaction.type.toLowerCase().startsWith("send")) {
				return <Send />;
			} else {
				return <Swap></Swap>;
			}
		};
		const colours = [
			{ color: "#12B76A", bg: "#D1FADF" },
			{ color: "#E5AE40", bg: "#FDF3DF" },
			{ color: "#F04438", bg: "#FEE4E2" },
		];

		let colour;

		if (Transaction.Status.toLowerCase().startsWith("com")) {
			colour = colours[0];
		} else if (Transaction.Status.toLowerCase().startsWith("pen")) {
			colour = colours[1];
		} else {
			colour = colours[2];
		}

		return (
			<Tr key={Transaction.id} fontSize={".9rem"} fontWeight={500}>
				<Td>
					<Text>{Transaction.date}</Text>
				</Td>
				<Td>
					<Text>{Transaction.time}</Text>
				</Td>
				<Td>
					<Flex gap={".5rem"}>
						{getIcon()}
						<Text>{Transaction.type}</Text>
					</Flex>
				</Td>
				<Td>
					<Text>{Transaction.Amount}</Text>
				</Td>
				<Td>
					<Text>{Transaction.ReferenceNumber}</Text>
				</Td>
				<Td textAlign={"center"}>
					<Text
						color={colour.color}
						rounded={"xl"}
						bg={colour.bg}
						p={"0.4rem"}
						textTransform={"capitalize"}
					>
						{Transaction.Status}
					</Text>{" "}
				</Td>
			</Tr>
		);
	});

	return (
		<Wrapper>
			<div className="welcome-text">
				<p>Hi bolu</p>
				<Emoji />
			</div>
			<section className="verify">
				<h5>Complete your Account Verification</h5>
				<h6>
					Verify your Account by submitting a valid ID Card and BVN to access
					all our features and protect your account.
				</h6>
				<section>
					<div>
						<div>
							<Tick />
						</div>
						<p>Bank Verification Number (BVN)</p>
					</div>
					<Line className="line" />
					<div>
						<div>
							<Tick />
						</div>
						<p>Valid Identification card</p>
					</div>
				</section>
			</section>
			<section className="container">
				<section className="balance">
					<div className="naira">
						<div>
							<h2>N 0.00</h2>
							<h4>Nigerian Naira Wallet</h4>
						</div>
						<Eye />
					</div>
					<div className="usd">
						<div>
							<h2>$ 0.00</h2>
							<h4>USDC Wallet</h4>
						</div>
						<Eye />
					</div>
				</section>
				<section className="modals">
					<h2>Quick actions</h2>
					<div className="modals-btn">
						<SendMoneyModal />
						<AddMoneyModal />
						<SwapMoneyModal />
						<PaymentLinkModal />
					</div>
				</section>
			</section>

			<section className="transactions">
				<Flex alignItems={"center"} justifyContent={"space-between"}>
					<h3>Transactions History</h3>
					<Box mt={"-7"}>
						<ViewAll></ViewAll>
					</Box>
				</Flex>
				{transactions.length <= 0 ? (
					<div className="error">
						<Error />
						<p>you have no transactions</p>
					</div>
				) : (
					<TableContainer>
						<Table variant="striped" colorScheme="gray">
							<Thead>
								<Tr bg="black">{TableHeadings}</Tr>
							</Thead>

							<Tbody>{TransactionItems}</Tbody>
						</Table>
					</TableContainer>
				)}
			</section>
		</Wrapper>
	);
};

export default DashBoard;

const Wrapper = styled.section`
	.container {
		width: 80%;
		@media (max-width: 40rem) {
			width: 98%;
		}
	}
	.welcome-text {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}
	.verify {
		background-color: #fceabb;
		margin-block: 2rem;
		padding: 1rem;
		border-top: 5px solid #e5ae40;

		h5 {
			font-weight: 700;
		}
		h6 {
			font-size: 1rem;
			margin-block: 0.9rem;
		}
		section {
			display: flex;
			gap: 2rem;
			align-items: center;

			div {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				flex-direction: row;
			}
			p {
				font-size: 1rem;
				font-weight: 500;
			}
			@media (max-width: 40rem) {
				flex-direction: column;
				align-items: flex-start;
				gap: 0.8rem;

				.line {
					display: none;
				}
			}
		}
	}
	.balance {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		@media (max-width: 40rem) {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		.naira,
		.usd {
			background-blend-mode: soft-light, normal;
			border-radius: 8px;
			padding-inline: 1rem;
			padding-block-end: 4rem;
			padding-block-start: 1.5rem;
			color: white;
			display: flex;
			justify-content: space-between;
			h2 {
				font-size: 2rem;
				font-weight: 600;
			}
			h4 {
				font-weight: 300;
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
			@media (max-width: 40rem) {
				grid-template-columns: 1fr 1fr;
			}
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
