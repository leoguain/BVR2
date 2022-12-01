import styled, {css} from 'styled-components'
import fundoCarbon from '../Assets/carbon.jpg';


//background: url(${fundoCarbon});
export const BVR_h2 = styled.h2`
        font-size: 1em;
        font-weight: 700;
        color: ${props => props.inputFontColor || "white"};
        line-height: 1.1em;
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

export const MainContainer = styled.div`
    display: flex;
    background-color: ${props => props.inputColor || "black"};
    color: ${props => props.inputFontColor || "white"};
    border-radius:10px;
    width: 400px;
    min-height: 70vh;
    flex-direction: column;
    justify-content: top;

    ${props =>props.silviaKup && css`
        background: none;
        background-color: #e9e9e9;
        color: #bc0202;
        font-weight: bold;
    `}
`;

export const TopoRanking = styled.div`
    display:flex;
    height: 100px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    align-items: center;
    justify-content:space-between;
`;

export const LinhaRanking = styled.div`
    display:flex;    
    height: 25px;
    width: 330px;
    align-self: center;
    align-items: center;
    margin:3px;
    justify-content: separate-between;
`;

export const CelulaRanking = styled.div`
    display:flex;  
    border-radius: ${props => props.inputBorder || "8px 1px 1px 1px"};
    height: 16px;
    width: 50px;
    background-color: ${props => props.inputColor || "red"};
    color: ${props => props.inputFontColor || "white"};
    align-items: center;
    justify-content: center;
    padding:5px;
    font-size: 16px;
    font-weight: normal;

    ${props =>props.silviaKup && css`
        background: none;
        background-color: #bc0202;
        color: white;
    `}
`;

export const LinhaPiloto = styled.div`
    display:flex;    
    background-color: ${props => props.inputColor || "red"};
    height: 23px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-left: 10px;
`;

export const RankingButton = styled.button`
    border-radius:10px;
    border: solid;
    background-color: ${props => props.inputColor || "red"};
    align-items: center;
    height: 25px;
    margin: 2px;
    cursor: pointer;
`;

