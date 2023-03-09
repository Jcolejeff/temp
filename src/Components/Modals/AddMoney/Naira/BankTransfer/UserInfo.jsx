import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ReactComponent as Arrow } from "../../../../../assets/images/goback.svg";
import { ReactComponent as Icon } from "../../../../../assets/images/add-circle1.svg";
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
		sendMethod: "Bank Transfer",
		amount: "",
	};

	const categories = ["Bank Transfer"];
	const validationSchema = Yup.object({
		sendMethod: Yup.string().required("sendMethod is required"),
		amount: Yup.string().required("amount is required"),
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
					<Text fontSize="lg" fontWeight={"bold"}>
						Add Money
					</Text>
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
							isInvalid={errors.sendMethod && touched.sendMethod}
							mt={4}
						>
							<FormLabel htmlFor="sendMethod">Selected Method</FormLabel>
							<Field
								as={Select}
								id="sendMethod"
								name="sendMethod"
								placeholder="Select Method"
								value={values.sendMethod}
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</Field>
							{errors.sendMethod && touched.sendMethod && (
								<Box color="red" mt={1}>
									{errors.sendMethod}
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
								placeholder="Amount"
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
