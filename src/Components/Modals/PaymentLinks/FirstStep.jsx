import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ReactComponent as Arrow } from "../../../assets/images/goback.svg";
import { ReactComponent as Icon } from "../../../assets/images/payment.svg";
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

const UserInfo = ({ onClose, setIndex, setStep }) => {
	const initialValues = {
		currency: "",
		amount: "",
		WhoPays: "",
		title: "",
		description: "",
	};

	const categories = ["Option 1", "Option 2", "Option 3"];
	const validationSchema = Yup.object({
		currency: Yup.string().required("currency is required"),
		amount: Yup.string().required("amount is required"),

		WhoPays: Yup.string().required("WhoPays is required"),
		title: Yup.string().required("title is required"),
	});

	const onSubmit = (values, actions) => {
		setTimeout(() => {
			actions.setSubmitting(false);
		}, 1000);
		setStep("secondStep");
		console.log(values);

		// submit logic goes here
	};

	return (
		<Box>
			<Flex alignItems="center" gap="0.6rem" mb={"2rem"}>
				<Icon></Icon>
				<Text fontSize="lg" fontWeight={"bold"}>
					Create Payment Link
				</Text>
			</Flex>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ errors, touched, isSubmitting, values }) => (
					<Form>
						<FormControl isInvalid={errors.title && touched.title}>
							<FormLabel htmlFor="title">Payment Link Title</FormLabel>
							<Field as={Input} id="title" name="title" placeholder="title" />
						</FormControl>
						<FormControl
							isInvalid={errors.description && touched.description}
							mt={4}
						>
							<FormLabel htmlFor="description">
								Description (optional)
							</FormLabel>
							<Field
								as={Input}
								id="description"
								name="description"
								placeholder="description"
							/>
							{errors.description && touched.description && (
								<Box color="red" mt={1}>
									{errors.description}
								</Box>
							)}
						</FormControl>
						<FormControl isInvalid={errors.currency && touched.currency} mt={4}>
							<FormLabel htmlFor="currency">Select Currency</FormLabel>
							<Field
								as={Select}
								id="currency"
								name="currency"
								placeholder="Select currency"
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</Field>
							{errors.currency && touched.currency && (
								<Box color="red" mt={1}>
									{errors.currency}
								</Box>
							)}
						</FormControl>

						<FormControl isInvalid={errors.amount && touched.amount} mt={4}>
							<FormLabel htmlFor="amount">Amount</FormLabel>

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
						<FormControl isInvalid={errors.WhoPays && touched.WhoPays} mt={4}>
							<FormLabel htmlFor="WhoPays">
								Who Pays the Transaction Fee?
							</FormLabel>
							<Field
								as={Select}
								id="WhoPays"
								name="WhoPays"
								placeholder="Please select"
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</Field>

							{errors.WhoPays && touched.WhoPays && (
								<Box mt={1} color="red">
									{errors.WhoPays}
								</Box>
							)}
						</FormControl>
						<Flex
							direction={"column"}
							py={"6"}
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
