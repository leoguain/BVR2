import styled, {css} from 'styled-components'

export const Container = styled.div`
    min-height: 70vh;
    display: flex;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    align-items:top;
    justify-content: center;

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
}`;

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
        name: ${props => props.inputName || "CDN"};
        font-size: 16px;
        resize: none;
        max-length: 10;
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


export const PContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const PCard = styled.div`
        position: relative;
        width: 350px;
        height: 190px;
        background: #fff;
        transition: 0.5s;
        margin: 5px;

        &:hover {
                height: 450px;
        }

        .PLines {
                position: absolute;
                inset: 0;
                background: #000;
        }
`;

//linear-gradient(transparente,#45f3ff,#45f3ff,#45f3ff,transparent);

export const PLine = styled.div`
        position: absolute;
        inset: 0;
        background: #000;
        overflow: hidden;

        :before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 600px;
                height: 150px;
                background: linear-gradient(to bottom, transparent, #45f3ff, transparent);
                animation: animate 4s linear infinite;
        }

        :after{
                content: '';
                position: absolute;
                inset: 3px;
                background: #292929
        }

        @keyframes animate {
                0%
                {
                        transform: translate(-50%,-50%) rotate(0deg);
                }
                100%
                {
                        transform: translate(-50%,-50%) rotate(360deg);
                }

        }

        &:hover {
                border-color:white;
        }

`;

export const PImgBox = styled.div`
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 150px;
        background: #000;
        transition: 0.5s;
        z-index: 10;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        

        :before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 600px;
                height: 150px;
                background: linear-gradient(to bottom, transparent, #ff3c7b, transparent);
                animation: animate2 6s linear infinite;
        }

        :after{
                content: '';
                position: absolute;
                inset: 3px;
                background: #292929
        }

        @keyframes animate2 {
                0%
                {
                        transform: translate(-50%,-50%) rotate(360deg);
                }
                100%
                {
                        transform: translate(-50%,-50%) rotate(0deg);
                }
        }       

        :hover {
                width: 250px;
                height: 250px;
        }

        imgBVR{
                position: absolute;
                top: 10px;
                left: 10px;
                z-index: 1;
                width: calc(100%-20px);
                height: calc(100%-20px);
                filter: grayscale(1);
        }

`;


export const PImage = styled.img`
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1;
        width: 130px;
        height: 130px;
        filter: grayscale(1);
        transition: 0.5s;

        &:hover {
                width: 230px;
                height: 230px;
                filter: none;
        }
`;

export const PConteudo = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items:flex-end;
        overflow: hidden;
`;

export const PDetalhes = styled.div`
        padding: 40px;
        text-align: center;
        width: 100%;
        transition: 0.5s;
        transform: translateY(110px);

        &:hover{
                transform: translateY(0px);
        }
`;

export const PDados = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 20px 0;

`;

export const BVR_h2 = styled.h2`
        font-size: 1.25em;
        font-weight: 600;
        color: #45f3ff;
        line-height: 1.2em;
`;

export const BVR_span = styled.span`
        font-size: 0.75em;
        font-weight: 500;
        color: #fff;
        line-height: 1.2em;
`;

export const BVR_h3 = styled.h3`
        font-size: 1em;
        font-weight: 600;
        color: #45f3ff;
        line-height: 1.2em;
`;