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
    color: #45f3ff;
    margin-left: 10px;
    cursor: pointer;

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
    overflow: auto;
    flex-flow: row wrap;
    align-self: center;
    justify-content: center;

    @media(max-width: 768px) {
        max-height: none;
`;

export const ContainerBox = styled.div`
    border-radius:10px;
    flex-direction: column;
    align-items: center;
    align-self: center;
    color: white;
    width: 360px;
    height:220px;
    padding: 10px;
    overflow: auto;

    @media(max-width: 768px) {
        width: 360px
    }
`;

export const ContainerNoticia = styled.div`
    justify-content: center;
    margin: 5px;

    @media(max-width: 768px) {
        width: 360px
    }
`;

export const ImageBox = styled.div `
    background-color: green;
    align-itens: center;
    justify-content: center;
    width: 100px;
    height:100px;
`;

export const DateBox = styled.div `
    background-color: #149B49;
    border-radius: 10px 20px 0px 0px;
    align-itens: center;
    justify-content: center;
    margin-left:10px;
    width: 150px;
    height:20px;
    font-size: 16px;
`;

export const ContentBox = styled.div `

    border-radius:10px;
    flex-direction: column;
    background-color: #5b5b5b;
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
    margin: 2px;
    border-bottom: solid 2px white;
`;

export const LinkBox = styled.div`
    height:25px;
    font-size: 16px;
    
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