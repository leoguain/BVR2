import styled, {css} from 'styled-components'

export const ContainerCentral = styled.div`
    display:flex;
    background-color: ${props => props.inputColor || "black"};
    border-radius: 10px;
    align-self: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding:10px;
    margin: 10px;
    gap:20px;

    @media(max-width: 768px) {
        flex-direction: column;
        width: 450px;
        
    }
`;

export const ContainerButtons = styled.div`
    display:flex;
    width: 900px;
    gap: 20px;
    background-color: ${props => props.inputColor || "black"};

    align-items: top;
    flex-flow: row wrap;
    justify-content: center;
    
    @media(max-width: 768px) {
        width: 400px;
    }
`;

export const ContainerTabela = styled.div`
    display:flex;
    background-color: ${props => props.inputColor || "black"};

    align-items: top;
    align-self: center;
    flex-flow: row wrap;
    justify-content: center;

    @media(max-width: 768px) {
        width: 400px;
    }
`;
//background: url(${logoSilviaKup2022}); 
export const CButton = styled.button`
    
    background: url(${props => props.inputURL || "none"}); 

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: 90px;
    
    border: ${props => props.inputBorder || "solid 2px white"};
    border-radius: 10px;
    width: 110px;
    height:150px;
    align-items: center;
    justify-content: center;

    padding: 5px;
    display: flex;
    cursor: pointer;

    &:hover {
        border:solid 3px lightgreen;
    }
    
    &:focus {
        border:solid 3px white;
    }
    
    &:active{
        background-color: #282c34;
        border:solid 3px green;
    }

    @media(max-width: 768px) {
        width: 100px;
        height:120px;
        margin: 2px;
    }
`;
