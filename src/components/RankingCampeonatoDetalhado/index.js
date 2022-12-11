import logoBvgtv from '../Assets/BVG_logo_branco.png';

import { Container, LinhaRanking, Cabecalho, CelulaRanking, LabelCabecalho, LinhaPiloto, ItemCabecalho, ContainerTabela, Pistas, ColunaSubMenu, PistasSubMenu, CelulaSubMenu, SubMenu, CabecalhoTabelaMobile, CabecalhoTabela } from './styles';
import { BVR_h3 } from '../Pages/styles';

const RankingCampeonatoDetalhado = (campeonato) => {
    return (
        <Container>
                <Cabecalho >
                    <ItemCabecalho>
                        <img src={campeonato.logo} alt='Logo Campeonato' width='80px'/>
                    </ItemCabecalho>
                    <ItemCabecalho>
                        <BVR_h3>{campeonato.title}</BVR_h3>
                    </ItemCabecalho>
                    <ItemCabecalho>
                        <img src={logoBvgtv} alt='Logo Campeonato' width='80px'/>
                    </ItemCabecalho>
                </Cabecalho>

                <ContainerTabela>
                    <CabecalhoTabela>
                        <LabelCabecalho inputWidth="40px" corHead={campeonato.colors.head}>
                            <BVR_h3>Pos.</BVR_h3>  
                        </LabelCabecalho>
                        <LabelCabecalho inputWidth="120px" corHead={campeonato.colors.head} >
                            <BVR_h3>Piloto</BVR_h3>  
                        </LabelCabecalho>
                        <LabelCabecalho inputWidth="90px" corHead={campeonato.colors.head} >
                            <BVR_h3>IdPSN</BVR_h3>   
                        </LabelCabecalho>

                        {campeonato.pistas.map((pista) => (
                            <Pistas key={pista.etapa}>
                                <LabelCabecalho  corHead={campeonato.colors.head}>
                                    <BVR_h3>{pista.nome}</BVR_h3>  
                                </LabelCabecalho>
                            </Pistas>
                        ))}

                        <LabelCabecalho inputWidth="40px" corHead={campeonato.colors.head}>
                            <BVR_h3>Penal.</BVR_h3>
                        </LabelCabecalho>
                        <LabelCabecalho inputWidth="50px" corHead={campeonato.colors.head}>
                            <BVR_h3>Descarte</BVR_h3>
                        </LabelCabecalho>
                        <LabelCabecalho inputWidth="50px" corHead={campeonato.colors.head}>
                            <BVR_h3>Total</BVR_h3>
                        </LabelCabecalho>
                    </CabecalhoTabela>

                    {campeonato.resultados.map((resultado) => (
                        <div key={resultado.pos}>

                            <CabecalhoTabelaMobile inputHeight="40px">
                                <LabelCabecalho inputWidth="40px" corHead={campeonato.colors.head}>
                                    <BVR_h3>Pos.</BVR_h3>    
                                </LabelCabecalho>
                                <LabelCabecalho inputWidth="120px" corHead={campeonato.colors.head} >
                                    <BVR_h3>Piloto</BVR_h3>    
                                </LabelCabecalho>
                                <LabelCabecalho inputWidth="90px" corHead={campeonato.colors.head} >
                                    <BVR_h3>IdPSN</BVR_h3>      
                                </LabelCabecalho>

                                {campeonato.pistas.map((pista) => (
                                    <Pistas key={pista.etapa}>
                                        <LabelCabecalho corHead={campeonato.colors.head}>
                                            {pista.nome}   
                                        </LabelCabecalho>
                                    </Pistas>
                                ))}

                                <LabelCabecalho inputWidth="40px" corHead={campeonato.colors.head}>
                                    Penal.
                                </LabelCabecalho>
                                <LabelCabecalho inputWidth="50px" corHead={campeonato.colors.head}>
                                    Descarte
                                </LabelCabecalho>
                                <LabelCabecalho inputWidth="50px" corHead={campeonato.colors.head}>
                                    Total
                                </LabelCabecalho>
                            </CabecalhoTabelaMobile>

                            <LinhaRanking>
                                <LinhaPiloto inputColor={campeonato.colors.row} inputWidth="40px">
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
                                
                                <LinhaPiloto inputWidth="40px" inputColor={campeonato.colors.row}>
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
                </ContainerTabela>

        </Container>
    )
}

export default RankingCampeonatoDetalhado;