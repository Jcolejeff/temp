import React, { useState } from "react";
import UserInfo from "./UserInfo";
import AuthorizeTran from "./AuthorizeTran";
import Error from "./Error";
import Review from "./Review";
import Success from "./Success";
import { Button, Box } from "@chakra-ui/react";

const Index = ({ onClose, setTransaction }) => {
	const [userInfo, setUserInfo] = useState({});
	const [index, setIndex] = useState(0);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	if (error) {
		return <Error setUserInfo={setUserInfo} setIndex={setIndex}></Error>;
	}

	if (success) {
		return <Success setUserInfo={setUserInfo} onClose={onClose}></Success>;
	}
	if (index === 0) {
		return (
			<UserInfo
				onClose={onClose}
				setIndex={setIndex}
				setUserInfo={setUserInfo}
				setTransaction={setTransaction}
			/>
		);
	}
	if (index === 1) {
		return (
			<Review
				onClose={onClose}
				setIndex={setIndex}
				userInfo={userInfo}
			></Review>
		);
	}
	if (index === 2) {
		return (
			<AuthorizeTran
				onClose={onClose}
				setError={setError}
				setSuccess={setSuccess}
				userInfo={userInfo}
				setIndex={setIndex}
			/>
		);
	}
	return (
		<Box>
			something went wrong
			<Button
				onClick={() => {
					setIndex(0);
				}}
			>
				Go back
			</Button>
		</Box>
	);
};

export default Index;
