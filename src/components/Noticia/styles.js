import styled, {css} from 'styled-components'

export const BVR_h2 = styled.h2`
        font-size: 1.25em;
        font-weight: 600;
        color: #fff;
        line-height: 0.4em;
        margin: 10px;
`;

export const BVR_h3 = styled.h3`
    font-size: 1em;
    font-weight: 600;
    color: #fff;
    line-height: 0.1em;
    margin: 10px;
`;

export const BVR_a = styled.a`
    color: #fff;
    cursor: pointer;
    text-decoration: none;

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



export const Container = styled.div`
    display: flex;
    max-height: 500px;
    padding: 10px;
    flex-flow: row wrap;
    align-self: center;
    justify-content: center;

    @media(max-width: 768px) {
        max-height: none;
    }
`;

export const ContainerBox = styled.div`
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 360px;
    height:230px;
    padding: 10px;
    margin-bottom: 30px;
    overflow: auto;

    @media(max-width: 768px) {
        margin-top: 50px;
        width: 360px
    }
`;
/*
    background-color: #2B2B2B;
    border: solid 1px #149B49;*/

export const ContainerNoticia = styled.div`
    justify-content: center;
    

    @media(max-width: 768px) {
        width: 360px
    }
`;

export const ImageBox = styled.div `
    background-color: green;
    justify-content: center;
    width: 100px;
    height:100px;
`;

//background-color: #149B49;
export const DateBox = styled.div `
    background-image: linear-gradient(to right,#149B49,#056A2D);
    
    border-radius: 10px 20px 0px 0px;
    align-items: center;
    justify-content: center;
    margin-left:10px;
    width: 150px;
    height:20px;
    font-size: 16px;
`;

export const ContentBox = styled.div `

    border-radius:10px;
    flex-direction: column;
    background-image: linear-gradient(to right,#272727, #000);
    align-self: center;
    width: 330px;
    margin-bottom: 10px;
    padding: 5px;
    
`;

export const TitleBox = styled.div `
    height:25px;
    align-self: center;
    font-size: 16px;
    border-bottom: solid 2px white;
`;

export const TextBox = styled.div `
    min-height: 60px;
    font-size: 14px;
    margin: 5px;
    text-align: justify;
`;

export const LinkBox = styled.div`
    height:25px;
    font-size: 18px;
    text-decoration: none;
    background-image: linear-gradient(to right,#149B49,#056A2D);
    border: solid 2px #056A2D;
    border-radius: 0px 0px 10px 10px;

    &:hover{

        border: solid 2px #22AF5A;
    }
`;

export const EditButton = styled.button`
    background: #149B49;
    font-size: 1em;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: solid #149B49 3px;
    color: #fff;
    cursor: pointer;

    :hover{
            border: solid #fff 2px;
    }
`;