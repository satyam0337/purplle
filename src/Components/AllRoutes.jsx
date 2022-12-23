import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;