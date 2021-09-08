import { Flex, Divider, Heading } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { ContentMainIcon } from '../components/ContentMainIcon'
import { Logo } from '../components/Logo'


export default function Home() {
  return (
    <>
      <Logo />
      <Banner />

      <Flex
        w="1080px"
        mx="auto"
        p="6"
        justifyContent="space-between"
        alignItems="center"
      >
        <ContentMainIcon name="vida noturna" src="/images/life_night.svg" />
        <ContentMainIcon name="praia" src="/images/praia.svg" />
        <ContentMainIcon name="moderno" src="/images/modern.svg" />
        <ContentMainIcon name="clássico" src="/images/house.svg" />
        <ContentMainIcon name="e mais..." src="/images/world.svg" />
      </Flex>

      <Divider orientation="horizontal" />

      <Heading textAlign="center" my="6" fontWeight="500" fontSize="2xl">
        Vamos nessa? <br />
        Então Escolha Seu Continente
      </Heading>

    </>
  )
}
