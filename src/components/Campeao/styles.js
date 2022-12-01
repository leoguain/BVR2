import styled, {css} from 'styled-components'


export const BannerCampeao = styled.div`
    background-color: red;

    background: url(${props => props.inputURL || "none"}); 

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: 200px;

    width:200px;
    height: 250px;
    border-radius:10px;
    border: solid 3px black;
    color: white;
    display: flex;
    align-self:center;
    margin:5px;
    transition: 0.5s;

    &:hover {
        border:solid 3px white;
        width:300px;
        height: 375px;
        background-size: 300px;
    }
`;