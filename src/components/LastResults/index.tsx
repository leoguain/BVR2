import { useState, useCallback } from "react";
import { GetUltimoResultado } from "../../resultados";

import { Container, RankingButton } from "./styles";

const RankingBanner = () => {
  const [rankingType, setRankingType] = useState("Geral");
  const handleCupClick = useCallback((rankingType: string) => {
    setRankingType(rankingType);
  }, []);

  return (
    <Container>
      <div>
        <RankingButton
          onClick={() => {
            handleCupClick("Geral");
          }}
        >
          Ranking Geral
        </RankingButton>
        <RankingButton
          onClick={() => {
            handleCupClick("Etapa");
          }}
        >
          Última Etapa
        </RankingButton>
      </div>
    </Container>
  );
};
//{rankingType && <UltimoResultadoGeralD rankingType={rankingType}/>}

export default RankingBanner;
