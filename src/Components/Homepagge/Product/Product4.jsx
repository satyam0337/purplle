import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle"


const Product4Data = [
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-4-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671101298_gv-16-600x750-1.jpeg",
    
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-4-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671101296_mamaearth-16-600x750-1.jpeg",
        heading:"Vitamins"
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-4-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671101295_nybae-16-600x750-1.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-4-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671101294_plum-16-600x750-1.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-4-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671101299_faces-canada-1-16-600x750-1.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-4-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671101301_biotique-16-600x750-1.jpeg",
    
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-4-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671101302_ag-16-600x750-1.jpeg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-4-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671101297_lakme-16-600x750-1.jpeg",
      
    }

 
]

const Product4 = () => {

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
            {Product4Data.map((el,i) => (
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

export default Product4