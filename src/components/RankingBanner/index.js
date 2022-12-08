import {useState, useCallback} from 'react';
import { GetUltimoResultado } from '../../resultados';

import { Container, RankingButton } from './styles';

const RankingBanner = () => {

    const [rankingType, setRankingType] = useState("Geral");
    const handleCupClick = useCallback((rankingType)=>{
        
        setRankingType(rankingType);
        
    }, [])

    return (

         <Container>

            {rankingType && <GetUltimoResultado rankingType={rankingType}/>}

            <div>
                <RankingButton onClick={()=>{
                                        handleCupClick("Geral");
                                    }} silviaKup>Ranking Geral</RankingButton>
                <RankingButton onClick={()=>{
                                        handleCupClick("Etapa");
                                    }} silviaKup>Última Etapa</RankingButton>
            </div>

        </Container>
    )
};

export default RankingBanner;

/*
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

            <div>
                <RankingButton onClick={handleB1} silviaKup>Ranking Geral</RankingButton>
                <RankingButton onClick={handleB2} silviaKup>Última Etapa</RankingButton>
            </div>

            */