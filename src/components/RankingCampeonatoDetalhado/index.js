import React from 'react';

import logoCampeonato from '../Assets/LogosCampeonatos/logoRedware2021.png';
import logoBvgtv from '../Assets/BVG_logo_branco.png';

import CarregaTabela from '../CarregaTabela';
import { Container, LinhaRanking, TopoRanking, CelulaRanking, CelulaHeader, LinhaPiloto, ItensTopoRanking, DataRanking, Pistas, ColunaSubMenu, PistasSubMenu, CelulaSubMenu, SubMenu, LinhaHeaderExtend, LinhaHeader } from './styles';

const RankingCampeonatoDetalhado = (campeonato) => {
    return (
        <Container 
        /*inputColor={campeonato.colors.bkg}
        inputColorFont={campeonato.colors.txt}*/>

                <TopoRanking >
                    <ItensTopoRanking><img src={campeonato.logo} alt='Logo Campeonato' width='80px'/></ItensTopoRanking>
                    <ItensTopoRanking>{campeonato.title}</ItensTopoRanking>
                    <ItensTopoRanking><img src={logoBvgtv} alt='Logo Campeonato' width='80px'/></ItensTopoRanking>
                </TopoRanking>

                <DataRanking>
                    <LinhaHeader>
                        <CelulaHeader inputWidth="50px" corHead={campeonato.colors.head}>
                            Pos.    
                        </CelulaHeader>
                        <CelulaHeader inputWidth="120px" corHead={campeonato.colors.head} >
                            Piloto    
                        </CelulaHeader>
                        <CelulaHeader inputWidth="90px" corHead={campeonato.colors.head} >
                            ID    
                        </CelulaHeader>

                        {campeonato.pistas.map((pista) => (
                            <Pistas key={pista.etapa}>
                                <CelulaHeader corHead={campeonato.colors.head}>
                                    {pista.nome}   
                                </CelulaHeader>
                            </Pistas>
                        ))}

                        <CelulaHeader inputWidth="50px" corHead={campeonato.colors.head}>
                            Penal.
                        </CelulaHeader>
                        <CelulaHeader inputWidth="50px" corHead={campeonato.colors.head}>
                            Descarte
                        </CelulaHeader>
                        <CelulaHeader inputWidth="50px" corHead={campeonato.colors.head}>
                            Total
                        </CelulaHeader>
                    </LinhaHeader>

                    {campeonato.resultados.map((resultado) => (
                        <div key={resultado.pos}>

                            <LinhaHeaderExtend inputHeight="40px">
                                <CelulaHeader inputWidth="50px" corHead={campeonato.colors.head}>
                                    Pos.    
                                </CelulaHeader>
                                <CelulaHeader inputWidth="120px" corHead={campeonato.colors.head} >
                                    Piloto    
                                </CelulaHeader>
                                <CelulaHeader inputWidth="90px" corHead={campeonato.colors.head} >
                                    ID    
                                </CelulaHeader>

                                {campeonato.pistas.map((pista) => (
                                    <Pistas key={pista.etapa}>
                                        <CelulaHeader corHead={campeonato.colors.head}>
                                            {pista.nome}   
                                        </CelulaHeader>
                                    </Pistas>
                                ))}

                                <CelulaHeader inputWidth="50px" corHead={campeonato.colors.head}>
                                    Penal.
                                </CelulaHeader>
                                <CelulaHeader inputWidth="50px" corHead={campeonato.colors.head}>
                                    Descarte
                                </CelulaHeader>
                                <CelulaHeader inputWidth="50px" corHead={campeonato.colors.head}>
                                    Total
                                </CelulaHeader>
                            </LinhaHeaderExtend>

                            <LinhaRanking>
                                <LinhaPiloto inputColor={campeonato.colors.row} inputWidth="50px">
                                    {resultado.pos}
                                </LinhaPiloto>
                                <LinhaPiloto inputColor={campeonato.colors.row} inputWidth="120px">
                                    {resultado.nome}
                                </LinhaPiloto>
                                <LinhaPiloto inputColor={campeonato.colors.row} inputWidth="90px">
                                    {resultado.id}
                                </LinhaPiloto>

                                {resultado.pontos.map((ponto) => (
                                    <Pistas key={ponto.et}>
                                        <LinhaPiloto 
                                            inputColor={campeonato.colors.row}>
                                            {ponto.pt}
                                        </LinhaPiloto>
                                    </Pistas>
                                ))}
                                
                                <LinhaPiloto inputWidth="50px" inputColor={campeonato.colors.row}>
                                    {resultado.penal}
                                </LinhaPiloto>
                                <LinhaPiloto inputWidth="50px" inputColor={campeonato.colors.row}>
                                    {resultado.descarte}
                                </LinhaPiloto>
                                <LinhaPiloto inputWidth="50px" inputColor={campeonato.colors.row}>
                                    {resultado.total}
                                </LinhaPiloto>
                            </LinhaRanking>

                            <SubMenu>
                                <ColunaSubMenu>
                                    {campeonato.pistas.map((pista) => (
                                        <PistasSubMenu key={pista.etapa}>
                                            <CelulaSubMenu corHead={campeonato.colors.head}>
                                                {pista.nome}   
                                            </CelulaSubMenu>
                                        </PistasSubMenu>
                                    ))}
                                </ColunaSubMenu>
                                <ColunaSubMenu>
                                    {resultado.pontos.map((ponto) => (
                                        <PistasSubMenu key={ponto.et}>
                                            <CelulaSubMenu 
                                                inputWidth="80px"
                                                corHead={campeonato.colors.row}>
                                                {ponto.pt}
                                            </CelulaSubMenu>
                                        </PistasSubMenu>
                                    ))}
                                </ColunaSubMenu>
                            </SubMenu>
                        </div>
                    ))}
                </DataRanking>

        </Container>
    )
}

export default RankingCampeonatoDetalhado;