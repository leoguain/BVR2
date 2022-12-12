import styled, {css} from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items:center;
    margin: 5px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: 15px;
    }
`;

export const BVR_h2 = styled.h2`
        font-size: 1.25em;
        font-weight: 600;
        color: #fff;
        line-height: 1.2em;
        margin: 10px;
`;

export const BVR_h3 = styled.h3`
    font-size: 1em;
    font-weight: 400;
    color: #fff;
    line-height: 0.1em;
    margin: 10px;
`;

export const BVR_a = styled.a`
    color: #45f3ff;
    margin-left: 10px;

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