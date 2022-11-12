import React from 'react';
import { NoticiaProps, noticias } from '../../noticias';
import { Container, ContainerBox, ImageBox, ContentBox, TitleBox, TextBox, DateBox, LinkBox, ContainerNoticia } from './styles';


const PostBox = ({sizeType}) => {

    if (sizeType === "NewsPage") {

        return(

            <Container>
                {noticias.map((noticia) => (
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

    } else {

        return(

            <ContainerBox>
                {noticias.map((noticia) => (
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