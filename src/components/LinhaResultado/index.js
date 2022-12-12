import logoCampeonato from '../Assets/LogosCampeonatos/logoSilviaKupRed2022.png';
import logoBvgtv from '../Assets/BVGtv logo.png';

import {BVR_h2, BVR_h3, LinhaRanking, CelulaRanking, LinhaPiloto, TopoRanking, BVR_span} from './styles';

export function Cabecalho(props) {

    return (
        <TopoRanking >
            <div>
                <img src={logoCampeonato} alt='Logo Campeonato' width='80px'/>
            </div>
            <div>
                <BVR_h2 inputFontColor={props.corTxt}>{props.nomeCampeonato}<br></br>
                <BVR_span>{props.label}</BVR_span></BVR_h2>
            </div>
            <div>
                <img src={logoBvgtv} alt='Logo Campeonato' width='70px'/>
            </div>
        </TopoRanking>
    );

}

export function LinhaResultado(props) {

    //console.log("{\nnomeCampeonato:'"+ props.nomeCampeonato +"',\nano:'"+props.ano+"',\nlogoCampeonato:'"+props.logoCampeonato+"',\ncorBkg:'"+props.corBkg+"',\ncorHead:'"+props.corHead+"',\ncorRow:'"+props.corRow+"',\ncorTxt:'"+props.corTxt+"',\nIdPiloto:'"+props.key+"',\nnomePiloto:'"+props.nomePiloto+"',\nidPsn:'"+props.idPsn+"',\ntotalPontos:'"+props.totalPontos+"',\nposicao:'"+props.posicao+"',\n},")

    return (
        <LinhaRanking>
            <CelulaRanking inputColor={props.corHead} >
                {props.posicao}
            </CelulaRanking>
            <LinhaPiloto inputColor={props.corRow}>
                <BVR_h3 inputFontColor={props.corTxt}>{props.nomePiloto}</BVR_h3>    
            </LinhaPiloto>
            <CelulaRanking inputColor={props.corHead} inputBorder="1px 1px 8px 1px">
                {props.totalPontos}    
            </CelulaRanking>
        </LinhaRanking>
    );

}

