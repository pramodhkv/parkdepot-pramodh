import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import ShipDetails from "./ShipDetails";

const Pages = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/details/:shipId" element={<ShipDetails />} />
    </Routes>
  );
};

export default Pages;
