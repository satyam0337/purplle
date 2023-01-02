import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle"


const Product3Data = [
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671117434_swiss-beauty-16-dec-1200x1800.jpeg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671117421_kaja-16-dec-1200x1800.jpeg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671257179_the-derma-co-16-dec-1200x1800-1.jpeg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671117424_pilgrim-16-dec-1200x1800.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671257178_the-face-shop-16-dec-1200x1800-1.jpeg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671117429_joy-16-dec-1200x1800.jpeg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671257178_neutrogena-16-dec-1200x1800-1.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671117433_mac-16-dec-1200x1800.jpeg",
        
    }

 
]

const Product3 = () => {

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
            {Product3Data.map((el,i) => (
                <SwiperSlide style={{ gap: "10px", color:"black" }}>
                <Box key={i} width="350px" height="auto">
                    <img style={{borderRadius:"5px",width:"280px", height:"350px",cursor:"pointer",paddingRight:"10px"}} src={el.img}
                    alt=''/>
                   
                </Box>
                </SwiperSlide>
            ))}

            </Swiper>
        </Flex>
    </Box>
  )
}

export default Product3