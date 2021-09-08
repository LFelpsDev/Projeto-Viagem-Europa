import { Flex } from '@chakra-ui/react'

export function Logo() {
  return (
    <Flex
      alignItems = 'center'
      justify="center"
      h={14}
      my="2"
    >
      <img src="/images/logo.svg" alt="Logo" />
    </Flex>
  )
}