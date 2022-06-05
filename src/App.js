import { useContext } from "react";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { UserContext } from "./contexts/user.context";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="checkout"
            element={currentUser ? <Checkout /> : <Home />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
