import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cancerpage from "../pages/CancerPage/cancerp";

const allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cancerpage />} />
    </Routes>
  );
};

export default allroutes;