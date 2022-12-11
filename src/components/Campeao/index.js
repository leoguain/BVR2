import { BannerCampeao } from './styles.js';

export default function Campeao(props) {

const urlFoto = "/champions/" + props.url;

    console.log("{\nidUrl:'',\nurlFoto:'"+urlFoto+",\n},")

    return (
        <BannerCampeao inputURL={urlFoto}/> 
    );
}