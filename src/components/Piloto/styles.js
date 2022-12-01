import styled, {css} from 'styled-components'

export const BVR_h1 = styled.h1`
        font-size: 2em;
        font-weight: 600;
        color: #45f3ff;
        line-height: 1em;
`;

export const BVR_h2 = styled.h2`
        font-size: 1.1em;
        font-weight: 600;
        color: #45f3ff;
        line-height: 1.4em;
`;

export const BVR_span = styled.span`
        font-size: 0.75em;
        font-weight: 500;
        color: #fff;
        line-height: 0.8em;
`;

export const BVR_h3 = styled.h3`
        font-size: 0.9em;
        font-weight: 400;
        color: #45f3ff;
        line-height: 1em;
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

//min-height: 100vh;
export const PContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh; 

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

//height: 280px;
export const PCard = styled.div`
        position: relative;
        width: 280px; 
        height: 180px;
        background: #fff;
        transition: 0.5s;
        margin: 5px;

        &:hover {
                height: 310px;
                
                .Ranking{
                        transform: translateY(40px);
                        transform: translateX(15px);
                }

                .ImgBox{
                        width: 180px;
                        height: 180px;
                        left: 35%;
                        img {
                                width: 160px;
                                height: 160px;
                                filter: none;
                        }
                }
                .Details{
                        transform: translateY(0px);
                }
                

        }

        .PLines {
                position: absolute;
                inset: 0;
                background: #000;
        }
`;

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

`;

export const PImgBox = styled.div`
        position: absolute;
        top: -50px;
        left: 30%;
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
`;

export const PRanking = styled.div`
        position: absolute;
        left: 185px;
        transition: 0.5s;
`;

export const PConteudo = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
        transition: 0.5s;
`;

//background-color: red;
export const PDetalhes = styled.div`
        padding: 15px;
        justify-content: space-around;
        align-items:center;
        width: 100%;
        transition: 0.5s;
        transform: translateY(100px);
`;

export const PDados = styled.div`
        display: flex;
        justify-content: space-around;
        align-items:top;

        flex-wrap: wrap;
        align-content: flex-start;
        transition: 0.5s;
`;

export const PBox = styled.div`
        display: flex;
        justify-content: space-around;
        align-items:top;
        gap:10px;

        flex-wrap: wrap;
        align-content: center;
        transition: 0.5s;
`;

export const PPosicoes = styled.div`
        display: flex;
        gap:10px;
        flex-direction: column;
        height: 100px;
        flex-wrap: wrap;
        align-content: center;
        transition: 0.5s;

`;


/*flex-flow: row wrap;
justify-content: space-around;
align-items:center;*/
export const PPosicao = styled.div`
        display: flex;
        height: 20px;
        justify-content: space-around;
        transition: 0.5s;
`;


