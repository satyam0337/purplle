import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// import Header_Gradient from "../../components/ProductPage/Header_Gradient";
import styles from "./product.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

function ProductsPages() {
  // completed
  // future: pagination
  const [data, setData] = useState([]);
  const [prod, setProd] = useState([]);
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("asc");
  const [page, setPage] = useState(2);
  function handleGet() {
    axios(
      // `https://glamour.onrender.com/products/${category}?page=${page}`
      `https://purplle-final-backend-production.up.railway.app/brand`
    ).then((res) => {
      setProd(res.data);
      // console.log(res, "prod");
      localStorage.setItem("data", JSON.stringify(res.data));
    });
  }

  function allProducts() {
    axios.get(`https://purplle-final-backend-production.up.railway.app/brand`).then((res) => {
      let rdata = res.data;
      console.log(rdata)
      let catdata = rdata.filter((e) => e.category == category&&e.SalePrice>0);
      console.log(catdata,"catdata")
     setData(catdata);
    });
  }
 

  function letsSort(sortBy) {
    if (sortBy == "asc") {
      // console.log(data,"sorted")
      let updatedata = data.sort((a,b)=>Number(a.price)-Number(b.price))
      setProd(updatedata)
    
        
    } else if (sortBy == "desc") {
      let updatedata = data.sort((b,a)=>Number(a.price)-Number(b.price))
      setProd(updatedata)
    }
  }

  useEffect(() => {
    letsSort(sortBy);
  }, [sortBy]);

  console.log(prod);
  useEffect(() => {
    setProd(prod);
    allProducts();
  }, []);

  useEffect(() => {
    handleGet();
  }, [category]);

  return (
    <>
    <Navbar/>
    <Container
      className={styles.prod_container}
      maxW={{ base: "100%", md: "95%", lg: "90%" }}
      minH="100vh"
      color="#262626"
    >

      <SimpleGrid
        minChildWidth={'260px'}
        spacing="30px"
      >
        {(prod || data).map((e, i) => (
          <Link key={i} to={`/${e.category}/${e._id}`}>
            <Card
              maxW="md"
              bg={"#ffff"}
              borderRadius={"2px"}
              boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <CardBody>
                <Center height={"300px"}>
                  <Image
                     src={
                      e.imageUrl ||
                      "https://files.myglamm.com/site-images/800x800/staydefined_3.jpeg"
                    }
                    alt="Green double couch with wooden legs"
                    borderRadius="sm"
                    w={"85%"}
                    height={"85%"}
                    _hover={{
                      w: "95%",
                      h: "95%",
                    }}

                    //   border={"1px solid red"}
                  />
                </Center>

                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    color={"black"}
                    // fontSize='20px'
                    textAlign="center"
                    textTransform={"uppercase"}
                    noOfLines="1"
                  >
                    {e.name}
                  </Heading>
                  <Text textAlign={'center'} text color="blue" fontSize="2xl">
                  ₹{e.SalePrice || 450}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
    <Footer/>
    </>
  );
}

export default ProductsPages;