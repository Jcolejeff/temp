import { Icon } from "@iconify/react";
import { Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

function FormTitle(props) {
  const { info, title, className } = props;
  return (
    <div className={`flex gap-2 items-center w-fit relative mb-2 ${className}`}>
      <p className="text-sm">{title}</p>
      {info && (
        <div className="group">
          <Icon icon="akar-icons:info" className="text-base" />
          <p
            className="absolute hidden group-hover:block bg-black bg-opacity-60 rounded-sm px-[2px] text-[12px] md:text-[12px] text-white mt-[4px] z-40"
            style={{
              width: info.replace(" ", "").trim().length * 9.5,
              maxWidth: 300,
            }}
          >
            {info}
          </p>
        </div>
      )}
    </div>
  );
}

export default FormTitle;


export function FormTitle2(props) {
  const [mobileDevice] = useMediaQuery('(max-width: 800px)')
  const { title, titleLine2, info, infoLine2 } = props;
  return (
    <Stack>
      <Flex w={mobileDevice ? '342px' : '390px'}>
        <Text color={'#1B1C1E'} fontFamily={'Aeonik'} fontSize={24}
          fontWeight={'600'} lineHeight={'32px'} w="100%">
          {title} <br />
          {titleLine2}
        </Text>
      </Flex>
      <Flex>
        <Text fontStyle={'normal'} color={'#778899'} fontFamily={'Aeonik'} fontSize={14}
          fontWeight={'400'} lineHeight={'24px'} w={mobileDevice ? '300px' : '380px'}>
          {info} <br />
          {infoLine2}
        </Text >
      </Flex>
    </Stack >
  )
}
