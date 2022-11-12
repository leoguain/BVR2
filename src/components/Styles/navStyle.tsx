import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from '../Assets/liga_bvr_gt_branco.png';

type NavbarProps= {
    extend:boolean;
}

export const NavbarContainer = styled("nav")<NavbarProps>`
    display: flex;
    width: 100%;
    height: ${(props) => (props.extend ? "100vh" : "60px")};
    background-color: black;
    color: white;
    align-items: center;
    justify-content: space-between;

    @media(min-width:768px){
        height: 100px;
        background-color: black;
        flex-direction: column;
    }
`;

 export const NavbarLinkContainer = styled.div`
     display: flex
     width: 400px;
     justify-content: space-between;
     
     margin: 20px;

     
`;

 export const NavbarLink = styled(Link)`
    color: gray;
    font-size: large;
    text-decoration: none;
    margin: 20px;

    &:hover{
        color: lightgreen;
    }
    &:focus{
        color: white;
    }
    &:active{
        color: green;
    }
    
    @media(max-width: 768px) {
        display: none;
}`;

export const ButtonLink = styled("button")`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: darkgray;
    font-size: 45px;
    cursor: pointer;
    
    @media(min-width: 768px) {
        display: none;`;





export const ExtendedNavbar = styled("div")`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    align-self: center
    justify-content: space between;

    @media (min-width:768px){
        display: none;
}`;

export const NavbarLinkExtended= styled(Link)`
  color:white;
  font-size: large;
  text-decoration: none;
  margin: 10px;
  &:hover{
    color: lightgreen;
}
&:focus{
    color: white;
}
&:active{
    color: green;
};`;