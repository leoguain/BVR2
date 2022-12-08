import React from 'react';
import {Link } from "react-router-dom";
import { BVR_a, BVR_h2, BVR_h3, Container, ContainerNoticia, DateBox, ContentBox, TitleBox, TextBox, LinkBox, EditButton } from './styles.js';

export default function Noticia(props) {

    return (
        <Container>
            <ContainerNoticia key={props.id}>
                <DateBox>
                    {props.date}
                </DateBox>
                <ContentBox>
                    <TitleBox>
                        {props.title}
                    </TitleBox>
                    <TextBox>
                        {props.text}
                    </TextBox>
                    <LinkBox>
                         <BVR_a href={props.url} target="_blank" rel="noreferrer">
                             Veja mais
                         </BVR_a>
                    </LinkBox> 
                    
                </ContentBox>
            </ContainerNoticia>
        </Container>
    );
}

/*
<Link to="/cdnoticias">
                        <EditButton>Editar</EditButton>
                    </Link>
                    */