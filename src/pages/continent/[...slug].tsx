import { Flex } from '@chakra-ui/react'
import { BannerEurope } from '../../components/BannerEurope'
import { Header } from '../../components/Header';
import { ContentEurope } from '../../components/ContentEurope';
import { Cities } from '../../components/Cities'

export default function Europe() {
  return (
    <Flex direction="column">
      <Header />
      <BannerEurope />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <ContentEurope />
        <Cities />
      </Flex>
    </Flex>
  )
}