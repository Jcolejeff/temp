import { Flex,} from "@chakra-ui/react";
import { NairaBeneficiaries } from "./BankBeneficiary/NairaBeneficiaries";
import PsycheTagBeneficiaries from "./PsycheTag/PsycheTagBeneficiaries";

export default function AllBeneficiaries() {
    return (
        <Flex gap="16px" align="start" p="40px 32px" justify="space-between" wrap="wrap">
            <NairaBeneficiaries numberOfBeneficiaries={3} />
            <PsycheTagBeneficiaries numberOfBeneficiaries={3}/>
        </Flex>
    )
}