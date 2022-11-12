import React from 'react';
import instagramLogo from '../Assets/InstagramCinza.png';
import instagramHover from '../Assets/InstagramBranco.png';
import facebookLogo from '../Assets/FbCinza.png';
import emailLogo from '../Assets/EmailCinza.png';
import whatsLogo from '../Assets/WhatsCinza.png';
import youtubeLogo from '../Assets/YtCinza.png';


import {Container, LinkContainer} from '../Styles/styles.js'

const Rodape = () => {
    return (
        <Container >
                <LinkContainer>
                
    
                        <img src={emailLogo} alt="logo E-mail" width='40px'/>
       
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
                </LinkContainer>

                <p>© Todos os direitos reservados - LG Team / Brasil Virtual Racing 2023</p>

        </Container>
    )
}
export default Rodape;