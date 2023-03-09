import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ReactComponent as Arrow } from "../../../assets/images/goback.svg";
import { ReactComponent as Icon } from "../../../assets/images/convert.svg";
import { ReactComponent as NigIcon } from "../../../assets/images/Nigeria (NG).svg";
import UsdIcon from "../../../assets/images/newusd.png";
import { AiOutlineArrowRight } from "react-icons/ai";
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
	Container,
	Image,
} from "@chakra-ui/react";

const UserInfo = ({ onClose, setIndex, setStep }) => {
	const [selected, setSelected] = [
		{
			USDtoNGN: false,
			NGNtoUSD: false,
		},
	];
	const initialValues = {
		currency: "",
		amount: "",
		WhoPays: "",
		title: "",
		description: "",
	};

	const categories = ["Option 1", "Option 2", "Option 3"];
	const validationSchema = Yup.object({
		amount: Yup.string().required("amount is required"),
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
					Swap
				</Text>
			</Flex>
			<Flex direction={"column"} gap={"2rem"}>
				<Button paddingBlock={"2rem"}>
					<Flex alignItems={"center"} gap={"1rem"}>
						<Text>NGN </Text> <NigIcon /> <AiOutlineArrowRight /> to{" "}
						<Text>USD </Text>
						<Image src={UsdIcon} />
					</Flex>
				</Button>
				<Button paddingBlock={"2rem"}>
					<Flex alignItems={"center"} gap={"1rem"}>
						<Text>USD </Text> <Image src={UsdIcon} /> <AiOutlineArrowRight /> to{" "}
						<Text>NGN</Text>
						<NigIcon />
					</Flex>
				</Button>
			</Flex>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ errors, touched, isSubmitting, values }) => (
					<Form>
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
