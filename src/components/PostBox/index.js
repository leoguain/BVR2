import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import { NoticiaProps, noticias as noticiasArray } from '../../noticias';
import { Container, ContainerBox, ImageBox, ContentBox, TitleBox, TextBox, DateBox, LinkBox, ContainerNoticia, CButton } from './styles';

const PostBox = ({sizeType, accessType}) => {

    const [noticiasDb, setNoticiasDb] = useState([{}]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getnews").then((response) => {
            setNoticiasDb(response.data);
            console.log(response.data);
            });
    },[]);

    if (sizeType === "NewsPage") {

        if (accessType === "adm") {
            
            return(

                <Container>
                   {typeof noticiasDb !== "undefined" && 
                        noticiasDb.map((noticia) => {
                            <ContainerNoticia key={noticia.not_IdNoticia_int}>
                                <DateBox>
                                    {noticia.not_DataNoticia_str} 
                                </DateBox>
                                <ContentBox>
                                    <TitleBox>
                                        {noticia.not_TituloNoticia_str};  
                                    </TitleBox>
                                    <TextBox>
                                        {noticia.not_TextoNoticia_str}
                                    </TextBox>
                                        <LinkBox>
                                            <a style={{color:"pink", }} href={noticia.not_URLNoticia_str} target="_blank" rel="noreferrer">
                                                Acompanhe aqui
                                            </a>
                                        </LinkBox>
                                        <CButton>Editar</CButton>  
                                </ContentBox>
                            </ContainerNoticia>
                        })
                    }
                </Container>
            )

        } else {

            return(

                <Container>
                    {noticiasArray.map((noticia) => (
                        <ContainerNoticia key={noticia.id}>
                            <DateBox>
                                {noticia.data} 
                            </DateBox>
                            <ContentBox>
                                <TitleBox>
                                    {noticia.title}  
                                </TitleBox>
                                <TextBox>
                                    {noticia.texto}
                                </TextBox>
                                    <LinkBox>
                                        <a style={{color:"pink", }} href={noticia.url} target="_blank" rel="noreferrer">
                                            Acompanhe aqui
                                        </a>
                                    </LinkBox>
                            </ContentBox>
                        </ContainerNoticia>
                    ))}
                </Container>
            )
        }

    } else {

        return(

            <ContainerBox>
                {noticiasArray.map((noticia) => (
                    <div key={noticia.id}>
                        <DateBox>
                            {noticia.data} 
                        </DateBox>
                        <ContentBox>
                            <TitleBox>
                                {noticia.title}  
                            </TitleBox>
                            <TextBox>
                                {noticia.texto}
                            </TextBox>
                                <LinkBox>
                                    <a style={{color:"pink", justifySelf:"right", hovercolor:"white",}} href={noticia.url} target="_blank" rel="noreferrer">
                                        Acompanhe aqui
                                    </a>
                                </LinkBox>
                        </ContentBox>
                    </div>
                ))}
            </ContainerBox>
        )

    };

    
};

export default PostBox;