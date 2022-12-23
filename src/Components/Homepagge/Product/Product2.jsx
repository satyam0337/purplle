import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle"


const Product2Data = [
    {
        img:"https://media6.ppl-media.com/tr:w-512,ar-40-47,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671005783_lip-balm-copy.jpg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:w-512,ar-40-47,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671005780_lip-balm-copy-3.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-512,ar-40-47,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671005780_lip-balm-copy-4.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-512,ar-40-47,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671005781_lip-balm-copy-5.jpg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:w-512,ar-40-47,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671005782_lip-balm-copy-7.jpg",
        
    }

 
]

const Product2 = () => {

    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTablet = useMediaQuery({ maxWidth: 600 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

  return (
    

    <Box width={"100%"} justifyContent={"center"}p={5} >
        <Flex  p={5}>
         <Swiper 
                    slidesPerView={isBigScreen ? 4 :  isTablet ? 1 : isPortrait ? 2 :4}
                    spaceBetween={0}

                    loop={true}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {Product2Data.map((el,i) => (
                <SwiperSlide style={{ gap: "25px", color:"black" }}>
                <Box key={i} width="400px" height="400px">
                    <img style={{borderRadius:"5px",width:"300px", height:"350px",cursor:"pointer",paddingRight:"30px"}} src={el.img}
                    alt=''/>
                   
                </Box>
                </SwiperSlide>
            ))}

            </Swiper>
        </Flex>
    </Box>
  )
}

export default Product2