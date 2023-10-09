import React from "react";
import { Route, Router, Routes } from "react-router";
import Home from "./Home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Routers;
