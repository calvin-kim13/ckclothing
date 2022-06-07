import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 5px 9px 0px #555555;
  box-shadow: 0px 5px 9px 0px #969595;
  padding: 2rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  font-size: 2rem;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 15px 20px;
  cursor: pointer;
`;
