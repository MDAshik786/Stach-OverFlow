import React from "react";
import "./Tags.css";
import SearchInput from "../Home/SearchInput";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import RelatedTag from "../Home/RelatedTag";
const Tags = () => {
  return (
    <>
      <Header />
      <div className="Tags-main">
        <SideBar />
        <div className="tags-container">
          <p className="tag-heading">Tags</p>
          <p className="tag-heading-desc">
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
          <SearchInput />
          <div className="tag-mapping-container">
            <div className="single-map-tag">
              <button className="tags-button">Javascripts</button>
              <p className="tag-des">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that
              </p>
              <span className="tag-counts">2514841 questions</span>
            </div>
            <div className="single-map-tag">
              <button className="tags-button">Javascripts</button>
              <p className="tag-des">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that
              </p>
              <span className="tag-counts">2514841 questions</span>
            </div>
            <div className="single-map-tag">
              <button className="tags-button">Javascripts</button>
              <p className="tag-des">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that
              </p>
              <span className="tag-counts">2514841 questions</span>
            </div>
            <div className="single-map-tag">
              <button className="tags-button">Javascripts</button>
              <p className="tag-des">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that
              </p>
              <span className="tag-counts">2514841 questions</span>
            </div>
            <div className="single-map-tag">
              <button className="tags-button">Javascripts</button>
              <p className="tag-des">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that
              </p>
              <span className="tag-counts">2514841 questions</span>
            </div>
            <div className="single-map-tag">
              <button className="tags-button">Javascripts</button>
              <p className="tag-des">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that
              </p>
              <span className="tag-counts">2514841 questions</span>
            </div>
            <div className="single-map-tag">
              <button className="tags-button">Javascripts</button>
              <p className="tag-des">
                For questions about programming in ECMAScript (JavaScript/JS)
                and its different dialects/implementations (except for
                ActionScript). Note that
              </p>
              <span className="tag-counts">2514841 questions</span>
            </div>
          </div>
        </div>
        <RelatedTag />
      </div>
    </>
  );
};

export default Tags;
