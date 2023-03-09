import React, { useState } from 'react'
import { Button, Input, FormControl, FormLabel, Text, Stack, Select, Box, VStack, Divider, Flex } from '@chakra-ui/react'
import { ButtonStyle, FormLabelStyle, InputStyle, SolidBtnStyle } from '../../Reuseables';
import {BsCaretDownFill} from "react-icons/bs"



export default function BankBeneficiaryForm({ onClose, onClick, closeModal, setIndex, setStep }) {
    const [newBeneficiaryDetails, setNewBeneficiaryDetails] = useState({
        Bank: "",
        AccountNumber: "",
        AccountName: ""
    })

    const onSubmit = (e, values, actions) => {
        setTimeout(() => {
            actions.setSubmitting(false);
        }, 1000);
        setStep("secondStep");
        console.log(values);
        e.preventDefault()
        // submit logic goes here
    };


    const HandleChange = (e) => {
        const { name, value } = e.target;
        setNewBeneficiaryDetails(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        console.log(newBeneficiaryDetails)
    }
    return (
        <Box>
            <form onSubmit={onSubmit}>
                <VStack align="start">
                    <Stack pt="16px" >
                        <Text style={FormLabelStyle}>Select Bank</Text>
                        <Select icon={<BsCaretDownFill  fontSize="18px" />} style={InputStyle} onChange={HandleChange} h="40px" w="390px">
                            <option value="Wema Bank" name="Bank" style={InputStyle}>Wema Bank</option>
                            <option value="First Bank" name="Bank" style={InputStyle}>First Bank</option>
                            <option value="Sterling Bank" name="Bank" style={InputStyle}>Sterling Bank</option>
                        </Select>
                    </Stack>
                    <Stack>
                        <FormControl pt="16px">
                            <FormLabel style={FormLabelStyle}>Account Number</FormLabel>
                            <Input _placeholder={FormLabelStyle} onChange={HandleChange} name="AccountNumber" required style={ModalInputStyle} placeholder='01234576902' />
                        </FormControl>

                        <FormControl pt={"16px"}>
                            <FormLabel style={FormLabelStyle}>Account Name</FormLabel>
                            <Input _placeholder={FormLabelStyle} onChange={HandleChange} name="AccountName" style={ModalInputStyle} type="text" placeholder='Boluwatife Oluwafemi' />
                        </FormControl>
                    </Stack>
                </VStack>
                <Flex>
                    <Divider border="1px solid #EBEDF0" w={"100%"} mt="40px" />
                </Flex>
                <VStack mt="24px" display="flex" dire justifyContent="center">
                    <Button style={SolidBtnStyle} onClick={onClick} type="submit">Add Beneficiary</Button>
                    <Box pt="24px">

                        <Button variant="ghost" style={ButtonStyle} onClick={closeModal}>Cancel</Button>
                    </Box>
                </VStack>
            </form>
        </Box >
    )
}


const ModalInputStyle = {
    width: "390px",
    height: "40px",
    borderRadius: "8px",
    lineHeight: "22px",
    border: "1px solid #C5D8EA",
    mb: '8px',
}