import React from 'react'
import TabelasCarteiras from '../TabelasCarteiras';
import Campeao from '../Campeao';

import { Container,BVR_h2,BVR_h3, MainContainerV, ContainerCampeoes} from './styles.js';
import { campeonatos, CampeonatoProps } from '../../campeonatos';


const HallFama = () => {
    return (
        <MainContainerV >
            <BVR_h2>Hall da Fama</BVR_h2>
            <BVR_h3>Confira os campeões da BVR desde a temporada 2021.</BVR_h3>

            <ContainerCampeoes>
                {campeonatos.map(campeonato => (
                        <Campeao
                        id={campeonato.id} 
                        url={campeonato.campeao}></Campeao>
                        
                ))}
            </ContainerCampeoes>
        </MainContainerV>
    )
}

export default HallFama;