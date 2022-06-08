import { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import { Dropdown, Menu, Space, Modal, message } from "antd";
import { DownOutlined, QuestionCircleOutlined } from "@ant-design/icons";

const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  console.log(currentUser);

  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };

  function modal() {
    Modal.confirm({
      title: "Confirm",
      icon: <QuestionCircleOutlined style={{ color: "red" }} />,
      content: "Are you sure you want to logout?",
      okText: "Yes",
      cancelText: "No",
      className: "logout",
      onOk() {
        message.success("Successfully logged out");
        setTimeout(() => {
          handleSignOut();
        }, 500);
      },
    });
  }

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <NavLink to="/">Home</NavLink>,
        },
        {
          key: "2",
          danger: true,
          label: <span onClick={modal}>Sign Out</span>,
        },
      ]}
    />
  );

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          {/* <CrwnLogo className="logo" /> */}
          CKclothing
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <Dropdown overlay={menu}>
              <NavLink as="span" onClick={(e) => e.preventDefault()}>
                <Space>
                  Account
                  <DownOutlined />
                </Space>
              </NavLink>
            </Dropdown>
          ) : (
            <NavLink to="/login">Sign In</NavLink>
          )}
          {currentUser && <CartIcon />}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
