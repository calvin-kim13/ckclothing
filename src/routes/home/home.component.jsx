import { Outlet } from "react-router-dom";
import HomeCarousel from "../../components/carousel/carousel.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <HomeCarousel />
      <Outlet />
    </div>
  );
};

export default Home;
