import React from "react";
import "./Users.css";

import img from "../Asserts/Images/profile-pic.jpg";
import SearchInput from "../Home/SearchInput";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import RelatedTag from "../Home/RelatedTag";
const Users = () => {
  return (
    <>
      <Header />
      <div className="users-main-div">
        <SideBar/>
        <div className="Users-whole-container">
          <p className="user-haeding">Users</p>
          <SearchInput />
          <div className="user-grid">
            <div className="users-container">
              <div className="profile-pic-container">
                <img src={img} alt="" width={70} className="img" />
              </div>
              <div className="user-details">
                <p className="user-name">VonC</p>
                <p className="country-name">France</p>
                <span>540</span>
                <span className="user-tags">git, github, ssh</span>
              </div>
            </div>
            <div className="users-container">
              <div className="profile-pic-container">
                <img src={img} alt="" width={70} className="img" />
              </div>
              <div className="user-details">
                <p className="user-name">VonC</p>
                <p className="country-name">France</p>
                <span>540</span>
                <span className="user-tags">git, github, ssh</span>
              </div>
            </div>
            <div className="users-container">
              <div className="profile-pic-container">
                <img src={img} alt="" width={70} className="img" />
              </div>
              <div className="user-details">
                <p className="user-name">VonC</p>
                <p className="country-name">France</p>
                <span>540</span>
                <span className="user-tags">git, github, ssh</span>
              </div>
            </div>
            <div className="users-container">
              <div className="profile-pic-container">
                <img src={img} alt="" width={70} className="img" />
              </div>
              <div className="user-details">
                <p className="user-name">VonC</p>
                <p className="country-name">France</p>
                <span>540</span>
                <span className="user-tags">git, github, ssh</span>
              </div>
            </div>
          </div>
        </div>
        <RelatedTag />
      </div>
    </>
  );
};

export default Users;
