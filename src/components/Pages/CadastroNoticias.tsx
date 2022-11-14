import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import { CDButton, CDContainer, CDContainerCampo, CDInput, CDInputTexto, CDLabel, CDMain, Container } from './styles.js';
import axios from 'axios';

const Noticias = () => {

    const [tituloNoticia, setTituloNoticia] = useState(''); 
    const [dataNoticia, setDataNoticia] = useState('14/11/2022'); 
    const [textoNoticia, setTextoNoticia] = useState(''); 
    const [imagemNoticia, setImagemNoticia] = useState('../Assets/logo.jpg'); 
    const [urlNoticia, setUrlNoticia] = useState(''); 

    const enviarNoticia = () => {

        console.log(tituloNoticia);
        console.log(dataNoticia);
        console.log(textoNoticia);
        console.log(imagemNoticia);
        console.log(urlNoticia);

        Axios.post("http://localhost:3001/newspost", {tituloNot: tituloNoticia, 
                                                        dataNot: dataNoticia, 
                                                        textoNot: textoNoticia, 
                                                        imageNot: imagemNoticia, 
                                                        urlNot: urlNoticia}).then(()=>{
                                                            alert("Enviado com sucesso");
                                                        });
    }

    return (
        
        
        <CDMain>
            <CDContainer>

                <p>Cadastro de notícias</p>

                <CDContainerCampo>
                    <CDLabel>Título</CDLabel>
                    <CDInput defaultValue="@título" 
                             type="text" maxLength={35} 
                             name="titulo"
                             onChange={(e) => {
                                setTituloNoticia(e.target.value)
                             }}/>
                </CDContainerCampo>

                <CDContainerCampo>
                    <CDLabel>Texto</CDLabel>
                    <CDInputTexto defaultValue="@texto" 
                                  maxLength={200} 
                                  name="texto"
                                  onChange={(e) => {
                                    setTextoNoticia(e.target.value)
                                  }}/>
                </CDContainerCampo>

                <CDContainerCampo>
                    <CDLabel>URL</CDLabel>
                    <CDInput defaultValue="@url" 
                             type="text" 
                             maxLength={100} 
                             name="url"
                             onChange={(e) => {
                                setUrlNoticia(e.target.value)
                             }}/>
                </CDContainerCampo>

                <CDContainerCampo>
                    <CDButton>Limpar</CDButton>
                    <CDButton onClick={enviarNoticia}>Salvar</CDButton>
                </CDContainerCampo> 

            </CDContainer>

        </CDMain>
        
    )
}

export default Noticias;