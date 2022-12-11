import React from 'react';
import { BVR_a, Container, BVR_h2, BVR_h3 } from './styles.js';

export default function Documento(props) {

    //console.log("{\ndoc_IdDocumento_int:'',\ndoc_NomeDocumento_str:'"+props.nome+"',\ndoc_TipoDocumento_str:'"+props.tipo+"',\ndoc_UrlDocumento_str:'"+props.url+"',\n},")

    return (
        <Container>
            <BVR_h3>{props.tipo}</BVR_h3>
            <BVR_h2>{props.nome}</BVR_h2>
            <BVR_a href={props.url} target="_blank" rel="noreferrer">Arquivo PDF</BVR_a>
        </Container>
    );
}