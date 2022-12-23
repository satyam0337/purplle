import { Box, color, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

const ProductImage2Data = [
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671650683_sq-2.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617133_swiss-beauty-1440x700.jpeg",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671687653_carmesi-new.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617119_maybelline-day-1-16th-1440x700.jpeg",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617113_kaja_celeb-2.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671650678_pu-1.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617130_streax-streax-professional-1440x700.jpeg",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671650662_dd-3-new.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617101_biotique-1440x700.jpeg",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617116_loreal_celeb-2.png",
  }
];

const ProductImage2 = () => {

  return (
    <Box width={"100%"} justifyContent={"center"} p={5}>
      <Box id='pImages'>
        {ProductImage2Data.map((el) => {
          return (
            <Box key={el.img}>
              <Image alt="image" src={el.img} />
            </Box>
          );
        })}
      </Box>
      <img style={{
        marginTop:"70px"
        }}
      src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671100026_reminder-1280x100.gif"
      />
    </Box>

  );
};

export default ProductImage2;
