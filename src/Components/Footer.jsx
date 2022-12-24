
import React from 'react'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  VisuallyHidden,
  chakra
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
  FaGoogle,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
      <Box>
        <Box color={useColorModeValue("gray.700", "gray.200")}>
          <Container mt='20' as={Stack} maxW={"8xl"} py={10}>
            <SimpleGrid
              // ml="20"
              columns={{ base: 1, sm: 2, md: 4 }}
              spacing={"16rem"}
            >
              <Stack align={"flex-start"} fontSize={"2rem"} color={"gray"}>
                <Link href={"#"}>Marketing</Link>
                <Text fontSize="md">About us</Text>
                <Text fontSize="md">Our Team</Text>
                <Text fontSize="md">Careers</Text>
                <Text fontSize="md">Press</Text>
              </Stack>
              <Stack align={"flex-start"} fontSize={"2rem"} color={"gray"}>
                <Link href={"#"}>Purple Business</Link>
                <Text fontSize="md">Sell on Glam Girl</Text>
              </Stack>
              <Stack align={"flex-start"} fontSize={"2rem"} color={"gray"}>
                <Link href={"#"}>Policy Info</Link>
                <Text fontSize="md">Privacy Policy</Text>
                <Text fontSize="md">Term of use</Text>
                <Text fontSize="md">Return</Text>
                <Text fontSize="md">Cancellation Policy</Text>
              </Stack>
              <Stack align={"flex-start"} fontSize={"2rem"} color={"gray"}>
                <Link href={"#"}>Need Help</Link>
                <Text fontSize="md">FAQ's</Text>
                <Text fontSize="md">Contact us</Text>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
  
        <Box
          bg={"#F0F0F0"}
          padding={"1rem"}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            fontSize="16"
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
            color={"hsl(0,0%,20%)"}
          >
            <Stack direction={"row"} spacing={6}>
              <Link href={"#"}>Payment</Link>
              <SocialButton label={"mastercard"} href={"#"}>
                <FaCcMastercard fontSize="40" color="black" />
              </SocialButton>
              <SocialButton label={"visa"} href={"#"}>
                <FaCcVisa fontSize="40" color="blue" />
              </SocialButton>
              <SocialButton label={"paypal"} href={"#"}>
                <FaCcPaypal fontSize="32" color="red" />
              </SocialButton>
            </Stack>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter color="blue" />
              </SocialButton>
              <SocialButton label={"Pinterset"} href={"#"}>
                <FaPinterest color="crimson" />
              </SocialButton>
              <SocialButton label={"LinkedIn"} href={"#"}>
                <FaLinkedinIn color="blue" />
              </SocialButton>
              <SocialButton label={"Google"} href={"#"}>
                <FaGoogle color="red" />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube color="red" />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram color="crimson" />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
  )
}

export default Footer