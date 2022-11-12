import styled, {css} from 'styled-components'
import fundoCarbon from '../Assets/carbon.jpg';


//background: url(${fundoCarbon});

export const Container = styled.div`
    display: flex;
    background-color: ${props => props.inputColor || "black"};
    color: ${props => props.inputColorFont || "white"};
    border-radius:10px;
    min-height: 70vh;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 768px) {
        width: 500px;
    }

    ${props =>props.colors && css`
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
    justify-content: space between;
    padding: 20px;

    @media(max-width: 768px) {
        width: 100%;
        height: 80px;
    }
`;

export const ItensTopoRanking = styled.div`
    display:flex;
    height: 100px;
    align-self:center;
    align-items:center;
    justify-content: center;
    padding: 0px 40px;

    @media(max-width: 768px) {
        width: 133px;
        padding: 20px 20px;
    }
`;

export const DataRanking = styled.div`
    display:flex;
    min-height: 70vh;
    flex-direction: column;
    align-self:center;
    align-items:center;
    padding: 0px 20px;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`;

export const LinhaRanking = styled.div`
    display:flex;    
    height: ${props => props.inputHeight || "25px"};
    align-self: center;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 768px) { 
        flex-flow: row wrap;
        padding: 0px 10px 0px 10px;
    }
`;

export const LinhaHeader = styled(LinhaRanking)`
    display:flex;  
    height: 40px;

    @media(max-width: 768px) { 
        flex-flow: row wrap;
        padding: 0px 10px 0px 10px;
        display:none;  
    }
`

export const LinhaHeaderExtend = styled(LinhaRanking)`
    display: none;    
    height: ${props => props.inputHeight || "25px"};
    align-self: center;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 768px) {
        display:flex;  
        flex-flow: row wrap;
        padding: 0px 10px 0px 10px;
    }
`;

export const CelulaRanking = styled.div`
    display:flex;  
    border-radius: ${props => props.inputBorder || "3px"}; 
    background-color: ${props => props.corHead || "purple"};
    color: ${props => props.inputColorFont || "white"};
    height: 16px;
    width: 80px;
    align-items: center;
    justify-content: center;
    padding:3px;
    margin:2px;
    font-size: 16px;

    @media(max-width: 768px) {
        font-size: 12px;
        width: 50px;
        padding:0px;
        margin:1px;
    }
`;

export const CelulaHeader = styled(CelulaRanking)`
    height: 30px;
    width: ${props => props.inputWidth || "80px"};
    font-size: 12px;

    @media(max-width: 768px) {
        width: ${props => props.inputWidth || "50px"};
    }
`
export const LinhaPiloto = styled.div`
    display:flex;    
    background-color: ${props => props.inputColor || "#282c34"}; #282c34;
    color: ${props => props.inputColorFont || "white"};
    height: 20px;
    width: ${props => props.inputWidth || "80px"};
    align-items: center;
    justify-content: center;
    padding:3px;
    margin:2px;
    font-size: 11px;

    @media(max-width: 768px) {
        font-size: 10px;
        width: ${props => props.inputWidth || "50px"};
        padding:0px;
        margin:1px;
    }
`;

export const Pistas = styled.div`
    @media(max-width: 768px) {
    display: none;
}`;

export const SubMenu = styled.div`
    display:none;    
    align-self: center;


    @media(max-width: 768px) {
        display:flex;
        margin-top:10px;
        margin-bottom:20px;
        padding-left:50px;
    }
`;

export const ColunaSubMenu = styled.div`
    display:none;    
    align-self: center;
    align-items: center;

    @media(max-width: 768px) {
        display:flex; 
        flex-direction: column;
        
    }
`;

export const CelulaSubMenu = styled.div`
    display:flex;  
    border-radius: ${props => props.inputBorder || "1px"}; 
    background-color: ${props => props.corHead || "purple"};
    color: ${props => props.inputColorFont || "white"};
    
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        font-size: 12px;
        height: 25px;
        width: ${props => props.inputWidth || "150px"}; 
        padding:0px;
        margin:1px;
    }
`;

export const PistasSubMenu = styled.div`
    @media(max-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}`;