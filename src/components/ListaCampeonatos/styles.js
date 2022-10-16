
import styled, {css} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    color: white;
    border-radius:10px;
    min-height: 70vh;
    justify-content: center;

    @media(max-width: 700px) {
        width: 100%
        flex-direction: column;
    }`

export const CColumn = styled.div`
    display:flex;
    background-color: ${props => props.inputColor || "yellow"};
    border-radius:10px;
    align-self: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
`

export const CHeader = styled.div`
    display:flex;
    background-color: black;
    border-radius: 10px 10px 0px 0px;
    height: 80px;
    align-items: center;
    align-self: center;
    justify-content: center;
`

export const CData = styled.div`
    display:flex;
    background-color: ${props => props.inputColor || "orange"};
    border-radius: 0px 0px 10px 10px ;
    align-items: top;
    align-self: center;
    flex-flow: row wrap;
    justify-content: center;
    
    @media(max-width: 700px) {
        width: 500px
        flex-direction: column;
    }
`
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
    margin: 10px;
    padding: 5px;
    display: flex;
    cursor: pointer;

`;

export const Wrapper = styled.div`
  display: flex;

  &:hover {
    ${CButton} {
        border:solid 3px lightgreen;
    }
  }

  &:focus {
    ${CButton} {
        border:solid 3px white;
    }
  }

  &:active{
    ${CButton} {
        background-color: #282c34;
        border:solid 3px green;
    }
}`;
