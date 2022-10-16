import styled, {css} from 'styled-components'

export const Container = styled.div`
    min-height: 70vh;
    display: flex;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    align-items:top;
    justify-content:space-between;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
`;

export const HPColumn = styled.div`
        background-color: ${props => props.inputColor || "none"};
        border-radius: 10px;
        min-height: 70vh;
        display: flex;
        font-size: calc(10px + 2vmin);
        color: darkgray;
        padding: 20px;
        align-items:top;
        flex-direction: column;
        justify-content:center;
`;

export const HPTitle = styled.div`
        display: flex;
        background-color: #bc0202;
        height: 25px;
        color: white;
        border-radius: 10px 10px 0px 0px;
        font-size: 16px;
        align-items:center;
        justify-content:center;
`;

export const HPBottom = styled.div`
        display: flex;
        background-color: #bc0202;
        height: 25px;
        color: white;
        border-radius: 0px 0px 10px 10px;
        font-size: 16px;
        align-items:center;
        justify-content:center;
`;

export const LastVideo = styled.div`
    display: flex;
    background-color: black;
    
    color: white;
    border-radius:10px;
    width: 420px;
    height:300px;
    flex-direction: column;

    justify-content: center;

`;
