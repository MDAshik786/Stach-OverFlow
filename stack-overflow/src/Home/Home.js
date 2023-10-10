import React, { useState } from "react";
import Header from "../Header/Header";
import Question from "../Questions/Question";
const Home = () => {
  !JSON.parse(localStorage.getItem("sideBar")) &&
    localStorage.setItem(
      "sideBar",
      JSON.stringify({
        question: true,
        tag: false,
        user: false,
      })
    );
  const [sideBar, setSideBar] = useState(
    JSON.parse(localStorage.getItem("sideBar"))
  );
  return (
    <div>
      <Header />
      <Question sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  );
};

export default Home;
