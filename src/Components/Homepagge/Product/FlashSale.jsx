import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle"


const FlashSaleData = [
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671108099_dr-batra-600x865.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671109327_bronson-professional-600x865.jpeg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671109329_favon-600x865.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671109325_bare-anatomy-600x865.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671108096_acwell-600x865.jpeg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671109331_naturali-600x865.jpeg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671108098_bella-vita-organic-600x865.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671109330_khadi-essentials-600x865.jpeg",
        
    }

 
]

const FlashSale = () => {

    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTablet = useMediaQuery({ maxWidth: 600 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

  return (
    

    <Box width={"100%"} justifyContent={"center"}p={5} >
     <Heading
        p={5}
        textAlign={"start"}
        size="lg"
        color={"#30363C"}
        fontFamily={"sans-serif"}
      >
        FLASH SALE
      </Heading>
        <Flex  p={5}>
         <Swiper 
                    slidesPerView={isBigScreen ? 4 :  isTablet ? 1 : isPortrait ? 2 :4}
                    spaceBetween={0}

                    loop={true}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {FlashSaleData.map((el,i) => (
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

export default FlashSale