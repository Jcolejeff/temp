import { useState } from "react"
import { Box, Flex, Text, FormControl, Input, InputGroup, InputLeftElement, Divider } from "@chakra-ui/react"
import { FormLabelStyle, InputStyle } from "../../Reuseables"
import PsycheTagSuccessModal from "../../Modals/PsycheTagModal"


export function PsycheBeneficiaryForm({ index, setIndex, setStep, onClose, onCloseModal }) {
    const [newBeneficiaryDetails, setnewBeneficiaryDetails] = useState({
        PsycheTag: "",
    })

    const HandleChange = (e) => {
        setnewBeneficiaryDetails({ PsycheTag: e.target.value })
    }

    return (
        <form>
            <Flex direction="column" align="center" justify="center">
                <Box>
                    <Text style={FormLabelStyle} pt={10}>Psyche Tag</Text>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement h="100%" alignSelf="center" fontWeight="bold" fontSize="14px" color="#6898C8" children="@" />
                            <Input value={newBeneficiaryDetails.PsycheTag} onChange={HandleChange} required style={InputStyle} type="text" placeholder='Bolu112' />
                        </InputGroup>
                    </FormControl>
                    <Divider pt={"40px"} />
                </Box>
                <Box pt={"24px"}>
                    <PsycheTagSuccessModal />
                </Box>
            </Flex>
        </form>
    )
}