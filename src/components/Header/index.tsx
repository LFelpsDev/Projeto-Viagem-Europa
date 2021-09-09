import { Flex, Grid, Image, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri'


export function Header() {
  const router = useRouter()

  const isPageEurope = router.asPath !== '/'

  return (
    <Flex
      as="header"
      w="100%"
      mx="auto"
      px="1rem"
      h={["50px", "80px"]}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {isPageEurope && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftLine} fontSize="2rem" />
            </a>
          </Link>
        )}
        
        <Image w={["81px", "184px"]} src="/images/logo.svg" alt="Logo" justifySelf="center" gridColumn="2" />
      </Grid>
    </Flex>
  )
}