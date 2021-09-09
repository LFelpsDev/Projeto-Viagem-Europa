import { Grid, GridItem } from '@chakra-ui/react'
import { IconContent } from './IconContent'

export function IconGrid() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5,1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <IconContent imageIcon="life_night" name="Vida noturna" />
      </GridItem>

      <GridItem>
        <IconContent imageIcon="praia" name="Praia" />
      </GridItem>

      <GridItem>
        <IconContent imageIcon="modern" name="Moderno" />
      </GridItem>

      <GridItem>
        <IconContent imageIcon="house" name="Clássico" />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <IconContent imageIcon="world" name="E mais..." />
      </GridItem>

    </Grid>
  )
}