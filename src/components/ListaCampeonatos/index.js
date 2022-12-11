import {useState, useCallback, useRef} from 'react';

import { campeonatos, CampeonatoProps } from '../../campeonatos';

import {ContainerCentral, ContainerTabela, CButton, ContainerButtons } from './styles';
import RankingCampeonatoDetalhado from '../RankingCampeonatoDetalhado';
import { MainContainerV, CentralContainerV, BVR_h2, BVR_h3,  } from '../Pages/styles';

const ListaCampeonatos = () => {

    const ref = useRef(null);

    const [activeCup, setActiveCup] = useState(campeonatos[0]);
    const handleCupClick = useCallback((campeonato)=>{
        
        setActiveCup(campeonato);

        ref.current?.scrollIntoView({behavior: 'smooth'});

    }, [])

    return (
        <MainContainerV>
            <div>
            <BVR_h2>Campeonatos Realizados 2022/2021</BVR_h2>
            <BVR_h3>
                Confira as tabelas de resultados dos campeonatos das temporadas 2022 e 2021.
            </BVR_h3>
            </div>
            

            <ContainerCentral>
                <BVR_h3>Selecione o campeonato desejado:</BVR_h3>
                <ContainerButtons>
                    {campeonatos.map(campeonato => (
                            <CButton key={campeonato.id} inputURL={campeonato.logo} 
                                     onClick={()=>{
                                        handleCupClick(campeonato);
                                    }} 
                            /> 
  
                    ))}
                </ContainerButtons>
                <ContainerTabela ref={ref}>
                    {activeCup && <RankingCampeonatoDetalhado {...activeCup}/>}
                </ContainerTabela>
            </ContainerCentral>
        </MainContainerV>
    )
}

export default ListaCampeonatos;