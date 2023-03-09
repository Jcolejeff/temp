import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import LoginInterface from "../../LoginForms/LoginInterface";
import LoginSidebar from "../../Common/AuthLayout/LoginSidebar"

const SignIn = () => {
	const [isLargeDevice] = useMediaQuery('(min-width: 1280px)')
	return (
		<Flex>
			<LoginSidebar />
			<Box ml={isLargeDevice ? "429px" : "0px"}>
				<LoginInterface />
			</Box>
		</Flex>
	);
};

export default SignIn;
