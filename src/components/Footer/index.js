import React from 'react';
import instagramLogo from '../Assets/InstagramCinza.png';
import instagramHover from '../Assets/InstagramBranco.png';
import facebookLogo from '../Assets/FbCinza.png';
import emailLogo from '../Assets/EmailCinza.png';
import whatsLogo from '../Assets/WhatsCinza.png';
import youtubeLogo from '../Assets/YtCinza.png';

import { IconContext } from "react-icons";
import {FaFacebookSquare, FaInstagramSquare, FaWhatsapp,FaYoutube} from 'react-icons/fa';

import {Container, LinkContainer} from '../Styles/styles.js'

const Footer = () => {
    return (
        <Container >

                <p>Conheça a Brasil Virtual Racing:</p>

                <IconContext.Provider value={{ color: "#149B49", size: "3em"}}>
                    <LinkContainer>
                        <a href="https://facebook.com/ligabvr" target="_blank" rel="noreferrer">
                        <FaFacebookSquare/>
                        </a>
                        <a href="https://instagram.com/ligabvr" target="_blank" rel="noreferrer">
                        <FaInstagramSquare/>
                        </a>
                        <a href="https://chat.whatsapp.com/IzSEu4iFeq2DxmauUrfebh" target="_blank" rel="noreferrer">
                        <FaWhatsapp/>
                        </a>
                        <a href="https://youtube.com/c/bvgtv" target="_blank" rel="noreferrer">
                        <FaYoutube/>
                        </a>
                    </LinkContainer>
                </IconContext.Provider>

                <p>© Todos os direitos reservados - LG Team / Brasil Virtual Racing 2023</p>

        </Container>
    )
}
export default Footer;

//<img src={emailLogo} alt="logo E-mail" width='40px'/>

/*
<a href="https://facebook.com/ligabvr" target="_blank" rel="noreferrer">
                        <img src={facebookLogo} alt="logo Facebook" width='40px'/>
                    </a>
                    <a href="https://instagram.com/ligabvr" target="_blank" rel="noreferrer">
                        <img src={instagramLogo} hoverSrc ={instagramHover} alt="logo Instagram" width='40px'/>
                    </a>
                    <a href="https://chat.whatsapp.com/IzSEu4iFeq2DxmauUrfebh" target="_blank" rel="noreferrer">
                        <img src={whatsLogo} alt="logo Whatsapp" width= '40px' />
                    </a>
                    <a href="https://youtube.com/c/bvgtv" target="_blank" rel="noreferrer">
                        <img src={youtubeLogo} alt="logo Whatsapp" width= '40px' />
                    </a>
                    */