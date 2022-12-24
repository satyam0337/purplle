import { Box, color, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

const FrontOfferData = [
  {
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671628197_haeder-web-22nd.gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671109578_web-banner.gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1671628986_maybelline_webhp-2.jpg",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671610874_1298-x-498-web.gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671472402_k-beauty_web_hp.gif",
  },
];

const FrontOffer = () => {
  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box p={5}>
      <Flex justifyContent={"space-between"} p={5}>
        <Swiper
          slidesPerView={isBigScreen ? 3 : isTablet ? 1 : isMobile ? 1 : 1}
          spaceBetween={20}
          loop={false}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          autoplay={true}
          speed='500'
          className="mySwiper"
        >
          {FrontOfferData.map((el, i) => (
            <SwiperSlide style={{ gap: "50px", color: "black" }}>
              <img
                style={{
                  borderRadius: "15px",
                  width: "auto",
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
      <img
        style={{
          justifyContent: "center",
          marginTop: "70px",
        }}
        src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671000055_unmissable-deals-web.gif"
      />
    </Box>
  );
};

export default FrontOffer;
