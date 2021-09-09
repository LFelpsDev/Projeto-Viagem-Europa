import { Grid, GridItem, Text } from '@chakra-ui/react'
import { Information } from './Information'

export function ContentEurope() {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2f 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
      alignItems="center"
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurasia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <GridItem>
        <Information />
      </GridItem>
      
    </Grid>
  )
}