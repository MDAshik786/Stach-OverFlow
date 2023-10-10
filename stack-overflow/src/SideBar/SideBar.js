import { BiWorld } from "react-icons/bi";
import "./SideBar.css";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnClick = (value) => {
    navigate(`/${value}`);
  };

  const isItemSelected = (item) => location?.pathname === `/${item}`;

  const listItems = (item, text) => (
    <div
      className={`s-link ques-container${
        isItemSelected(item) ? " selected" : ""
      }`}
      onClick={() => handleOnClick(item)}
    >
      {"question" === item && <BiWorld />}
      <span
        className={`s-links${isItemSelected(item) ? " selected-font" : ""}`}
      >
        {text}
      </span>
    </div>
  );

  return (
    <div className="sidebar-whole-container">
      <div className="sidebar-container">
        <p className="s-links">Home</p>
        {listItems("question", "Question")}
        {listItems("tag", "Tags")}
        {listItems("user", "Users")}
      </div>
    </div>
  );
};

export default SideBar;
