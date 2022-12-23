import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle"


const Product1Data = [
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671092571_149-stamp.gif",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671092510_249.gif",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671092641_125-time-lock.png",
        
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671092640_99-time-lock.png",
      
    },
    {
        img:"https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671092639_75-time-lock.png",
     
    }

 
]

const Product1 = () => {

    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTablet = useMediaQuery({ maxWidth: 600 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })

  return (
    

    <Box width={"100%"} justifyContent={"center"}p={5} >
        <Flex  p={5}>
         <Swiper 
                    slidesPerView={isBigScreen ? 4 :  isTablet ? 1 : isPortrait ? 2 :4}
                    spaceBetween={0}

                    loop={false}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {Product1Data.map((el,i) => (
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

export default Product1