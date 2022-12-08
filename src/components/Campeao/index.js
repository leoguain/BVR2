import React from 'react';
import { BannerCampeao } from './styles.js';

export default function Campeao(props) {

const urlFoto = "/champions/" + props.url;

    return (
        <BannerCampeao inputURL={urlFoto}/> 
    );
}