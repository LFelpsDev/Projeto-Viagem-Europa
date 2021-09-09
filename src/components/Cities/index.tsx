import { Heading, Grid} from '@chakra-ui/react';
import {City } from './City'
export function Cities(){
  return (
    <>
      <Heading
        fontWeight="600"
        fontSize={["2xl", "4xl"]}
        mb="10"
      >
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3,1fr)", "repeat(4,1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City
          name="Londres"
          continent="Reino Unido"
          imageCity="londres"
          imageFlag="londres.png"
        />

        <City
          name="Paris"
          continent="França"
          imageCity="paris"
          imageFlag="paris.jpg"
        />

        <City
          name="Romania"
          continent="Italia"
          imageCity="roma"
          imageFlag="roma.jpg"
        />

        <City
          name="Praga"
          continent="Republica Theca"
          imageCity="praga"
          imageFlag="praga.png"

        />

        <City
          name="Amsterdã"
          continent="Holanda"
          imageCity="amsterdam"
          imageFlag="amsterdam.png"
        />
      </Grid>
    </>
  )
}