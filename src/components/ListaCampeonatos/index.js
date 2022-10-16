import React from 'react';

import logoSilviaKup2022 from '../Assets/LogosCampeonatos/logoSilviaKup2022.png';
import logoNascar2022 from '../Assets/LogosCampeonatos/logoNascar2022.png';
import logoMazda2022 from '../Assets/LogosCampeonatos/logoMazda2022.png';
import logoGT32022 from '../Assets/LogosCampeonatos/logoGT3B2022.png';
import logoGr42021 from '../Assets/LogosCampeonatos/logoGr4B2021.png';
import logoToyota2021 from '../Assets/LogosCampeonatos/logoToyotaLightB2021.png';
import logoBMW2021 from '../Assets/LogosCampeonatos/logoBMWB2021.png';
import logoRedware2021 from '../Assets/LogosCampeonatos/logoRedware2021.png';
import logoPorsche2021 from '../Assets/LogosCampeonatos/logoPorscheCup2021.png';

import { Container, CColumn, CHeader, CData, CCampeonato, CButton, Wrapper } from './styles';
import RankingCampeonatoDetalhado from '../RankingCampeonatoDetalhado';

const ListaCampeonatos = () => {

    return (
        <Container >
            <CColumn>
                <CHeader>
                    Campeonatos Realizados (2022/2021) 
                </CHeader>
                <CData>
                    <Wrapper>
                        <CButton inputURL={logoSilviaKup2022} /> 
                    </Wrapper>
                    <Wrapper>
                        <CButton inputURL={logoNascar2022}/> 
                    </Wrapper>
                    <Wrapper>
                        <CButton inputURL={logoMazda2022} /> 
                    </Wrapper>
                    <Wrapper>
                        <CButton inputURL={logoGT32022} /> 
                    </Wrapper>
                    <Wrapper>
                        <CButton inputURL={logoGr42021} /> 
                    </Wrapper>
                    <Wrapper>
                        <CButton inputURL={logoToyota2021} /> 
                    </Wrapper>
                    <Wrapper>
                        <CButton inputURL={logoBMW2021} /> 
                    </Wrapper>
                    <Wrapper>
                        <CButton inputURL={logoRedware2021} /> 
                    </Wrapper>
                    <Wrapper>
                        <CButton inputURL={logoPorsche2021} /> 
                    </Wrapper>
                </CData>
                <CData>
                    
                </CData>
            </CColumn>
        </Container>
    )
}

//<RankingCampeonatoDetalhado />

export default ListaCampeonatos;