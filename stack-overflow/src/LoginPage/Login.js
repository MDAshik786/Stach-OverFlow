import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import { useState } from "react";

import "./Login.css";
import Input from "./Input";
function Login() {
  const [login_values, setLogin_values] = useState({
    email: "",
    password: "",
  });
  const onupdate_login = (data) => {
    setLogin_values({ ...login_values, [data.target.name]: data.target.value });
  };
  console.log(login_values.email);
  return (
    <div className="login-main-container">
      <div className="login_container">
        <div className="leftside-container">
          <p className="login-heading">Login</p>
          <div className="logo-name-container">
            <GrStackOverflow className="icons-stack" />
            <div>
              <p className="internal">Internal </p>
              <p className="stackoverflow">Stack Overflow</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <form className="login-form_container">
            <div className="whole-input">
              <div className="input-container">
                <label className="login-input_title">Email:</label>
                <Input
                  name="email"
                  type="text"
                  placeholder="Enter Your Email"
                  onChange={(data) => {
                    onupdate_login(data);
                  }}
                />
              </div>
              <div className="input-container">
                <label className="login-input_title">Password:</label>
                <Input
                  name="password"
                  type="text"
                  placeholder="Enter Your Password"
                  onChange={(data) => {
                    onupdate_login(data);
                  }}
                />
              </div>
            </div>
            <div className="button-container">
              <button className="login_button">Login</button>
              <div className="already-acount">
                <span>Already have an account?</span>
                <a className="sign-in-link">Sign in</a>
              </div>
            </div>
          </form>
          <div className="icons-container">
            <FcGoogle className="login-icons" />
            <AiFillGithub className="login-icons" />
            <FaFacebook className="login-icons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
