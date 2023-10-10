import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import RelatedTag from "../Home/RelatedTag";
import QuestionProduct from "./QuestionProduct";
import SingleQuestion from "./SingleQuestion";

const QuestionContainer = () => {
  return (
    <>
      <Header />
      <div className="qn-main-container">
        <SideBar />
        <SingleQuestion/>
        <RelatedTag />
      </div>
    </>
  );
};

export default QuestionContainer;
