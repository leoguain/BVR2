import styled, {css} from 'styled-components'
import fundoCarbon from '../Assets/carbon.jpg';


//background: url(${fundoCarbon});
export const BVR_h2 = styled.h2`
        font-size: 1.25em;
        font-weight: 600;
        color: ${props => props.inputFontColor || "white"};
        line-height: 1.3em;
`;

export const BVR_h3 = styled.h3`
    font-size: 1em;
    font-weight: 600;
    color: ${props => props.inputFontColor || "white"};
    line-height: 1.1em;
`;

export const BVR_span = styled.span`
    font-size: 0.8em;
    line-height: 0.9em;
`;

export const BVR_a = styled.a`
    color: #45f3ff;
    margin-left: 10px;

    &:hover{
        color: "#2AC868";
    }

    &:active{
        color: "#2AC868";
    }

    &:focus{
        color: "#2AC868";
    }
`;

export const Container = styled.div`
    color: white;
    border-radius:10px;
    display: flex;
    min-height: 70vh;
    justify-content: space-between;

    @media(max-width: 700px) {
        display: flex;
        width: 500px;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        align-self: center;
`;

export const CColumn = styled.div`
    display:flex;
    border-radius:10px;
    align-items: center;
    flex-direction: column;
    margin: 10px;

    @media(max-width: 768px) {
        display: flex;
        width: 500px;
`;

export const CHeader = styled.div`
    display:flex;
    background-color: ${props => props.inputColor || "black"};
    border-radius: 15px 30px 0px 0px;
    height: 60px;
    width: 310px;
    align-items: center;
    justify-content: center;
`

export const CData = styled.div`
    display:flex;
    background-color: ${props => props.inputColor || "black"};
    border-radius: 0px 0px 15px 30px;
    width: 310px;
    padding-bottom:20px;
    min-height: 50vh;
    align-items: center;
    flex-direction: column;
`

export const CPiloto = styled.div`
    display:flex;
    background-color: ${props => props.inputColor || "none"};
    border-bottom: ${props => props.inputBottomBorder || "solid 1px white"}; 
    border-radius: ${props => props.inputBorder || "0px"};
    width: ${props => props.inputWidth || "240px"};
    height:30px;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
`

export const CNome = styled.div`
    display:flex;
    height:30px;
    align-items: center;
    
    `