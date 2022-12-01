import React, {useState,useEffect} from 'react';
import {Link } from "react-router-dom";
import  Axios from 'axios';

import Noticia from '../Noticia/index.js';

import { MainContainerV, BVR_h2, BVR_h3, BVR_Button, BVR_Link, CentralContainerH } from './styles.js';

type NoticiaProps = {
    not_IdNoticia_int: number
    not_TituloNoticia_str: string
    not_DataNoticia_str: string
    not_TextoNoticia_str: string
    not_ImagemNoticia_str: string
    not_URLNoticia_str: string
}

const AdmNoticias = () => {

    const posicao = 0;
    const [noticias, setNoticias] = useState<NoticiaProps[]>([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getnews").then((response) => {
            setNoticias(response.data);
            });
    },[]);
    

    return (
        <MainContainerV>
            <BVR_h2>Documentos</BVR_h2>
            <BVR_h3>Adicione novas notícias, ou edite as já postadas.</BVR_h3><br></br>

            <Link to="/cdnoticias">
                <BVR_Button>+ Adicionar Notícia</BVR_Button>
            </Link>
            
            <CentralContainerH>
                {noticias.map(({not_IdNoticia_int,
                                not_TituloNoticia_str,
                                not_DataNoticia_str,
                                not_TextoNoticia_str,
                                not_ImagemNoticia_str,
                                not_URLNoticia_str})=>(
                              <Noticia
                                key={not_IdNoticia_int}
                                listNot={noticias}
                                SetListNot={setNoticias}
                                id={not_IdNoticia_int}
                                title={not_TituloNoticia_str}
                                date={not_DataNoticia_str}
                                text={not_TextoNoticia_str}
                                image={not_ImagemNoticia_str}
                                url={not_URLNoticia_str}
                                ></Noticia>))}
            </CentralContainerH>
        </MainContainerV>
    )
}

export default AdmNoticias;