import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import RelatedTag from "../Home/RelatedTag";
import QuestionProduct from "./QuestionProduct";
import "./Question.css";

const QuestionContainer = () => {
  return (
    <>
      <Header />
      <div className="qn-main-container">
        <SideBar />
        <QuestionProduct />
        <RelatedTag />
      </div>
    </>
  );
};

export default QuestionContainer;
