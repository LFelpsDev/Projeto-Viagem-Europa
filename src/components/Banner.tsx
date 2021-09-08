import { Flex, Text, Heading } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      height="72"
      bgColor="#00152a"
    >
      <Flex
        w="1080px"
        mx="auto"
        justifyContent="space-between"
        p="10"
      >
        <Flex
          direction="column"
          my="6"
        >
          <Heading
            fontWeight="500"
            lineHeight="10"
            color="white"
            mb="6"
            letterSpacing="0.05em"
          >
            5 Continentes,<br/>Infinitas Possibilidades
          </Heading>
          <Text
            color="#DADADA"
          >
            Chegou a hora de tirar do papel a viagem que voce<br /> sempre Sonhou
          </Text>
        </Flex>

        <Flex
        >
          <img src='/images/airplane.svg' alt="Aviao" />
        </Flex>
      </Flex>
    </Flex>
  )
}