import React from 'react';
import { BannerCampeao } from './styles.js';

export default function Campeao(props) {

    return (
        <BannerCampeao key={props.id} inputURL={props.url}/> 
    );
}