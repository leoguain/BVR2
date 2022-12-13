import { Link } from "react-router-dom";
import styled from "styled-components";

type NavbarProps = {
  extend: boolean;
};

export const NavbarContainer = styled("nav")<NavbarProps>`
  display: flex;
  padding: 20px;
  margin-left: auto;
  background-color: black;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarListLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarListLinkContainerExtended = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin: 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const NavbarLink = styled(Link)`
  color: #149b49;
  font-size: large;
  text-decoration: none;

  &:hover {
    color: lightgreen;
  }
  &:focus {
    color: white;
  }
  &:active {
    color: green;
  }
`;

export const ButtonLink = styled("button")`
  width: 70px;
  height: 50px;
  background-color: black;
  border: none;
  color: #149b49;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

/*
type NavbarProps = {
  extend: boolean;
};

export const NavbarContainer = styled("nav")<NavbarProps>`
  display: flex;
  width: 100%;
  gap: 20px;
  height: ${(props) => (props.extend ? "100vh" : "60px")};
  align-self: auto;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 80px;
    background-color: black;
    flex-direction: column;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  color: #149b49;
  font-size: large;
  text-decoration: none;
  margin: 20px;

  &:hover {
    color: lightgreen;
  }
  &:focus {
    color: white;
  }
  &:active {
    color: green;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonLink = styled("button")`
  width: 70px;
  height: 50px;
  background-color: black;
  border: none;
  color: darkgray;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ExtendedNavbar = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: space between;
  background-color: black;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: large;
  text-decoration: none;
  margin: 10px;
  &:hover {
    color: lightgreen;
  }
  &:focus {
    color: white;
  }
  &:active {
    color: green;
  }
`;
*/
