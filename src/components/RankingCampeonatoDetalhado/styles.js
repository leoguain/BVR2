import styled, {css} from 'styled-components'
import fundoCarbon from '../Assets/carbon.jpg';


//background: url(${fundoCarbon});

export const Container = styled.div`
    display: flex;
    background-color: black;
    color: white;
    border-radius:10px;
    min-height: 70vh;
    flex-direction: column;
    justify-content: top;

    ${props =>props.silviaKup && css`
        background: none;
        background-color: white;
        color: red;
    `}
`;

export const TopoRanking = styled.div`
    display:flex;
    height: 100px;
    align-self:center;
    align-items:center;
    justify-content: center;
`;

export const LinhaRanking = styled.div`
    display:flex;    
    height: ${props => props.inputHeight || "25px"};
    width: 1000px;
    align-self: center;
    align-items: center;
    justify-content: space-between;
`;

export const CelulaRanking = styled.div`
    display:flex;  
    border-radius: ${props => props.inputBorder || "3px 3px 3px 3px"}; 
    height: 16px;
    width: 50px;
    background-color: ${props => props.inputColor || "red"};
    align-items: center;
    justify-content: center;
    padding:3px;
    margin:2px;
    font-size: 14px;
`;

export const CelulaHeader = styled(CelulaRanking)`
    height: 30px;
    width: ${props => props.inputWidth || "100px"};
    font-size: 10px;
`

export const LinhaPiloto = styled.div`
    display:flex;    
    background-color: #282c34;
    height: 20px;
    width: ${props => props.inputWidth || "100px"};
    align-items: center;
    justify-content: center;
    padding:3px;
    margin:2px;
    font-size: 12px;
`;