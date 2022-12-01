import styled, {css} from 'styled-components'


export const MainContainer = styled.div`
    display: flex;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    width: 840px;
    background-color: #000;
    flex-direction: column;
    border-radius: 5px;
    align-items:center;
    justify-content:right;
    margin-top: ${props => props.inputMargin || "0px"};
    padding:5px;

    @media(max-width: 768px) {
        width: 450px;
        display: flex;
        flex-direction: column;
    }
`;

export const SubItemContainer = styled.div`
    display: flex;
    background-color: #000;
    border-radius: 5px;
    align-items:center;
    gap: 5px;
    margin: 5px;
    padding:5px;

    @media(max-width: 768px) {
        width: 430px;
        display: flex;
        flex-direction: row;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    width: ${props => props.inputWidth || "200px"};
    height: ${props => props.inputHeight || "70px"};
    flex-direction: column;
    border-radius: 5px;
    justify-content:center;
    align-items:center;
    

    background-color: ${props => props.inputColor || "black"};

    @media(max-width: 768px) {
        width: 150px;
    }
`;

export const RecordeContainer = styled.div`
    display: flex;
    background-color: purple;
    border-radius: 5px;
    align-items:center;
    align-self:center;
`;

export const BVR_h2 = styled.h2`
        font-size: 1.25em;
        font-weight: 600;
        color: #fff;
`;

export const BVR_h3 = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    color: #fff;


    @media(max-width: 768px) {
        font-size: 0.8em;
        font-weight: 400;
        color: #fff;
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