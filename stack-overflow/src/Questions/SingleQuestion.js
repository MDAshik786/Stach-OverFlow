import React from "react";
import "./SingleQuestion.css";
import Voteing from "./Voteing";

const SingleQuestion = () => {
  return (
  
      <div className="single-qn-container">
        <p className="single-qn-desc">
          Running springdoc-openapi on a non-root path
        </p>
        <div className="single-whole-qn">
          <Voteing />
          <div className="single-right-container">
            <div className="qn-content">
              <p>
                I'm trying to run springdoc-openapi 1.6.14 with a spring boot
                app that runs on non root path (in this exaple /bla). Everything
                works fine in my local dev environment, which runs on a root
                path. I have tried the following configurations:
              </p>
              <div className="button-conatiner">
                <button className="keywords-button">Python</button>
                <button className="keywords-button">Java</button>
                <button className="keywords-button">C++</button>
              </div>
            </div>
          </div>
        </div>
        <div className="whole-answer-container">
          <p className="answer-heading">1 Answer</p>
          <div className="answer-container">
            <Voteing />
            <div className="right-answer-div">
           <div className="answers">
           <p>
                I'm trying to run springdoc-openapi 1.6.14 with a spring boot
                app that runs on non root path (in this exaple /bla). Everything
                works fine in my local dev environment, which runs on a root
                path. I have tried the following configurations:
              </p>
              <p>
                I'm trying to run springdoc-openapi 1.6.14 with a spring boot
                app that runs on non root path (in this exaple /bla). Everything
                works fine in my local dev environment, which runs on a root
                path. I have tried the following configurations:
              </p>
              <p>
                I'm trying to run springdoc-openapi 1.6.14 with a spring boot
                app that runs on non root path (in this exaple /bla). Everything
                works fine in my local dev environment, which runs on a root
                path. I have tried the following configurations:
              </p>
           </div>
              
            </div>
          </div>
        </div>
        <div>
          <p>Your Answer</p>
          <div>

          </div>
           <button className="post-answer-button">Post Your Answer</button>
        </div>
      </div>
   
  );
};

export default SingleQuestion;
