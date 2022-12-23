import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

const BestSellerData = [
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/294843/swiss-beauty-ultimate-eyeshadow-palette-kit-multi-02-9-g_2_display_1630141384_ae712a15.jpg",
    heading: "Sirona Feminine Cramp Relief Patch Packet Of...",
    oldprice: "₹249.00",
    newprice: "₹224.1",
    off: "10% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/226382/swiss-beauty-liqiud-concealer-light-moyen-5-6-g-12_2_display_1630141622_a56eace6.jpg",
    heading: "Himalaya Liv.52 Tablets - 100's",
    oldprice: "₹130.00",
    newprice: "₹104",
    off: "20% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/283977/garnier-bright-complete-vitamin-c-yoghurt-night-cream-40g-16_1_display_1668605050_24afb8fb.jpg",
    heading: "Liveasy Wellness Apple Cider Vinegar With...",
    oldprice: "₹649.00",
    newprice: "₹227.15",
    off: "65% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/272009/pro-concealer-palette_concealer-92_6_display_1630211892_4ac419de.jpg",
    heading: "Revital H Women Multivitamin With...",
    oldprice: "₹345.00",
    newprice: "₹293.25",
    off: "15% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/323573/alps-goodness-rosemary-essential-oil-13_12_display_1667384444_34579227.jpg",
    heading: "Volini Pain Relief Gel Tube Of 75 G",
    oldprice: "₹245.00",
    newprice: "₹208.25",
    off: "15% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/269617/insight-banana-loose-powder-40g_1_display_1613728731_06a407a8.jpg",
    heading: "Evion 400mg Strip Of 10 Capsules",
    oldprice: "₹35.90",
    newprice: "₹32.31",
    off: "10% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/291491/aqualogica-glow-dewy-sunscreen_1_display_1651051165_4aa80766.jpg",
    heading: "Livogen Z Captab 15's",
    oldprice: "₹79.40",
    newprice: "₹71.46",
    off: "10% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/338616/cetaphil-gentle-skin-cleanser-125-ml_1_display_1532515933_3d514ec6.jpg",
    heading: "Pharmeasy Diabetic & Orthopedic Men...",
    oldprice: "₹1399.00",
    newprice: "₹1049.25",
    off: "25% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/337925/maybelline-new-york-fit-me-12hr-oil-control-compact-shade-220-8-g_1_display_1612766020_ad6f0df3.jpg",
    heading: "Saffola Fittify Original Peanut Butter With...",
    oldprice: "₹220.00",
    newprice: "₹138.6",
    off: "37% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/317802/maybelline-new-york-fit-me-matte-poreless-liquid-foundation-tube-128-warm-nude-18-ml-51_8_display_1661771226_60c4ad59.jpg",
    heading: "Polybion Czs Tablet 15's",
    oldprice: "₹92.20",
    newprice: "₹82.98",
    off: "10% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/272886/ny-bae-liquid-eyeliner-matte-ny-skeyeliner-black_8_display_1636977880_023e5161.jpg",
    heading: "Sevenseas Original Capsule 100`s",
    oldprice: "₹319.10",
    newprice: "₹287.19",
    off: "10% OFF",
  },
  {
    img: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/275248/alps-goodness-dragon-fruit-brightening-facial-kit-34-g-19_14_display_1667380924_851b0e44.jpg",
    heading: "Neurobion Forte Tablet 30's",
    oldprice: "₹34.70",
    newprice: "₹31.23",
    off: "10% OFF",
  },
];

const BestSeller = () => {
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isTablet = useMediaQuery({ maxWidth: 600 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })

  return (
    
    <Box p={5}>
      <Heading
        p={5}
        textAlign={"start"}
        size="lg"
        color={"#30363C"}
        fontFamily={"sans-serif"}
      >
        BEST SELLER
      </Heading>

      <Flex justifyContent={"space-between"} p={5}>
        <Swiper
          slidesPerView={isBigScreen ? 4 :  isTablet ? 1 : isPortrait ? 2 :4}
          spaceBetween={0}
          loop={false}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {BestSellerData.map((el, i) => (
            <SwiperSlide style={{ gap: "10px", color: "black" }}>
              <Box key={i} >
                <Box
                  padding="20px 20px 20px 20px"
                  width="200px"
                  height="200px"
                  // border="1px solid black"
                  borderRadius="10px"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Image
                    style={{
                      borderRadius: "5px",
                      cursor: "pointer",
                      height: "200px",
                      width: "200px",
                    }}
                    src={el.img}
                  />
                </Box>
                <Heading fontSize="15px" marginTop="12px" fontWeight="600" textAlign={"left"}>
                  {el.heading}
                </Heading>
                <Stack
                  direction="horizontal"
                  gap="7px"
                  alignItems="center"
                  marginTop="10px"
                >
                  <Heading fontSize="12px" fontWeight="500" color="#6d757c">
                    MRP
                  </Heading>
                  <Heading
                    fontSize="14px"
                    fontWeight="500"
                    textDecoration="line-through"
                    color="#6d757c"
                  >
                    {el.oldprice}
                  </Heading>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap="12px"
                  alignItems="center"
                  marginTop="10px"
                  height="30px"
                >
                  <Heading fontSize="16px" fontWeight="600">
                    {el.newprice}
                  </Heading>
                  <Heading fontSize="14px" color="#ef7779" fontWeight="800">
                    {el.off}
                  </Heading>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <img style={{
        marginTop:"70px"
      }}
        src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1671000046_glam-looks-web.gif"
      />
    </Box>
    
  );
};

export default BestSeller;
