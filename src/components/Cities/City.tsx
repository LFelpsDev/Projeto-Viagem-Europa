import { Box, Flex, Heading, Image, Text, Avatar} from '@chakra-ui/react'

interface CityProps {
  name: string;
  continent: string;
  imageCity: string;
  imageFlag: string;
}

export function City({name, continent, imageCity, imageFlag}: CityProps){
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`/images/cities/${imageCity}.jpg`} h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">{name}</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{continent}</Text>
        </Flex>
      <Avatar name={name} src={`/images/flags/${imageFlag}`} />
      </Flex>
    </Box>
  )
}