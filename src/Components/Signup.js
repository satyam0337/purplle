import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import {FormControl, Input,Box,Text,Button} from "@chakra-ui/react"
import Navbar from "./Navbar/Navbar";
// import Navbar from "./Navbar/Navbar";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    {/* <Navbar/> */}
    <Navbar/>
    <Box bgColor={'white'} mt='62' w='400px' height='350px' ml={'35%'} border='2px solid black' borderRadius={'36'} >
      <Box >
        <Text  mt='24' textAlign={'center'} fontSize='34'color={'teal'}>Create your Account</Text>
        {error && <alert variant="danger">{error}</alert>}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input w='70%' h='36' mt='16' ml={'15%'}  fontSize='16' border={'2px solid messenger'} type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}/>
          </FormControl>
          <FormControl>
            <Input w='70%' h='36' mt='16' ml={'15%'}  fontSize='16' border={'2px solid messenger'} 
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}  />
          </FormControl>

          <Button borderRadius={'12'} height='16' w='70%' mt='16' ml={'15%'} fontSize='16' border='2px solid blue
          ' type="Submit">
              SignUp
          </Button>
        </form>
      </Box>
      <Box textAlign={'center'} mt='24' fontSize={'20'}>
        Already have an account? <Link to="/">Log In</Link>
      </Box>
    </Box>
    </>
  );
};

export default Signup;
