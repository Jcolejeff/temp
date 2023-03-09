import { Button, Input, HStack, Flex, } from "@chakra-ui/react";
import { SendMoneyModal, AddMoneyModal, SwapMoneyModal } from "../../../Modals";
import { ReactComponent as Calender } from "../../../../assets/images/calendar.svg";



export default function DateInput() {
    return (
        <Flex fontFamily={'Aeonik'} bg="#F7F9FB" border="1px solid #C5D8EA" borderRadius={'8px'} h={"50px"}>
            <Button _hover={{ background: 'none' }} bg="#F7F9FB" m="auto" leftIcon={<Calender />} w={"268px"}>
                <Input border="" outline={0} type="date"
                    min="2023-01-01" max="2023-12-31" /> -
                <Input type="date" name="trip-start"
                    min="2023-01-01" max="2023-12-31" />
            </Button>
        </Flex>
    )
}



export function TransactionModals() {
    return (
        <HStack textTransform={'capitalize'} fontFamily={'Aeonik'} fontWeight="400" fontSize={'0.9rem'} >
            <SendMoneyModal />
            <AddMoneyModal />
            <SwapMoneyModal />
        </HStack>
    )
}

export const SolidBtnStyle = {
    borderRadius: "8px",
    height: "46px",
    width: "288px",
    backgroundColor: "#0F5CA8",
    color: "white",
    align: 'center'
}


export const PaymentLinkData = [
    {
        id: 1,
        Institution: "Psyche Finance",
        Currency: "NGN",
        Amount: "500,000",
        DateAndTime: "1 Feb, 2020- 07:24:33",
        Status: "Active",
        Link: "https:psyche-finance/tyts/ioosn1"
    },
    {
        id: 2,
        Institution: "Psyche Finance",
        Currency: "NGN",
        Amount: "500,000",
        DateAndTime: "1 Feb, 2020- 07:24:33",
        Status: "Inactive",
        Link: "https:psyche-finance/tyts/ioosn2"
    },
    {
        id: 3,
        Institution: "Psyche Finance",
        Currency: "NGN",
        Amount: "500,000",
        DateAndTime: "1 Feb, 2020- 07:24:33",
        Status: "Active",
        Link: "https:psyche-finance/tyts/ioosn3"
    },
    {
        id: 4,
        Institution: "Psyche Finance",
        Currency: "NGN",
        Amount: "500,000",
        DateAndTime: "1 Feb, 2020- 07:24:33",
        Status: "Inactive",
        Link: "https:psyche-finance/tyts/ioosn4"
    },
    {
        id: 5,
        Institution: "Psyche Finance",
        Currency: "NGN",
        Amount: "500,000",
        DateAndTime: "1 Feb, 2020- 07:24:33",
        Status: "Active",
        Link: "https:psyche-finance/tyts/ioosn"
    },
    {
        id: 6,
        Institution: "Psyche Finance",
        Currency: "NGN",
        Amount: "500,000",
        DateAndTime: "1 Feb, 2020- 07:24:33",
        Status: "Inactive",
        Link: "https:psyche-finance/tyts/ioosn"
    }
]

export const PsycheTagTopBeneficiaries = [
    {
        id: 1,
        Name: "Boluwatife",
        PsycheTag: "@helena",
        imgUrl: "../../../../assets/images/MaleAvater-tongue-out(1).svg"
    },
    {
        id: 2,
        Name: "Oluwafemi",
        PsycheTag: "@rubae",
        imgUrl: "../../../../assets/images/Avatar2.svg"
    },
    {
        id: 3,
        Name: "Goodness",
        PsycheTag: "@tickone",
        imgUrl: "../../../../assets/images/Avatar3.svg"

    },
    {
        id: 4,
        Name: "Chiamaka",
        PsycheTag: "@namaka",
        imgUrl: "../../../../assets/images/Avatar4.svg"
    },
    {
        id: 5,
        Name: "Tobilola",
        PsycheTag: "@barik",
        imgUrl: "../../../../assets/images/Avatar5.svg"
    },
]



export const TopBeneficiaries = [
    {
        id: 1,
        Name: "boluwatife Oluwafemi",
        AccountNumber: "0189797847",
        Bank: 'Wema Bank'
    },
    {
        id: 2,
        Name: "Akande Olamilekan",
        AccountNumber: "0123797847",
        Bank: "Sterling Bank"
    },
    {
        id: 3,
        Name: "Obaromi Tobilola",
        AccountNumber: "0129797847",
        Bank: "First Bank"
    },
    {
        id: 4,
        Name: "Esther Howard",
        AccountNumber: "0129797847",
        Bank: "Wema Bank"
    },
    {
        id: 5,
        Name: "Devon Lane",
        AccountNumber: "0129797847",
        Bank: "Wema Bank"
    },
    {
        id: 6,
        Name: "boluwatife Oluwafemi",
        AccountNumber: "0189797847",
        Bank: 'Wema Bank'
    },
]


export const data = [
    {
        name: 'Jan 1',
        inflow: 4000,
        outflow: 2400,
        amt: 2400,
    },
    {
        name: 'Jan 2',
        inflow: 3000,
        outflow: 1398,
        amt: 2110,
    },
    {
        name: 'Jan 3',
        inflow: 2000,
        outflow: 9800,
        amt: 1800,
    },
    {
        name: 'Jan 4',
        inflow: 2780,
        outflow: 3908,
        amt: 2500,
    },
    {
        name: 'Jan 5',
        inflow: 1890,
        outflow: 4800,
        amt: 3000,
    },
    {
        name: 'Jan 6',
        inflow: 2390,
        outflow: 3800,
        amt: 2500,
    },
    {
        name: 'Jan 7',
        inflow: 3000,
        outflow: 4300,
        amt: 2100,
    },
];

export const FormLabelStyle = {
    fontWeight: 400,
    lineHeight: "22px",
    paddingBottom: "8px",
    fontStyle: "Aeonik",
    fontSize: "14px"
}

export const TextStyle = {
    fontWeight: 400,
    fontStyle: "Aeonik",
    fontSize: "1.2rem"
}

export const ButtonStyle = {
    borderRadius: "8px",
    height: "46px",
    width: "288px",
    border: "1px solid #0F5CA8"
}

export const InputStyle = {
    border: "1px solid #C5D8EA",
    borderRadius: "8px",
    height: "46px",
    width: "390px"
}

