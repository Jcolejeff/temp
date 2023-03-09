import { Avatar, Text, Flex, Stack } from "@chakra-ui/react"
import { TopBeneficiaries } from "../../Reuseables"

export function NairaBeneficiaries(props) {
    const { numberOfBeneficiaries } = props;
    return (
        <Flex gap={"16px"} wrap="wrap" w="auto" align="start" justify="start">
                {
                    TopBeneficiaries.slice(0, numberOfBeneficiaries).map((TopBeneficiary) => {
                        return (
                            <Stack justify="space-around" align="space-between" borderRadius=".7rem" p={4} h="auto" minH={"160px"} w="auto" minW={"170px"} background="white">
                                <Avatar boxSize={"40px"} name={TopBeneficiary.Name} />
                                <Stack spacing="8px">
                                    <Text style={TextStyle}>{TopBeneficiary.Name}</Text>
                                    <Text style={TextStyle}>{TopBeneficiary.AccountNumber}</Text>
                                    <Text style={TextStyle}>{TopBeneficiary.Bank}</Text>
                                </Stack>
                            </Stack>
                        )
                    })
                }
        </Flex>
    )
}

const TextStyle = {
    fontFamily: "Aeonik",
    fontWeight: "400",
    lineHeight: "24px",
    fontSize: "16px"
}