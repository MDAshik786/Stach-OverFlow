import React, { useState } from "react";
import "./Question.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import SideBar from "./SideBar";
import RelatedTag from "./RelatedTag";

import QuestionProduct from "./QuestionProduct";
import Tags from "./Tags";
import Users from "./Users";
const Question = () => {
  const [sideBar, setSideBar] = useState({
    question:true,
    tag:false,
    user:false
  })
  return (
    <div className="questin-main-div">
      <div className="question-main-conatiner">
        <div>
          <SideBar setSideBar={setSideBar} />
        </div>
        {sideBar.question ?
        <QuestionProduct/> : sideBar.tag ? <Tags/> : <Users/>
}
 

        <div className="relativetag">
          <RelatedTag />
        </div>
      </div>
    </div>
  );
};

export default Question;
