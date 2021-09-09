import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination])

export function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/bg-slider.png')"
            bgRepeat="no-repeat"
            textAlign="center"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                  _hover={{
                    color: 'gray.500'
                  }}
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O Continente mais Antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/bg-slider.png')"
            bgRepeat="no-repeat"
            textAlign="center"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                  _hover={{
                    color: 'gray.500'
                  }}
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O Continente mais Antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/bg-slider.png')"
            bgRepeat="no-repeat"
            textAlign="center"
            bgSize="cover"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                  _hover={{
                    color: 'gray.500'
                  }}

                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O Continente mais Antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}