import React, {useState, useCallback} from 'react';
import { UltimoResultadoGeralD } from '../../resultados';

import CarregaTabela from '../CarregaTabela';
import { Container, RankingButton } from './styles';

const RankingBanner = () => {

/*    const [activeCup, setActiveCup] = useState(campeonatos[0]);
    const handleCupClick = useCallback((campeonato)=>{
        
        setActiveCup(campeonato);

    }, [])
    {activeCup && <RankingCampeonatoDetalhado {...activeCup}/>}*/


    const [tipoBanner, setTipo] = useState('Geral');

    const handleB1 = () => {
        setTipo('Geral');
        console.log({tipoBanner});
    };

    const handleB2 = () => {
        setTipo('UltimaEtapa');
        console.log({tipoBanner});
    };

    return (

         <Container>

            <UltimoResultadoGeralD/>

            <div>
                <RankingButton onClick={handleB1} silviaKup>Ranking Geral</RankingButton>
                <RankingButton onClick={handleB2} silviaKup>Última Etapa</RankingButton>
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