import React from 'react'
import Label from '../../common/Label'
import { Box, Flex, Text } from '@chakra-ui/react'
import Slider from "react-slick";
import {BsPhone} from "react-icons/bs"
import {IconButton} from "@chakra-ui/react"


export default function Category() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
      <Label text={'Categories'} />
      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={2}
      >
        <Text fontSize={26} lineHeight={2} fontWeight={800}>Browse By Category</Text>

      </Box>

      <Box className='space-x-3'>
      <Slider {...settings}>
          <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} className='w-[200px] h-[200px] border border-black '>
                    <BsPhone />
          </Flex>

          
        </Slider>
      </Box>


    </div>
  )
}
