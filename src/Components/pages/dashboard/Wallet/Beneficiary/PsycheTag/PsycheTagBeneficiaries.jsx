import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react"
import { PsycheTagTopBeneficiaries } from "../../Reuseables"

export default function PsycheTagBeneficiaries({numberOfBeneficiaries}) {
    return (
        <Box>
            <Flex gap="16px" wrap="wrap">
                {PsycheTagTopBeneficiaries.slice(0, numberOfBeneficiaries).map((beneficiaries) => {
                    return (
                        <Stack borderRadius={"8px"} p="16px 8px" bg="#FFFFFF" w="auto" minW="88px" h="124px">
                            <Avatar boxSize="40px" name={beneficiaries.Name} src={beneficiaries.imgUrl} />
                            <Text lineHeight="22px" fontSize="14px" fontWeight="semi-bold">{beneficiaries.Name}</Text>
                            <Text lineHeight="22px" fontSize="10px" fontWeight="400">{beneficiaries.PsycheTag}</Text>
                        </Stack>
                    )
                })}
            </Flex>
        </Box>
    )
}