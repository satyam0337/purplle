import { Box, color, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

const ProductImage1Data = [
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671702909_ag-3.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671689086_mamaearth-new.jpeg",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671650674_nybae-4-new.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617116_lakme-1440x700.jpeg",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671650670_gv-1.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671650665_faces-canada-2.gif?tr=f-gif",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617109_garnier-1440x700.jpeg",
  },
  {
    img: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1671617129_schwarzkopf-professional-revised-1440x700.jpeg",
  }
];

const ProductImage1 = () => {

  return (
    <Box width={"100%"} justifyContent={"center"} p={5}>
      <Box id='pImages'>
        {ProductImage1Data.map((el) => {
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

export default ProductImage1;
