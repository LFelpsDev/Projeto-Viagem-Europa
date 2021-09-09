import { Flex, Text, Image } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/media-query'

interface ContentProps {
  imageIcon: string;
  name: string;
}

export function IconContent({ name, imageIcon }: ContentProps) {
  const forMobile = useBreakpointValue({
    base: false,
    sm: true
  })
  return (

    <Flex direction={["row", "column"]}
      align="center"
      justifyContent="center"
 
    >
      {forMobile 
      ? <Image
        src={`/icons/${imageIcon}.svg`}
        alt={name}
        h="85px"
        w="85px"
        mb="6"
      />
      : <Text
        color="yellow.400"
        fontSize="4xl"
        mr="2"
      >
        •
      </Text>}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>{name}</Text>
    </Flex>
  )
}