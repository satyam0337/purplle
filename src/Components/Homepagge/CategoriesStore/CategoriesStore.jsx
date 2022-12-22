import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle"


const CategoriesStoreData = [
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001371_skincare.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001372_makeup.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001374_haircare-1.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001374_bodycare.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001375_appliances.jpg",
       
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001373_jewellery_.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001370_splurge.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001375_accessories.jpg",
      
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001371_mom-baby-store_-1.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001372_korean-beauty.jpg",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671001371_mom-baby-store_.jpg",
        
    }

 
]

const CategoriesStore = () => {

 
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
     CATEGORY STORES
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
            {CategoriesStoreData.map((el,i) => (
                <SwiperSlide style={{ gap: "25px", color:"black" }}>
                <Box key={i} width="400px" height="400px">
                    <img style={{borderRadius:"5px",width:"auto", height:"350px",cursor:"pointer",paddingRight:"30px"}} src={el.img}
                    alt=''/>
                   
                </Box>
                </SwiperSlide>
            ))}

            </Swiper>
        </Flex>
    </Box>
  )
}

export default CategoriesStore