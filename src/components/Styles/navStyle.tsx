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
  flex-flow: row wrap;
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
  margin: 10px;

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
