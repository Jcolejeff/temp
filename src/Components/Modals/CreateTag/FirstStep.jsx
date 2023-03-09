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
		tag: "",
	};

	const categories = ["Option 1", "Option 2", "Option 3"];
	const validationSchema = Yup.object({
		tag: Yup.string().required("tag is required"),
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
			<Flex alignItems="center" gap="0.6rem" mb={"1rem"}>
				<Icon></Icon>
				<Text fontSize="lg" fontWeight={"bold"}>
					Create Psyche Tag
				</Text>
			</Flex>
			<Text fontSize="sm" fontWeight={"normal"} color={"#778899"} mb={"2rem"}>
				Create your unique Psyche Tag and start receieving payment seamlessly
			</Text>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ errors, touched, isSubmitting, values }) => (
					<Form>
						<FormControl isInvalid={errors.tag && touched.tag}>
							<FormLabel htmlFor="tag">Psyche Tag</FormLabel>
							<Field as={Input} id="tag" name="tag" placeholder="@" />
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
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default UserInfo;
