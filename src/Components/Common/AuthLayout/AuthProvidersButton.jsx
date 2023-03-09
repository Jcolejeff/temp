import { Box, Button } from "@chakra-ui/react";

export default function AuthProviderBtn(props) {
    const { leftIcon, buttonText } = props;
    return (
        <Box>
            <Button bg="#FFFFFF" border='solid 1px #C5D8EA' fontFamily={'Aeonik'} fontWeight={400} fontSize={14} borderRadius={8}
                width='288px' height={38} color='#1B1C1E' leftIcon={leftIcon}>
                {buttonText}
            </Button>
        </Box>
    )
}