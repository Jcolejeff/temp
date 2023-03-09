import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ReactComponent as Arrow } from "../../../../../assets/images/goback.svg";
import { ReactComponent as Icon } from "../../../../../assets/images/money.svg";
import {
	FormControl,
	FormLabel,
	Input,
	Select,
	Button,
	Box,
	VStack,
	Flex,
	Text,
	HStack,
} from "@chakra-ui/react";

const UserInfo = ({ onClose, setIndex, setUserInfo, setTransaction }) => {
	const initialValues = {
		sentTo: "",
		address: "",
		sendTo: "bolu",
		network: "",
		balance: "120000",
		amount: "",
	};

	const categories = ["Option 1", "Option 2", "Option 3"];
	const validationSchema = Yup.object({
		sentTo: Yup.string().required("sentTo is required"),
		address: Yup.string().required("address is required"),
		amount: Yup.string("receiver is required"),
		network: Yup.string().required("network is required"),
	});

	const onSubmit = (values, actions) => {
		setUserInfo({ ...values });

		setTimeout(() => {
			actions.setSubmitting(false);
		}, 1000);
		setIndex(1);
		console.log(values);

		// submit logic goes here
	};

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
						setTransaction("default");
					}}
				></Arrow>
				<Flex alignItems="center" gap="0.6rem">
					<Icon></Icon>
					<Text fontSize="lg">Send Money</Text>
				</Flex>
			</Flex>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ errors, touched, isSubmitting, values }) => (
					<Form>
						<FormControl
							isInvalid={errors.balance && touched.balance}
							isDisabled={true}
						>
							<FormLabel htmlFor="balance">Balance</FormLabel>
							<Field
								as={Input}
								id="balance"
								name="balance"
								placeholder="balance"
								value={values.balance}
							/>
						</FormControl>
						<FormControl isInvalid={errors.sentTo && touched.sentTo} mt={4}>
							<FormLabel htmlFor="sentTo">Send To</FormLabel>
							<Field
								as={Select}
								id="sentTo"
								name="sentTo"
								placeholder="Select sentTo"
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</Field>
							{errors.sentTo && touched.sentTo && (
								<Box color="red" mt={1}>
									{errors.sentTo}
								</Box>
							)}
						</FormControl>
						<FormControl isInvalid={errors.network && touched.network} mt={4}>
							<FormLabel htmlFor="network">Network</FormLabel>
							<Field
								as={Input}
								id="network"
								name="network"
								placeholder="network Number"
							/>
							{errors.network && touched.network && (
								<Box mt={1} color="red">
									{errors.network}
								</Box>
							)}
						</FormControl>

						<FormControl isInvalid={errors.address && touched.address} mt={4}>
							<FormLabel htmlFor="address">Address</FormLabel>

							<Field
								as={Input}
								id="address"
								name="address"
								placeholder="address"
							/>
							{errors.address && touched.address && (
								<Box color="red" mt={1}>
									{errors.address}
								</Box>
							)}
						</FormControl>
						<FormControl isInvalid={errors.amount && touched.amount} mt={4}>
							<Flex alignItems={"center"} justifyContent={"space-between"}>
								<FormLabel htmlFor="amount">Amount</FormLabel>
								<Text fontSize="md" color={"blue"} mt={"-3"}>
									fees: N50
								</Text>
							</Flex>
							<Field
								as={Input}
								id="amount"
								name="amount"
								placeholder="amount"
							/>
							{errors.amount && touched.amount && (
								<Box color="red" mt={1}>
									{errors.amount}
								</Box>
							)}
						</FormControl>
						<Flex
							direction={"column"}
							py={"12"}
							gap={"1.5rem"}
							alignItems={"center"}
						>
							<Button
								colorScheme="blue"
								type="submit"
								isLoading={isSubmitting}
								border="1px"
								borderColor="gray.200"
								rounded="xl"
								fontWeight={"light"}
								fontSize="md"
								py={"1.5rem"}
								bg={"#0F5CA8"}
								width={"70%"}
							>
								Continue
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
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default UserInfo;
