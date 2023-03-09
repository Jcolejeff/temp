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
import { ReactComponent as Icon } from "../../../../../assets/images/money.svg";
import { ReactComponent as Arrow } from "../../../../../assets/images/goback.svg";
import OtpForm from "./otpForm";

const AuthorizeTran = ({
	onClose,
	setError,
	setSuccess,
	userInfo,
	setIndex,
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
						setIndex(1);
					}}
				></Arrow>
				<Flex alignItems="center" gap="0.6rem">
					<Icon></Icon>
					<Text fontSize="lg" fontWeight={"bold"}>
						Authorize Transaction
					</Text>
				</Flex>
			</Flex>

			<Container>
				<Text fontSize={"md"} textAlign={"center"} mb={"1rem"}>
					Enter your 4-digit Transaction Pin to authorize your transaction
				</Text>
				<OtpForm
					onClose={onClose}
					setError={setError}
					setSuccess={setSuccess}
					userInfo={userInfo}
				></OtpForm>
			</Container>
		</Box>
	);
};

export default AuthorizeTran;
