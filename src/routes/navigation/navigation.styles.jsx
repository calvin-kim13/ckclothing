import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: var(--blue);
  padding: 2rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  font-size: 2rem;
  color: #fff;
  opacity: 0.9;

  &:hover {
    color: #fff;
    opacity: 1;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
`;

export const NavLink = styled(Link)`
  padding: 15px 20px;
  cursor: pointer;
  color: #fff;
  opacity: 0.8;

  &:hover {
    color: #fff;
    opacity: 1;
  }
`;
