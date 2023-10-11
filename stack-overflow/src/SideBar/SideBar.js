import { BiWorld } from "react-icons/bi";
import "./SideBar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { handleOnClick } from "../Function/Navigate";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isItemSelected = (item) => location.pathname === `/${item}`;

  const listItems = (item, text) => (
    <div
      className={`s-link ques-container${isItemSelected(item) ? " selected" : ""}`}
      onClick={() => handleOnClick(navigate, item)}
    >
      {item === "question" && <BiWorld />}
      <span className={`s-links${isItemSelected(item) ? " selected-font" : ""}`}>
        {text}
      </span>
    </div>
  );

  return (
    <div className="sidebar-whole-container">
      <div className="sidebar-container">
        <p className="s-links" onClick={() => handleOnClick(navigate, "")}>
          Home
        </p>
        {listItems("question", "Question")}
        {listItems("tag", "Tags")}
        {listItems("user", "Users")}
      </div>
    </div>
  );
};

export default SideBar;

