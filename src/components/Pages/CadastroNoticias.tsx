import React, {useState, useEffect} from 'react';
import { format } from 'date-fns'
import Axios from 'axios';

import { CDButton, CDContainer, CDContainerCampo, CDInput, CDInputTexto, CDLabel, CDMain, Container } from './styles.js';
import axios from 'axios';

const Noticias = () => {

    const [tituloNoticia, setTituloNoticia] = useState(''); 
    const [dataNoticia, setDataNoticia] = useState(Date.now); 
    const [textoNoticia, setTextoNoticia] = useState(''); 
    const [imagemNoticia, setImagemNoticia] = useState('../Assets/logo.jpg'); 
    const [urlNoticia, setUrlNoticia] = useState(''); 

    const limparTela = () => {

        setTituloNoticia('');
        setTextoNoticia('');
        setUrlNoticia('');
    }

    const enviarNoticia = () => {
        
         let today =  format(new Date(), 'dd/MM/yyyy')
        
        console.log(tituloNoticia);
        console.log(today);
        console.log(textoNoticia);
        console.log(imagemNoticia);
        console.log(urlNoticia);

        Axios.post("http://localhost:3001/newspost", {title: tituloNoticia, 
                                                        date: today, 
                                                        text: textoNoticia, 
                                                        image: imagemNoticia, 
                                                        url: urlNoticia}).then(()=>{
                                                            alert("Enviado com sucesso");
                                                            
                                                            setTituloNoticia('');
                                                            setTextoNoticia('');
                                                            setUrlNoticia('');
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
                    <CDButton onClick={limparTela}>Limpar</CDButton>
                    <CDButton onClick={enviarNoticia}>Salvar</CDButton>
                </CDContainerCampo> 

            </CDContainer>
            <CDContainer>
                <p>Editar notícias</p>

            </CDContainer>

        </CDMain>
        
    )
}

export default Noticias;