import { Flex, Heading, Text, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader,PopoverBody, Icon } from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'


export function Information() {
  return (
    <Flex
      align="center"
      justifyContent="space-between"
    >
      <Flex
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">50</Heading>
        <Text fontWeight="bold" fontSize={["md", "xl"]} color="gray.700">Países</Text>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">60</Heading>
        <Text fontWeight="bold" fontSize={["md", "xl"]} color="gray.700">Linguas</Text>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">27</Heading>
        <Text fontWeight="bold" fontSize={["md", "xl"]} color="gray.700">
          Cidades +100
          <Popover placement="top-start">
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="bold">Europe</PopoverHeader>
              <PopoverBody fontWidth="400" fontSize="lg">Paris, Chile, China, Europa, Canada</PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  )
}