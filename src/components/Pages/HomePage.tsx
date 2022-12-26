import MainBanner from "../MainBanner";
import RankingBanner from "../RankingBanner";
import { Container, HPBottom, HPColumn, HPTitle } from "./styles.js";
import { GetNoticias } from "../../resultados";

import YoutubeEmbed from "../YoutubeEmbed";
import PostBox from "../PostBox";

const MainPage = () => {
  return (
    <Container>
      <HPColumn>
        <MainBanner />
      </HPColumn>
      <HPColumn>
        <GetNoticias sizeType="Box" accessType="Default" />
        <HPTitle>Última Corrida: 17/11/2022</HPTitle>
        <YoutubeEmbed embedId="CM1qkWd0t3M" />
        <HPBottom>Acompanhe ao vivo, às quintas, na BVGtv!</HPBottom>
      </HPColumn>
      <HPColumn>
        <RankingBanner />
      </HPColumn>
    </Container>
  );
};

export default MainPage;
