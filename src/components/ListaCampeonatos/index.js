import React, {useState, useCallback} from 'react';

import { campeonatos, CampeonatoProps } from '../../campeonatos';

import { Container, CColumn, CHeader, CData, CCampeonato, CButton, Wrapper } from './styles';
import RankingCampeonatoDetalhado from '../RankingCampeonatoDetalhado';

const ListaCampeonatos = () => {

    const [activeCup, setActiveCup] = useState(campeonatos[0]);
    const handleCupClick = useCallback((campeonato)=>{
        
        setActiveCup(campeonato);

    }, [])

    return (
        <Container >
            <CColumn>
                <CHeader>
                    <p>Campeonatos Realizados (2022/2021)</p> 
                </CHeader>

                <CData>
                    {campeonatos.map(campeonato => (
                            <CButton key={campeonato.id} inputURL={campeonato.logo} 
                                     onClick={()=>{
                                        handleCupClick(campeonato);
                                    }} 
                            /> 
  
                    ))}
                </CData><br></br>
                <CData>
                    {activeCup && <RankingCampeonatoDetalhado {...activeCup}/>}
                </CData>
            </CColumn>
        </Container>
    )
}

export default ListaCampeonatos;