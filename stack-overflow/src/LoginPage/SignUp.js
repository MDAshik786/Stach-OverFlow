import React, { useState } from "react";
import "./SignUp.css";
import { GrStackOverflow } from "react-icons/gr";
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
  });
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
        <div className="leftside-container-signup">
          <p className="login-heading">Sign up</p>
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
              <div className="signup-input-container">
                <div className="input-container-signup">
                  <label className="login-input_title">User name:</label>
                  <Input
                    name="username"
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(data) => {
                      nameCheck1(data);
                    }}
                  />
                  {checking.check_username && (
                    <p className="error">Enter username</p>
                  )}
                </div>
                <div className="input-container-signup">
                  <label className="login-input_title">Email:</label>
                  <Input
                    name="email"
                    type="text"
                    placeholder="Enter Your Email"
                    onChange={(data) => {
                      emailCheck(data);
                    }}
                  />
                  {checking.check_email && (
                    <p className="error">Enter valid mail id</p>
                  )}
                </div>
                <div className="input-container-signup">
                  <label className="login-input_title">Password:</label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(data) => {
                      passwordCheck(data);
                    }}
                  />
                  {checking.check_password && (
                    <p className="error">password contain 8 digit</p>
                  )}
                </div>
                <div className="input-container-signup">
                  <label className="login-input_title">Confirm Password:</label>
                  <Input
                    name="country"
                    type="password"
                    placeholder="Reenter Your Password"
                    onChange={(data) => {
                      confirm(data);
                    }}
                  />
                   {checking.check_confirm && (
                    <p className="error">password is not match</p>
                  )}
                </div>
                <div className="input-container-signup">
                  <label className="login-input_title">Country:</label>
                  <Input
                    name="country"
                    type="text"
                    placeholder="Enter Your Country"
                    onChange={(data) => {
                      nameCheck1(data);
                    }}
                  />
                  {checking.check_username && (
                    <p className="error">Enter username</p>
                  )}
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="login_button">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
{
  /* <form>
          <label className="login-input_title">User name:</label>
            <Input
              name="username"
              type="text"
              onChange={(data) => {
                nameCheck1(data);
              }}
            />
            {checking.check_username && <p className="error">Enter username</p>}
            <label className="login-input_title">Email:</label>
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
            <label className="login-input_title">Password:</label>
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
           <label className="login-input_title">Confirm Password:</label>
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
           <button className="login_button">Sign up</button>
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
          </form> */
}
export default SignUp;
