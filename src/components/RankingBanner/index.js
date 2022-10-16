import React from 'react';

import logoCampeonato from '../Assets/LogosCampeonatos/logoSilviaKupRed2022.png';
import logoBvgtv from '../Assets/BVGtv logo.png';

import CarregaTabela from '../CarregaTabela';
import { Container, LinhaRanking, TopoRanking, CelulaRanking, LinhaPiloto } from './styles';

const geralCampeonatoSilvia = [
    {pos: '01', nome:'Gustavo Viaro', id: 'Gustavo Viaro', e1:'30', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'30'},
    {pos: '02', nome:'João Paulo Facci', id: 'JPFACCI_SPEEDBR', e1:'25', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'25'},
    {pos: '03', nome:'Marco Antônio Soares', id: 'CRS_BillyBizzuca', e1:'21', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'21'},
    {pos: '04', nome:'Fabiano Furini', id: 'FURINI_SPEEDBR', e1:'18', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'18'},
    {pos: '05', nome:'Gerson Garcia', id: 'Gersão Hamilton', e1:'15', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'15'},
    {pos: '06', nome:'Fábian Viegas', id: 'FABIAN_SPEEDBR', e1:'12', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'12'},
    {pos: '07', nome:'Ednaldo Martins', id: 'KMZ_Naldo', e1:'10', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'10'},
    {pos: '08', nome:'Yuri Demetrius', id: 'KMZ_YuriGrush', e1:'08', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'08'},
    {pos: '09', nome:'Thiago Alves', id: 'Thiago Wolf', e1:'07', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'07'},
    {pos: '10', nome:'Cláudio Faria', id: 'Claudio Faria', e1:'06', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'06'},
    {pos: '11', nome:'Kelvin Carvalho', id: 'KMZ-kelvin.C', e1:'05', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'05'},
    {pos: '12', nome:'Carlos Celso de Godoy', id: 'MF2_TattoBrown', e1:'04', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'04'},
    {pos: '13', nome:'Cristiano Dutra', id: 'CCGTBR_Cristiano', e1:'03', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'03'},
    {pos: '14', nome:'Cléber Carlos', id: 'CLEBER_SPEEDBR', e1:'01', e2:'0', e3:'0', e4:'0', e5: '0', e6:'0', e7:'0', e8:'0', penal:'0', total:'01'},
];

const RankingBanner = () => {
    return (
        <Container silviaKup >
                <TopoRanking >
                    <div>
                        <img src={logoCampeonato} alt='Logo Campeonato' width='80px'/>
                    </div>
                    <div>
                        Nissan Silvia KUP
                        RANKING GERAL
                    </div>
                    <div>
                        <img src={logoBvgtv} alt='Logo Campeonato' width='70px'/>
                    </div>
                </TopoRanking>
                

                {geralCampeonatoSilvia.map((piloto) => (
                    <LinhaRanking>
                        <CelulaRanking silviaKup>
                            {piloto.pos}
                        </CelulaRanking>
                        <LinhaPiloto silviaKup>
                            {piloto.nome}
                        </LinhaPiloto>
                        <CelulaRanking silviaKup inputBorder="3px 3px 10px 3px">
                            {piloto.total}    
                        </CelulaRanking>
                    </LinhaRanking>
                ))}
        </Container>
    )
}

export default RankingBanner;