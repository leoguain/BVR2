import styled, {css} from 'styled-components'

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
    }
`;

export const ContainerBox = styled.div`
    border-radius:10px;
    flex-direction: column;
    align-items: center;
    align-self: center;
    color: white;
    width: 360px;
    height:250px;
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
    justify-content: center;
    width: 100px;
    height:100px;
`;

export const DateBox = styled.div `
    background-color: #149B49;
    border-radius: 10px 20px 0px 0px;
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

export const CButton = styled.button`
    background-color: #bc0202;
    border-radius: 5px;
    color: #fff;
    border: solid 1px #bc0202;
    cursor: pointer;
    margin: 5px;
    align-self: right;

    :hover {
        border: solid 1px #fff;
    }
`;