
import { useNavigate } from "react-router-dom";
import { handleOnClick } from "../Function/Navigate";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="main-home-container">
      <div className="home_container">
        <div className="home_right">
          <div className="image-back">
          </div>
   
          <div className="absolute-container">
            <div className="home_left">
              <h1 className="h1-heading-tag">WE</h1>
              <h1 className="h1-heading-tag">CAN</h1>
              <h1 className="h1-heading-tag">SEARCH</h1>
              <h1 className="h1-heading-tag">ENTIRE WORLD</h1>
            </div>
            <div className="home-button-container">
              <button className="home-pages-buttons" name="login" onClick={(e) => handleOnClick(navigate, e.target.name)}> Login</button>

              <button className="home-pages-buttons" name="question" onClick={(e) => handleOnClick(navigate, e.target.name)}>Guest user</button>

              <button className="home-pages-buttons" name="login" onClick={(e) => handleOnClick(navigate, e.target.name)}>Admin user</button>
            </div>
            <div className="home-content-container">
              <h1 className="About-heading">GET STARTED</h1>
              <p className="About-content">
                The website serves as a platform for users to ask and answer
                questions and through membership and active participation to
                vote questions and answers up or down similar to Reddit and edit
                questions and answers in a fashion similar to a Users of
                Internal Stack Overflow can earn reputation points and "badges";
                for example, a person is awarded 10 reputation points for
                receiving an "up" vote on a question or an answer to a question
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
