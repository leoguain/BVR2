import styled, {css} from 'styled-components'
import fundoCarbon from '../Assets/carbon.jpg';


//background: url(${fundoCarbon});

export const Container = styled.div`
    display: flex;
    background-color: #e9e9e9;
    border-radius:10px;
    width: 400px;
    min-height: 50vh;
    flex-direction: column;
    justify-content: top;
    gap:10px;
    padding-bottom: 10px;

    ${props =>props.silviaKup && css`
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
    justify-content: separate-between;
`;

export const CelulaRanking = styled.div`
    display:flex;  
    border-radius: ${props => props.inputBorder || "10px 3px 3px 3px"}; ;
    height: 16px;
    width: 50px;
    background-color: ${props => props.inputColor || "red"};
    align-items: center;
    justify-content: center;
    padding:3px;
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
    background-color: #282c34;
    height: 20px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-left: 10px;

    ${props =>props.silviaKup && css`
        background: none;
        background-color: #c7c7c7;
        color: #bc0202;
        font-weight: bold;
    `}
`;

export const RankingButton = styled.button`
    border-radius:10px;
    border: solid 3px #c7c7c7;
    background-color:#c7c7c7;
    align-items: center;
    width: 160px;
    height: 30px;
    margin: 5px;
    cursor: pointer;

    ${props =>props.silviaKup && css`
        background-color: #bc0202;
        border: #bc0202;
        color: white;
    `}
`;