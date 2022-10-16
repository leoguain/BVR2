import styled from 'styled-components'

export const Container = styled.div`
    background-color: black;
    color: darkgray;
    font-size: 14px;
    padding: 25px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width:700px){
        font-size: 10px;
        
    }`

export const LinkContainer = styled.div`
    display: flex;
    color: darkgray;
    font-size: 14px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
`