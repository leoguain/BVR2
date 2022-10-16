import React from 'react';

import logoCampeonato from '../Assets/LogosCampeonatos/logoRedware2021.png';
import logoBvgtv from '../Assets/BVG_logo_branco.png';

import CarregaTabela from '../CarregaTabela';
import { Container, LinhaRanking, TopoRanking, CelulaRanking, CelulaHeader, LinhaPiloto } from './styles';


const pilotos = [
    {pos: '01', nome:'Leonardo Guain', id: 'leoguain', e1:'1', e2:'2', e3:'3', e4:'4', e5: '5', e6:'6', e7:'7', e8:'8', penal:'9', total:'27'},
    {pos: '02', nome:'JP Facci', id: 'JPFACCI_SPEEDBR', e1:'3', e2:'3', e3:'3', e4:'3', e5: '3', e6:'6', e7:'4', e8:'0', penal:'0', total:'25'},
    {pos: '03', nome:'Thomas Penteado', id: 'NeoCactuar', e1:'2', e2:'2', e3:'2', e4:'2', e5: '2', e6:'2', e7:'2', e8:'2', penal:'0', total:'16'},
    {pos: '04', nome:'Ronald Carvalho', id: 'roonald_1', e1:'1', e2:'1', e3:'1', e4:'1', e5: '1', e6:'1', e7:'1', e8:'1', penal:'5', total:'3'},
    {pos: '05', nome:'Luis Ferruthio', id: 'FERRUTH_SPEEDBR', e1:'1', e2:'1', e3:'0', e4:'0', e5: '1', e6:'1', e7:'1', e8:'1', penal:'4', total:'2'},
];


const RankingCampeonatoDetalhado = () => {
    return (
        <Container >
                <TopoRanking >
                    <img src={logoCampeonato} alt='Logo Campeonato' width='80px'/>
                    REDWARE GT500
                    RANKING GERAL
                    
                    <img src={logoBvgtv} alt='Logo Campeonato' width='80px'/>
                </TopoRanking>
                <LinhaRanking inputHeight="40px">
                    <CelulaHeader>
                        Pos.    
                    </CelulaHeader>
                    <CelulaHeader inputWidth="300px">
                        Piloto    
                    </CelulaHeader>
                    <CelulaHeader inputWidth="200px">
                        ID    
                    </CelulaHeader>
                    <CelulaHeader>
                        Autopolis Int.    
                    </CelulaHeader>
                    <CelulaHeader>
                        Sardegna A II
                    </CelulaHeader>
                    <CelulaHeader>
                        Autodromo Monza
                    </CelulaHeader>
                    <CelulaHeader>
                        Mount Panorama
                    </CelulaHeader>
                    <CelulaHeader>
                        Lago Maggiore
                    </CelulaHeader>
                    <CelulaHeader>
                        Fuji Speedway
                    </CelulaHeader>
                    <CelulaHeader>
                        Spa
                    </CelulaHeader>
                    <CelulaHeader>
                        Redbull Ring
                    </CelulaHeader>
                    
                    <CelulaHeader>
                        Penal.
                    </CelulaHeader>
                    <CelulaHeader>
                        Total
                    </CelulaHeader>
                </LinhaRanking>

                        {pilotos.map((piloto) => (
                            <LinhaRanking>
                            <LinhaPiloto>
                                {piloto.pos}
                            </LinhaPiloto>
                            <LinhaPiloto inputWidth="300px">
                                {piloto.nome}
                            </LinhaPiloto>
                            <LinhaPiloto inputWidth="200px">
                                {piloto.id}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.e1}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.e2}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.e3}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.e4}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.e5}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.e6}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.e7}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.e8}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.penal}
                            </LinhaPiloto>
                            <LinhaPiloto>
                                {piloto.total}
                            </LinhaPiloto>
                        </LinhaRanking>
                        ))}
                

        </Container>
    )
}

export default RankingCampeonatoDetalhado;