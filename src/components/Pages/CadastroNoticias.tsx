import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import { CDButton, CDContainer, CDContainerCampo, CDInput, CDInputTexto, CDLabel, CDMain, Container } from './styles.js';
import axios from 'axios';

const Noticias = () => {

    const [tituloNoticia, setTituloNoticia] = useState(''); 
    const [dataNoticia, setDataNoticia] = useState('30/10/2022'); 
    const [textoNoticia, setTextoNoticia] = useState(''); 
    const [imagemNoticia, setImagemNoticia] = useState('../Assets/logo.jpg'); 
    const [urlNoticia, setUrlNoticia] = useState(''); 

    const enviarNoticia = () => {

        console.log(urlNoticia);

        Axios.post("http://localhost:3001/api/insert", {tituloNot: tituloNoticia, 
                                                        dataNot: dataNoticia, 
                                                        textoNot:textoNoticia, 
                                                        imgNot: imagemNoticia, 
                                                        urlNot: urlNoticia}).then(()=>{
                                                            alert("Enviado com sucesso");
                                                        });
    }

    //Axios.get("http://localhost:3001/api/getData")

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