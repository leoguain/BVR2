import styled, {css} from 'styled-components'


export const MainContainer = styled.div`
    display: flex;
    border-radius: 5px;

    @media(max-width: 768px) {
  
        flex-direction: column;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    background-color: #000;
    flex-direction: column;
    border-radius: 5px;
    align-items:center;
    margin-top: ${props => props.inputMargin || "0px"};
    padding: 10px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const SubItemContainer = styled.div`
    display: flex;
    border-radius: 5px;
    align-items:center;
    gap: 5px;
    padding: 10px;

    background-color: ${props => props.inputColor || "black"};

    @media(max-width: 768px) {
        flex-flow: row wrap;
        justify-content: center;
        width:200px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    width: ${props => props.inputWidth || "200px"};
    height: ${props => props.inputHeight || "70px"};
    flex-direction: column;
    border-radius: 5px;
    border: ${props => props.inputBorder || "none"};
    justify-content:center;
    align-items:center;
    
    background-color: ${props => props.inputColor || "black"};
    

    @media(max-width: 768px) {
        flex-direction: row;
        width: 200px;
    }
`;

export const BVR_h2 = styled.h2`
        font-size: 1.25em;
        font-weight: 600;
        color: #fff;
`;

export const BVR_h3 = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    color: ${props => props.inputColor || "#fff"};


    @media(max-width: 768px) {
        font-size: 1em;
        font-weight: 600;
    }
`;

export const BVR_h4= styled.h4`
    font-size: 0.9em;
    font-weight: 400;
    color: #fff;

    @media(max-width: 768px) {
        font-size: 0.7em;
        font-weight: 400;
        color: #fff;
    }
`;

export const BVR_span = styled.span`
    font-size: 0.75em;
    font-weight: 400;
    color: #fff;
`;