import React from 'react';
import { campeonatos, CampeonatoProps } from '../../campeonatos';
import { BannerCampeao, Container, ContainerCampeoes, ContainerTitulo } from './styles.js';

const Campeoes = () => {
    return (
        <Container>
            <ContainerTitulo>
                <p>Hall da Fama</p>
                <p>Confira os campeões da BVR desde a temporada 2021</p>
            </ContainerTitulo>
            <ContainerCampeoes>
                {campeonatos.map(campeonato => (
                    <BannerCampeao key={campeonato.id} inputURL={campeonato.campeao}/> 
                ))}
            </ContainerCampeoes>
        </Container>
    )
}

export default Campeoes;