import React from 'react';
import { BVR_a, Container, BVR_h2, BVR_h3 } from './styles.js';

export default function Documento(props) {

    return (
        <Container>
            <BVR_h3>{props.tipo}</BVR_h3>
            <BVR_h2>{props.nome}</BVR_h2>
            <BVR_a href={props.url} target="_blank" rel="noreferrer">Arquivo PDF</BVR_a>
        </Container>
    );
}