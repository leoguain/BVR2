import React from 'react'
import MainBanner from '../MainBanner';
import RankingBanner from '../RankingBanner';
//import MiniBanner1 from '../MiniBanner1';
import MiniBanner2 from '../MiniBanner2';
import { Container, HPBottom, HPColumn, HPTitle, LastVideo } from './styles.js';

import YoutubeEmbed from "../YoutubeEmbed";
import PostBox from '../PostBox';




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
                <PostBox sizeType="NewsBox" accessType = "default"/><br></br>
                <HPTitle>
                    Última Corrida - 20/10/22
                </HPTitle>
                <YoutubeEmbed embedId="XCa8CoaMpqE" />
                <HPBottom>
                    Acompanhe ao vivo, às quintas, na BVGtv!
                </HPBottom>
            </HPColumn>
        </Container>
    )
}

export default MainPage;