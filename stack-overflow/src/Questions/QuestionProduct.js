import React from 'react'
import img from '../Asserts/Images/boy.jpg'
const QuestionProduct = () => {
  return (
    <div className="questions">
    <div className="qn-container">
      <span className="qn-heading">All Questions</span>
     <div className="qn-img-container">
      <img src={img} alt="" width={100} className="qn-img"/>
      <button className="ask-button">Ask Question</button></div>
    </div>
    <p className="total-qn">23,930,648 questions</p>
    <hr  className='hr-qn-product'/>
    <div className="qn-list-container">
      <div className="qn-left-container">
        <span className="qn-vote">0 voted</span>
        <span className="qn-answer">0 answer</span>
        <span className="qn-view">0 View</span>
      </div>
      <div className="qn-right-container">
        <span className="qn-name">
          Creating one universal legend for many ggplots with unique
          combinations of a universal factor
        </span>
        <div className="keyword-user-container">
          <div className="button-conatiner">
            <button className="keywords-button">Python</button>
            <button className="keywords-button">Java</button>
            <button className="keywords-button">C++</button>
          </div>
          <div>
            Farzad Kamali's user avatar Farzad Kamali 751 asked 2 mins ago
          </div>
        </div>
      </div>
    </div>
    <hr className='hr-qn-product'/>
    <div className="qn-list-container">
      <div className="qn-left-container">
        <span className="qn-vote">0 voted</span>
        <span className="qn-answer">0 answer</span>
        <span className="qn-view">0 View</span>
      </div>
      <div className="qn-right-container">
        <span className="qn-name">
          Creating one universal legend for many ggplots with unique
          combinations of a universal factor
        </span>
        <div className="keyword-user-container">
          <div className="button-conatiner">
            <button className="keywords-button">Python</button>
            <button className="keywords-button">Java</button>
            <button className="keywords-button">C++</button>
          </div>
          <div>
            Farzad Kamali's user avatar Farzad Kamali 751 asked 2 mins ago
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default QuestionProduct