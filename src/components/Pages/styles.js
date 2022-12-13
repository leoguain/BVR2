import styled, {css} from 'styled-components'

export const BVR_h1 = styled.h1`
        font-size: 1.75em;
        font-weight: 600;
        color: #fff;
        line-height: 1.9em;
`;

export const BVR_h2 = styled.h2`
        font-size: 1.25em;
        font-weight: 600;
        color: #fff;
        line-height: 1.4em;
`;

export const BVR_span = styled.span`
        font-size: 0.75em;
        font-weight: 500;
        color: #fff;
        line-height: 1.1em;
`;

export const BVR_h3 = styled.h3`
        font-size: 1em;
        font-weight: 400;
        color: #fff;
        line-height: 1.2em;

        @media(max-width: 768px) {
                font-size: 0.8em;
                line-height: 1em;
        }
`;

export const BVR_Link = styled.link`

`;

export const BVR_Button = styled.button`
        background: #149B49;
        font-size: 1em;
        width: 200px;
        height: 40px;
        border-radius: 5px;
        border: solid #149B49 3px;
        color: #fff;
        cursor: pointer;

        :hover{
                border: solid #fff 3px;
        }
`;

export const MainContainerV = styled.div`
        display: flex;
        flex-direction: column;
        margin: 30px;
`;

export const MainContainerH = styled.div`
    min-height: 70vh;
    display: flex;
    color: white;
    padding: 20px;
    align-items:top;
    justify-content: center;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
        
`;

export const CentralContainerV = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items:top;
    align-self:center;
    justify-content: center;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
        
`;

export const CentralContainerH = styled.div`
        display: flex;
        flex-flow: row wrap;
        flex-direction: row;
        align-self: center;
        justify-content: center;

        ${props =>props.limitedContainer && css`
                max-height: 500px;
                overflow: auto;
        `}

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
        
`;

export const ContainerCarteiras = styled.div`
        display: flex;
        width: 1000px;
        padding: 10px;
        flex-direction: row;
        align-self: center;
        justify-content: center;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
        
`;

export const ContainerCampeoes = styled.div`
    width: 1000px;
    min-height: 70vh;
    display: flex;
    flex-flow: row wrap;
    align-self:center;
    justify-content: center;

    @media(max-width: 768px) {
        display: flex;
        width: 500px;
        flex-direction: column;
        justify-content: center;
    }
        
`;

export const ContainerPilotos = styled.div`
    width: 1000px;
    min-height: 70vh;
    display: flex;
    flex-flow: row wrap;
    align-self:center;
    justify-content: center;

    @media(max-width: 768px) {
        display: flex;
        width: 500px;
        flex-direction: column;
        justify-content: center;
    }    
`;

export const Container = styled.div`
    min-height: 70vh;
    display: flex;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    align-items:top;
    justify-content: center;
    gap: 30px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }      
`;

export const HPColumn = styled.div`
        display: flex;
        min-height: 60vh;
        align-items:top;
        flex-direction: column;
        justify-content: center;
`;

export const HPTitle = styled.div`
        display: flex;
        background-color: #149B49;
        height: 25px;
        color: white;
        border-radius: 10px 10px 0px 0px;
        font-size: 16px;
        align-items:center;
        justify-content:center;
`;

export const HPBottom = styled.div`
        display: flex;
        background-color: #149B49;
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

export const CDMain = styled.div`
        display: flex;
        justify-content: center;
`;

export const CDContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    color: white;
    width: 600px;
    margin: 20px;

    @media(max-width: 768px) {
        width: 90%;
    }
`;

export const CDContainerCampo = styled.div`
        display:flex;
        justify-content: right;
        align-items:center;
        border-radius: 10px;
`;

export const CDLabel = styled.label`
        display: flex;
        font-size: 16px;
        margin: 5px;
`;

export const CDInput = styled.input`
        width: 500px;
        height: 30px;
        font-size: 16px;
        margin: 5px;
        border-radius: 5px;

        @media(max-width: 768px) {
                display: flex;
                width: 80%;
        }
`;

export const CDInputTexto = styled.textarea`
        font-size: 16px;
        resize: none;
        max-lines: 5;
        width: 500px;
        height: 150px;
        justify-content:top;
        margin: 5px;
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;

        @media(max-width: 768px) {
                display: flex;
                width: 80%;
        }
`;

export const CDButton = styled.button`
        background-color: purple;
        width: 80px;
        height: 30px;
        color: white;
        border-radius: 5px;
        font-size: 16px;
        align-items:center;
        justify-content:center;
        margin: 5px;
        cursor: pointer;


        &:hover {
                border-color:white;
        }

`;