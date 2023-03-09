import React, { useState } from 'react'
import {
   Modal, Button, useDisclosure, ModalOverlay, ModalCloseButton, Text, Icon, ModalContent,
   ModalHeader, ModalFooter, ModalBody, Flex, Stack, Select
} from '@chakra-ui/react'
import { FaUserAlt } from "react-icons/fa"
import { BsCaretDownFill } from "react-icons/bs"
import { ButtonStyle, InputStyle, } from '../Reuseables';
import BankBeneficiaryForm from '../Beneficiary/BankBeneficiary/BankBeneficiaryForm';
import { PsycheBeneficiaryForm } from '../Beneficiary/PsycheTag/PsycheBenefiaryForm';
import BankBeneficiarySuccessModal from './NairaSuccessModal';


export function TestBeneficiaryModal() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [paymentType, setPaymentType] = useState("Bank");
   const [index, setIndex] = useState(0);
   const [step, setStep] = useState("default");
   const numberOfSteps = {
      secondStep: "secondStep",
   };

   const ChangePaymentType = (e) => {
      setPaymentType(e.target.value)
   }

   const CloseModal = () => {
      onClose();
      setStep(numberOfSteps.default);
   };
   const component = () => {
      switch (step) {
         case numberOfSteps.secondStep:
            return <BankBeneficiarySuccessModal onClose={CloseModal} setStep={setStep}></BankBeneficiarySuccessModal>;

         default:
            return (
               <Stack py="40px" px="15px" h={(paymentType === "Bank") ? "672px" : "494px"} w="454px" align="start">
                  <Stack align="center" justify="center">

                     <Stack w="100%" align="start" justify="start">
                        <Flex ml={0} align="center" gap={3}>
                           <Stack borderRadius="50%" p={5} bg={"#E7EFF6"}>
                              <Icon color="#0F5CA8" as={FaUserAlt} />
                           </Stack>
                           <Text fontWeight={700} fontStyle="Aeonik" fontSize="1.2rem">Add Beneficiary</Text>
                        </Flex>
                     </Stack>
                     <section >
                        <Text style={FormLabelStyle} pt={5}>Select Payment Mode</Text>
                        <Select style={InputStyle} icon={<BsCaretDownFill fontSize="18px" />} h="40px" w="390px" onChange={ChangePaymentType}>
                           <option name="Bank" value="Bank">
                              Bank Account
                           </option>
                           <option name="PsycheTag" value="PsycheTag" bg="#12B76A">
                              Psyche Tag
                           </option>
                        </Select>
                        {(paymentType === "Bank") &&
                           <BankBeneficiaryForm
                              index={index}
                              setIndex={setIndex}
                              setStep={setStep}
                              onClose={onClose}
                              closeModal={onClose}
                           ></BankBeneficiaryForm>

                        }
                        {(paymentType === "PsycheTag") &&
                           <PsycheBeneficiaryForm
                              index={index}
                              setIndex={setIndex}
                              setStep={setStep}
                              onClose={onClose}
                           ></PsycheBeneficiaryForm>

                        }
                     </section>
                  </Stack>
               </Stack>
            );
      }
   };
   return (
      <>
         <Button h="38px" lineHeight="22px" fontSize="14px" border="1px solid #0F5CA8" onClick={onOpen} w="163px" color="#0F5CA8" bg="white">
            Add Beneficiary
         </Button>

         <Modal size="454px" isOpen={isOpen} onClose={CloseModal} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent w="454px" borderRadius="8px">
               <ModalCloseButton />

               <ModalBody>{component()}</ModalBody>
            </ModalContent>
         </Modal>
      </>
   );
}

const FormLabelStyle = {
   fontWeight: 400,
   lineHeight: "22px",
   paddingBottom: "8px",
   fontStyle: "Aeonik",
   fontSize: "14px"
}



export function NewBeneficiaryModal() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [paymentType, setPaymentType] = useState("Bank");



   const initialRef = React.useRef(null)
   const finalRef = React.useRef(null)


   const ChangePaymentType = (e) => {
      setPaymentType(e.target.value)
   }



   return (
      <>
         <Button h="38px" w={"160px"} p="16px" onClick={onOpen}>Add New Beneficiary</Button>
         <Modal size="454px"
            isCentered
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
         >
            <ModalOverlay />
            <ModalContent w="454px" alignItems="center">
               <ModalHeader alignItems="start" w="100%">
                  <Stack mt={-7} pl={"100%"}>
                     <Button borderRadius="50%" onClick={onClose}>X</Button>
                  </Stack>
                  <Flex ml={5} align="center" gap={3}>
                     <Stack borderRadius="50%" p={5} bg={"#E7EFF6"}>
                        <Icon color="#0F5CA8" as={FaUserAlt} />
                     </Stack>
                     <Text fontWeight={700} fontStyle="Aeonik" fontSize="1.2rem">Add Beneficiary</Text>
                  </Flex>
               </ModalHeader>
               <ModalBody alignItems="center" pb={6} fontWeight={400} fontStyle="Aeonik" fontSize="1.2rem">
                  <Text pt={5}>Select Payment Method</Text>
                  <Select h="40px" w="390px" onChange={ChangePaymentType} >
                     <option name="Bank" value="Bank">
                        Bank Account
                     </option>
                     <option name="PsycheTag" value="PsycheTag" bg="#12B76A">
                        Psyche Tag
                     </option>
                  </Select>
                  {
                     paymentType === "Bank" ? (
                        <BankBeneficiaryForm />
                     ) : (
                        <PsycheBeneficiaryForm />
                     )
                  }
                  <Stack mt={5} align="center" justify="center">

                     <Button style={ButtonStyle} border="1px solid #0F5CA8" onClick={onClose}>Cancel</Button>
                  </Stack>
               </ModalBody>
               <ModalFooter>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}







