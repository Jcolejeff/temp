import { Box, Input, useMediaQuery } from "@chakra-ui/react";


export default function AlternateInput(props) {
    const [onMobile] = useMediaQuery('(max-width: 992px)')
    const { type, name, value, onChange, placeholder } = props;
    return (
        <Box>
            <Input width={onMobile ? 330 : 390} placeholder={placeholder} h={38} border='1px solid #C5D8EA' 
            borderRadius={8} type={type} name={name} value={value} onChange={onChange} />
        </Box>
    )
}