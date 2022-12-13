import styled from 'styled-components'

export const Container = styled.div`
    background-color: black;
    color: #149B49;
    font-size: 14px;
    font-weight: 600;
    padding: 25px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width:700px){
        font-size: 12px;
        
    }`

export const LinkContainer = styled.div`
    display: flex;
    color: #149B49;
    font-size: 14px;
    width: 250px;
    align-items: center;
    justify-content: space-between;
`