import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HomeCarousel from "../../components/carousel/carousel.component";
import { UserContext } from "../../contexts/user.context";
import landingPage from "../../assets/landingPage.svg";
import "./home.styles.scss";

const Home = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {user.currentUser ? (
        <HomeCarousel />
      ) : (
        <div className="home-logged-out">
          <div>
            <h2>
              Welcome to <br /> CKclothing
            </h2>
            <h3>Create an account or sign in to start shopping!</h3>
            <div className="landing-btn-container">
              <button
                className="register-btn"
                onClick={() => navigate("/signup")}
              >
                <span className="text">Create Account</span>
              </button>
              <button className="signin-btn" onClick={() => navigate("/login")}>
                <span className="text">Sign in</span>
              </button>
            </div>
          </div>
          <img src={landingPage} alt="Landing Page" />
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Home;
