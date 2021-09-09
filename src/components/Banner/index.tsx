import { Flex, Text, Heading, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/images/banner.jpg')"
      bgPosition={['100% 20%', "100% 28%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
            mb={["15px", "30px"]}
          >
            5 Continentes,<br />
            Infinitas Possibilidades
          </Heading>
          <Text
            color="gray.300"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que voce<br /> sempre Sonhou
          </Text>
        </div>

        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={['none', 'none', 'block']}
          src="/images/airplane.svg"
          alt="avião"
          transform="translateY(50px)"
          ml="8"
        />

      </Flex>
    </Flex>
  )
}