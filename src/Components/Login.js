import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import {FormControl, Input,Box,Text,Button} from "@chakra-ui/react"
import Navbar from "./Navbar/Navbar";
// import Navbar from "./Navbar/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      alert('user not found')
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    {/* <Navbar/> */}
    <Navbar/>
    <Box w='400px' mt='4' height='490px' ml={'35%'} border='2px solid black' bgColor={'white'} borderRadius={'36'} >
      <Box mt='4' >
        <Text textAlign={'center'} fontSize='34'color={'teal'} >Login/Create Account</Text>
        {/* {error && <alert variant="danger">{error}</alert>} */}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input w='70%' h='16' mt='12' ml={'15%'}  fontSize='16' border={'2px solid messenger'} type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl >
            <Input w='70%' h={'16'} mt='8' ml={'15%'} fontSize='16' border={'2px solid messenger'}type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
            <Button borderRadius={'24'}  border={'2px solid blue'} height='16' w='70%' mt='16' ml={'15%'} fontSize='16'   type="Submit">
              Log In
            </Button>
        </form>
        <Text fontSize={'16'} mt='2' color='blue' textAlign={'center'}>OR</Text>
           <Button borderRadius={'24'} w='70%' height='16' mt='4' ml={'15%'} fontSize='16' border={'2px solid blue'} onClick={handleGoogleSignIn} type="Submit">
              Sign-in  With  Google
            </Button>
          <Link to="/phonesignup">
          <Button  border={'2px solid blue'} borderRadius={'24'} w='70%' height='16' mt='4' ml={'15%'} fontSize='16'  type="Submit">
              Sign-in in With OTP
            </Button>
        </Link>
      </Box>
      <Box textAlign={'center'} mt='4' fontSize={'20'}>
        Don't have an account? <Link to="/signup" style={{color:'blue'}}>Sign up</Link>
      </Box>
    </Box>
    </>
  );
};

export default Login;
