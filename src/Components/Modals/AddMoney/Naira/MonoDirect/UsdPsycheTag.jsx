import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
	FormControl,
	FormLabel,
	Input,
	Select,
	Button,
	Box,
} from "@chakra-ui/react";

const MyForm = () => {
	const initialValues = {
		name: "",
		email: "",
		message: "",
		category: "",
	};

	const categories = ["Option 1", "Option 2", "Option 3"];
	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required"),
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		message: Yup.string().required("Message is required"),
		category: Yup.string().required("Category is required"),
	});

	const onSubmit = (values, actions) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			actions.setSubmitting(false);
		}, 1000);
		console.log(values);

		// submit logic goes here
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ errors, touched, isSubmitting }) => (
				<Form>
					<FormControl isInvalid={errors.name && touched.name}>
						<FormLabel htmlFor="name">Name</FormLabel>
						<Field as={Input} id="name" name="name" placeholder="Name" />
						{errors.name && touched.name && (
							<Box color="red" mt={1}>
								{errors.name}
							</Box>
						)}
					</FormControl>

					<FormControl isInvalid={errors.email && touched.email} mt={4}>
						<FormLabel htmlFor="email">Email</FormLabel>
						<Field as={Input} id="email" name="email" placeholder="Email" />
						{errors.email && touched.email && (
							<Box color="red" mt={1}>
								{errors.email}
							</Box>
						)}
					</FormControl>

					<FormControl isInvalid={errors.message && touched.message} mt={4}>
						<FormLabel htmlFor="message">Message</FormLabel>
						<Field
							as={Input}
							id="message"
							name="message"
							placeholder="Message"
						/>
						{errors.message && touched.message && (
							<Box color="red" mt={1}>
								{errors.message}
							</Box>
						)}
					</FormControl>

					<FormControl isInvalid={errors.category && touched.category} mt={4}>
						<FormLabel htmlFor="category">Category</FormLabel>
						<Field
							as={Select}
							id="category"
							name="category"
							placeholder="Select a category"
						>
							{categories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</Field>
						{errors.category && touched.category && (
							<Box color="red" mt={1}>
								{errors.category}
							</Box>
						)}
					</FormControl>

					<Button
						mt={4}
						colorScheme="teal"
						type="submit"
						isLoading={isSubmitting}
					>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default MyForm;
