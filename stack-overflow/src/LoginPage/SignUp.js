import React, { useState } from "react";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import { Link } from "react-router-dom";
import Input from "./Input";


function SignUp() {
  const [signup_values, setSignup_values] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [checking, setChecking] = useState({
    check_username: "",
    check_email: "",
    check_password: "",
    check_confirm: "",
  })
  const emailCheck = (data) => {
    const emailpattern =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailpattern.test(data.target.value)) {
      setChecking({ ...checking, check_email: "" });
    } else {
      setChecking({ ...checking, check_email: "false" });
    }
    onupdate(data);
  };
  const nameCheck1 = (data) => {
    if (data.target.value.length !== 0 && !containsNumbers(data.target.value)) {
      setChecking({ ...checking, check_username: "" });
    } else {
      setChecking({ ...checking, check_username: "false" });
    }
    onupdate(data);
  };
  const passwordCheck = (data) => {
    if (data.target.value.length === 8) {
      setChecking({ ...checking, check_password: "" });
    } else {
      setChecking({ ...checking, check_password: "false" });
    }

    onupdate(data);
  };
  const confirm = (data) => {
    if (data.target.value === signup_values.password) {
      setChecking({ ...checking, check_confirm: "" });
    } else {
      setChecking({ ...checking, check_confirm: "false" });
    }
    onupdate(data);
  };
  function containsNumbers(str) {
    return /\d/.test(str);
  }
  const onupdate = (data) => {
    setSignup_values({
      ...signup_values,
      [data.target.name]: data.target.value,
    });
  };
  console.log(checking.check_username.v);
  return (
    <div className="main-container">
      <div className="signup_container">
        <div className="leftside-container">
          <h1 style={{ marginTop: "6rem", fontSize: "3rem" }}>Sign up</h1>
          <div>
            <GrStackOverflow
              style={{ fontSize: "7rem", paddingTop: "3rem", color: "orange" }}
            />
            <h1>Internal </h1>
            <h2>Stack Overflow</h2>
          </div>
        </div>
        <div>
          <form>
            <h3 className="input_title">Username</h3>
            <Input
              name="username"
              type="text"
              onChange={(data) => {
                nameCheck1(data);
              }}
            />
            {checking.check_username && <p className="error">Enter username</p>}
            <h3 className="input_title">Email</h3>
            <Input
              name="email"
              type="text"
              onChange={(data) => {
                emailCheck(data);
              }}
            />
            {checking.check_email && (
              <p className="error">Enter valid mail id</p>
            )}
            <h3 className="input_title">Password</h3>
            <Input
              name="password"
              type="password"
              onChange={(data) => {
                passwordCheck(data);
              }}
            />
            {checking.check_password && (
              <p className="error">password contain 8 digit</p>
            )}
            <h3 className="input_title">Confirm_Password</h3>
            <Input
              name="confirm_password"
              type="password"
              onChange={(data) => {
                confirm(data);
              }}
            />
            {checking.check_confirm && (
              <p className="error">password is not match</p>
            )}
            <button className="btn btn-primary submit_button">Sign up</button>
            <br></br>
            <Link to="/Login">
              <a
                href="#"
                style={{
                  paddingLeft: "6.9rem",
                  color: "blue",
                  lineHeight: "3rem",
                }}
              >
                Login
              </a>
            </Link>
            <br></br>
          </form>
          <FcGoogle className="icons" />
          <AiFillGithub className="icons" />
          <FaFacebook className="icons" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
