import styled, {css} from 'styled-components';

//background: url(${fundoCarbon});

export const Container = styled.div`
    display: flex;
    background-color: ${props => props.inputColor || "black"};
    color: ${props => props.inputColorFont || "white"};
    border-radius:10px;
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

export const LinhaRanking = styled.div`
    display:flex;    
    height: ${props => props.inputHeight || "25px"};
    align-self: center;
    align-items: center;

    @media(max-width: 768px) { 
        flex-flow: row wrap;
        padding: 0px 5px ;
        width: 400px;
        gap:5px;
    }
`;

export const CelulaRanking = styled.div`
    display:flex;  
    border-radius: ${props => props.inputBorder || "3px"}; 
    background-color: ${props => props.corHead || "purple"};
    color: ${props => props.inputColorFont || "white"};
    height: 16px;
    width: ${props => props.inputWidth || "80px"};
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
export const HeaderCup = styled.div`
    display:flex;
    height: 100px;
    align-self:center;
    align-items:center;
    justify-content: space-between;
    margin: 20px;
    gap: 20px;

    @media(max-width: 768px) {
        width: 430px;
        height: 80px;
    }
`;

export const ItemHeaderCup = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    padding: 0px 40px;

    @media(max-width: 768px) {
        width: 133px;
        padding: 0px;
    }
`;

export const ContainerTable = styled.div`
    display:flex;
    flex-direction: column;
    align-self:center;
    align-items:center;
    margin-bottom: 10px;


    @media(max-width: 768px) {
        flex-direction: column;
        width: 430px;
    }
`;

export const HeaderTable = styled(LinhaRanking)`
    display:flex;  
    height: 40px;

    @media(max-width: 768px) { 
        flex-flow: row wrap;
        display:none;  
    }
`;

export const CellHeaderTable = styled(CelulaRanking)`
    height: 30px;
    width: ${props => props.inputWidth || "80px"};
    font-size: 12px;

    @media(max-width: 768px) {
        width: ${props => props.inputWidth || "160px"};
        font-size: 16px;
    }
`;

export const DriverDataHeaderMobile = styled(LinhaRanking)`
    display: none;    
    

    @media(max-width: 768px) {
        display:flex;  
        flex-flow: row wrap;
        height: ${props => props.inputHeight || "25px"};
        width: 400px;
        gap:5px;
        margin-bottom: 90px;
    }
`;

export const DriverDataRow = styled.div`
    display: flex;    
    height: ${props => props.inputHeight || "25px"};

    @media(max-width: 768px) {
        display:none; 
    }
`;

export const DriverDataCell = styled.div`
    display:flex;   
    height: 20px;
    width: ${props => props.inputWidth || "80px"}; 
    align-items: center;
    justify-content: center;
    background-color: ${props => props.inputColor || "#282c34"};
    color: ${props => props.inputColorFont || "white"};

    padding:3px;
    margin:2px;
    font-size: 11px;

    @media(max-width: 768px) {
        font-size: 14px;
        width: ${props => props.inputWidth || "160px"};
        padding:0px;
        margin:1px;
    }
`;

export const Tracks = styled.div`
    @media(max-width: 768px) {
        display: none;
    }
`;

export const SubMenu = styled.div`
    display:none;    

    @media(max-width: 768px) {
        display:flex;
        width: 400px;
        margin-bottom:40px;
        padding-left:5px;
    }
`;

export const ColunaSubMenu = styled.div`
    display:none;    

    @media(max-width: 768px) {
        display:flex; 
        align-self: center;
        align-items: center;
        flex-direction: column;
        margin: 2px;
    }
`;

export const CelulaSubMenu = styled.div`
    
    @media(max-width: 768px) {
        display:flex;  
        border-radius: ${props => props.inputBorder || "3px"}; 
        background-color: ${props => props.corHead || "purple"};
        color: ${props => props.inputColorFont || "white"};
    
        align-items: center;
        justify-content: center;
        font-size: 14px;
        height: 25px;
        width: ${props => props.inputWidth || "150px"}; 
        margin:1px;
    }
`;

export const PistasSubMenu = styled.div`

    @media(max-width: 768px) {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }
`;