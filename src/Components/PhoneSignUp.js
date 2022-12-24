import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import "./PhoneInput.css"
import {FormControl, Input,Box,Text,Button} from "@chakra-ui/react"
import Navbar from "./Navbar/Navbar";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <Navbar/>
    <Box mt='4' bgColor={'white'}  w='400px' height='300px' border='1px' ml={'35%'} borderRadius={'36'}>
      <Box>
        <Text mt='4' textAlign={'center'} mb='8' fontSize='34'color={'teal'}>Sign-In with OTP</Text>
        {error && <aert variant="danger">{error}</aert>}
        <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <FormControl>
            <PhoneInput
              defaultCountry="IN"
              className="PhoneInput"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <Box id="recaptcha-container"></Box>
          </FormControl>
            <Link to="/">
            <Button borderRadius={'12'} height='16' w='70%' mt='4' ml={'15%'} fontSize='16'  border={'2px solid blue'} type="Submit">
              Cancel
          </Button>
            </Link>
            &nbsp;
            <Button  borderRadius={'12'} height='16' w='70%' mt='4' ml={'15%'} fontSize='16'  border={'2px solid blue'} type="Submit">
              Send Otp
            </Button>
        </form>

        <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <FormControl>
            <Input w='70%' h='36' mt='16' ml={'15%'}  fontSize='16' border={'2px solid messenger'}
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}/>
          </FormControl>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </form>
      </Box>
    </Box>
    </>
  );
};

export default PhoneSignUp;
