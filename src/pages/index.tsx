import { Flex, Heading } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Divisor } from '../components/Divisor'
import { Header } from '../components/Header'
import { IconGrid } from '../components/IconContext/IconGrid';
import { Slider } from '../components/Slider'


export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <IconGrid />
      <Divisor />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
        color="gray.700"
      >
        Vamos nessa? <br />
        Então Escolhe seu Continente
      </Heading>

      <Slider />
    </Flex>
  )
}
