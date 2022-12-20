import styled, {css} from 'styled-components'

//background: url(${fundoCarbon});
export const BVR_h2 = styled.h2`
        font-size: 1.25em;
        font-weight: 600;
        color: ${props => props.inputFontColor || "white"};
        line-height: 1.3em;
`;

export const BVR_h3 = styled.h3`
    font-size: 1em;
    font-weight: 600;
    color: ${props => props.inputFontColor || "white"};
    line-height: 1.1em;
`;

export const BVR_span = styled.span`
    font-size: 0.8em;
    line-height: 0.9em;
`;


export const Container = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    margin: 10px;

    @media(max-width: 768px) {
        display: flex;
    }
`;

export const Card = styled.div`
        display:flex;
        width: 260px;
        min-height: 50vh;
        background: #1F1F1F;
        border-radius: 10px;  
        justify-content: center;
        padding-bottom: 20px;

        border : solid 3px ;
        border-color: ${props => props.inputColor || "white"};
        
`;

/*
.PLines {
                position: absolute;
                inset: 0;
                background: #000;
        }*/

export const BorderLine = styled.div`
        position: absolute;
        inset: 0;
        background: #000;
        overflow: hidden;
        border-radius: 10px;

        :before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 600px;
                height: 150px;
                animation: animate 4s linear infinite;

                ${props =>props.cSS && css`
                    background: linear-gradient(to bottom, transparent, white, transparent);
                `};
                ${props =>props.cS && css`
                    background: linear-gradient(to bottom, transparent, #049dc8, transparent);
                `};
                ${props =>props.cA && css`
                    background: linear-gradient(to bottom, transparent, #00a85a, transparent);
                `};
                ${props =>props.cB && css`
                    background: linear-gradient(to bottom, transparent, #ec3237, transparent);
                `};
        }

        :after{
                content: '';
                position: absolute;
                inset: 3px;
                background: #1F1F1F;
                border-radius: 10px;

               
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

        };


        

`;

export const Content = styled.div`
        display: flex;
        flex-flow:column;
`;

export const Info = styled.div`
    display:flex;
    width: 240px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Line = styled.div`
    display:flex;
    background-color: ${props => props.inputColor || "none"};
    border-bottom: ${props => props.inputBottomBorder || "solid 1px white"}; 
    border-radius: ${props => props.inputBorder || "0px"};
    width: 220px;
    height:25px;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Label = styled.div`
    display:flex;
    height:30px;
    align-items: center;
    
`;







