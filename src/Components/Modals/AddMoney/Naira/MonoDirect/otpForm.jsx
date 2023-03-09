import { useFormik } from "formik";
import * as Yup from "yup";
import {
	Input,
	FormControl,
	FormErrorMessage,
	Button,
	HStack,
	Flex,
} from "@chakra-ui/react";

const schema = Yup.object().shape({
	otp1: Yup.string().matches(/^[0-9]+$/, "OTP code must contain only digits"),
	otp2: Yup.string().matches(/^[0-9]+$/, "OTP code must contain only digits"),
	otp3: Yup.string().matches(/^[0-9]+$/, "OTP code must contain only digits"),
	otp4: Yup.string().matches(/^[0-9]+$/, "OTP code must contain only digits"),
});

const OtpForm = ({ onClose, setError, setSuccess, userInfo }) => {
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			otp1: "",
			otp2: "",
			otp3: "",
			otp4: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {
			// Combine OTP codes and submit to server or perform other actions here
			const otpCode = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
			console.log(values, otpCode);

			setSuccess(true);
		},
	});

	return (
		<form onSubmit={handleSubmit}>
			<HStack spacing="4">
				<FormControl isInvalid={touched.otp1 && errors.otp1}>
					<Input
						id="otp1"
						name="otp1"
						placeholder="0"
						type="number"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.otp1}
					/>
					<FormErrorMessage>{errors.otp1}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={touched.otp2 && errors.otp2}>
					<Input
						id="otp2"
						name="otp2"
						placeholder="0"
						type="number"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.otp2}
					/>
					<FormErrorMessage>{errors.otp2}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={touched.otp3 && errors.otp3}>
					<Input
						id="otp3"
						name="otp3"
						placeholder="0"
						type="number"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.otp3}
					/>
					<FormErrorMessage>{errors.otp3}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={touched.otp4 && errors.otp4}>
					<Input
						id="otp4"
						name="otp4"
						placeholder="0"
						type="number"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.otp4}
					/>
					<FormErrorMessage>{errors.otp4}</FormErrorMessage>
				</FormControl>
			</HStack>
			<Flex direction={"column"} py={"12"} gap={"1.5rem"} alignItems={"center"}>
				<Button
					colorScheme="blue"
					type="submit"
					border="1px"
					borderColor="gray.200"
					rounded="xl"
					fontWeight={"light"}
					fontSize="md"
					py={"1.5rem"}
					bg={"#0F5CA8"}
					width={"70%"}
				>
					Authorize
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
			{/* <Button type="submit">submit</Button> */}
		</form>
	);
};
export default OtpForm;
