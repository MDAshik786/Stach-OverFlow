import React from "react";
import { Route, Router, Routes } from "react-router";
import Home from "./Home/Home";
import Login from "./LoginPage/Login";
import Tags from "./Tags/Tags";
import Users from "./Users/Users";
import QuestionContainer from "./Questions/QuestionContainer";
import SignUp from "./LoginPage/SignUp";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<QuestionContainer />}></Route>
      <Route path="/question" element={<QuestionContainer/>}></Route>
      <Route path="/tag" element={<Tags />}></Route>
      <Route path="/user" element={<Users />}></Route> 
      <Route path="/login" element={<Login />}></Route> 

    </Routes>
  );
};

export default Routers;
