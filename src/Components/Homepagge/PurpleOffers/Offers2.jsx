
import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle"


const Offers2Data = [
  {
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671038423_appfirst-web.gif",
},
{
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671038552_free-gift_webstrip.gif"
},
{
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671038692_welcome_webstrip.gif"
},
{
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671038812_free-shipping-strip-web.jpg"
},
{
    img:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671038904_extra25_thick-strip_web.png"
}
]

const Offers2 = () => {

  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    

    <Box p={5} >
      
        <Flex justifyContent={"space-between"} p={5}>
         <Swiper 
                    slidesPerView={isBigScreen ? 3 : isTablet ? 1 : isMobile ? 1 : 1}
                    spaceBetween={20}

                    loop={false}
                    loopFillGroupWithBlank={true}
                    autoplay={1000}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {Offers2Data.map((el, i) => (
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
             alt="offers"
          />
          </SwiperSlide>
            ))}

            </Swiper>
        </Flex>
       </Box>
    
  )
}

export default Offers2
