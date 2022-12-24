
import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle"


const Offers1Data = [
  {
    img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671604828_web_strip.jpg",
},
{
    img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671693282_hul_web_strip.jpg"
},
{
    img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671432189_web_strip-1.jpg"
},
{
    img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671116593_exclusive-only-at-purplle-web.gif?tr=f-gif"
},
{
    img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671103302_web-milestone.png"
},
{
    img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671194695_offer-2-web.jpg"
},
{
    img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671172977_generic-banner-thick-strip-web.gif?tr=f-gif"
}
]

const Offers1 = () => {

  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    

    <Box p={5} >
      
        <Flex justifyContent={"space-between"} p={5}>
         <Swiper 
                    slidesPerView={isBigScreen ? 3 : isTablet ? 1 : isMobile ? 1 : 1}
                    spaceBetween={20}

                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={1000}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {Offers1Data.map((el, i) => (
              <SwiperSlide style={{ gap: "50px", color:"black" }}>
           <img
             style={{
               borderRadius: "15px",
               width: "100%",
               height: "auto",
               cursor: "pointer",
             }}
             key={i}
             src={el.img}
             alt=""
          />
          </SwiperSlide>
            ))}

            </Swiper>
        </Flex>
       </Box>
    
  )
}

export default Offers1
