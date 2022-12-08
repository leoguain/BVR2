import styled from 'styled-components'


//url(${banner1});
//border-radius:10px;

const Container = styled.div`
    background: url(${props => props.inputURL || "none"});
    background-size: cover;
    display: flex;
    width: 400px;
    height:500px;
    align-self:center;
`;

export default Container;