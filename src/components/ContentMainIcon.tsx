import { Flex, Text, Box } from "@chakra-ui/react"

interface ContentProps {
  src: string;
  name: string;
}

export function ContentMainIcon({ name,src }: ContentProps) {
  return (

      <Flex direction="column" my="5" flexWrap="wrap">
        <img src={src} alt="logo" />
        <Text textAlign="center">{name}</Text>
      </Flex>
  )
}