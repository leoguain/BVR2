import React from 'react'
import MainBanner from '../MainBanner';
import RankingBanner from '../RankingBanner';
//import MiniBanner1 from '../MiniBanner1';
import MiniBanner2 from '../MiniBanner2';
import { Container, HPBottom, HPColumn, HPTitle, LastVideo } from './styles.js';

import YoutubeEmbed from "../YoutubeEmbed";


const MainPage = () => {
    return (
        <Container >
            <HPColumn>
                <MainBanner />    
            </HPColumn>
            <HPColumn>
                <RankingBanner />    
            </HPColumn>
            <HPColumn>
                <HPTitle>
                    Última Corrida - 06/10/22
                </HPTitle>
                <YoutubeEmbed embedId="H7RzZg_culQ" />
                <HPBottom>
                    Acompanhe ao vivo, às quintas, na BVGtv!
                </HPBottom>
                <br></br>
                <MiniBanner2 />
            </HPColumn>
        </Container>
    )
}

export default MainPage;