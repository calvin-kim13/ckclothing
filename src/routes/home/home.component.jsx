import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
