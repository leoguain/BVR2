import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Documento from "../src/components/Documento/index.js";
import Recorde from "../src/components/Recorde/index.js";
import Piloto from "../src/components/Piloto/index.js";
import ListaLicenca from "./components/ListaLicenca/index.js";
import Campeao from "./components/Campeao/index.js";
import Noticia from "./components/Noticia/index.js";

import { recordes, RecordesProps } from "./recordes";
import { documentos, DocumentosProps } from "./documentos";
import { campeoes, CampeoesProps } from "./campeoes";
import { noticias, NoticiasProps } from "./noticias";
import { pilotos, PilotosProps } from "./pilotos";
import { licencas, LicencasProps } from "./licencas";
import {
  ultimosResultadosEtapa,
  ultimosResultadosGeral,
  ResultadosProps,
} from "./ultimosResultados";

import {
  MainContainerV,
  CentralContainerV,
  ContainerCampeoes,
  CentralContainerH,
  ContainerPilotos,
  BVR_Button,
  BVR_h2,
  BVR_h3,
  ContainerCarteiras,
} from "../src/components/Pages/styles.js";

import {
  Cabecalho,
  LinhaResultado,
} from "../src/components/LinhaResultado/index.js";

import { MainContainer } from "../src/components/LinhaResultado/styles";
import { ContainerBox } from "./components/Noticia/styles.js";

type DocumentoPropsDb = {
  doc_IdDocumento_int: number;
  doc_NomeDocumento_str: string;
  doc_TipoDocumento_str: string;
  doc_UrlDocumento_str: string;
};
type RecordesPropsDb = {
  PistaEtapa: string;
  Campeonato: string;
  Ano: string;
  Plataforma: string;
  Categoria: string;
  DataEtapa: string;
  IdPilotoPole: number;
  PilotoPole: string;
  TempoPole: string;
  IdPilotoVMR: number;
  PilotoVMR: string;
  TempoVMR: string;
};
type ResultadoPropsDb = {
  nomeCampeonato: string;
  ano: string;
  logoCampeonato: string;
  corBkg: string;
  corHead: string;
  corRow: string;
  corTxt: string;
  idPiloto: number;
  nomePiloto: string;
  idPsn: string;
  totalPontos: number;
  posicao: string;
};
type PilotosPropsDb = {
  id: number;
  nome: string;
  idPsn: string;
  equipe: string;
  dataNascimento: Date;
  email: string;
  instagram: string;
  carteira: string;
  foto: string;
  NumeroCampeonatos: number;
  NumeroCorridas: number;
  TotalPontos: number;
  NumeroPenais: number;
  TotalPenais: number;
  PontuacaoGeral: number;
  TotalP1: number;
  TotalP2: number;
  TotalP3: number;
  TotalP4: number;
  TotalP5: number;
  TotalP6: number;
  TotalP7: number;
  TotalP8: number;
  TotalP9: number;
  TotalP10: number;
  TotalP11: number;
  TotalP12: number;
  TotalP13: number;
  TotalP14: number;
  NumeroPoles: number;
  NumeroVMR: number;
};
type LicencasPropsDb = {
  id: number;
  nome: string;
  idPsn: string;
  carteira: string;
  pontuacaoGeral: number;
  posicao: number;
  cor: string;
};
type CampeoesPropsDb = {
  urlFoto: string;
};
type NoticiaPropsDb = {
  not_IdNoticia_int: number;
  not_TituloNoticia_str: string;
  not_DataNoticia_str: string;
  not_TextoNoticia_str: string;
  not_ImagemNoticia_str: string;
  not_URLNoticia_str: string;
};

type RankingTypeProps = {
  rankingType: string;
  defaultType: string;
};

type PostTypeProps = {
  sizeType: string;
  accessType: string;
};

export const GetNoticias = (sizeType: PostTypeProps) => {
  const [noticiasObj, setNoticiasObj] = useState<NoticiasProps[]>(noticias);

  /* Data from DB
  const [noticiasDb, setNoticiasDb] = useState<NoticiaPropsDb[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getnews").then((response) => {
      setNoticiasDb(response.data);
    });
  }, []);
  */

  /*
  <Link to="/cdnoticias">
          <BVR_Button>+ Adicionar Notícia</BVR_Button>
        </Link>
        */

  if (sizeType.sizeType === "Page") {
    return (
      <MainContainerV>
        <BVR_h2>Notícias</BVR_h2>
        <BVR_h3>Veja todas as notícias postadas aqui no site.</BVR_h3>

        <CentralContainerH>
          {noticiasObj.map(({ id, title, data, texto, image, url }) => (
            <Noticia
              key={id}
              listNot={noticiasObj}
              SetListNot={setNoticiasObj}
              id={id}
              title={title}
              date={data}
              text={texto}
              image={image}
              url={url}
            ></Noticia>
          ))}
        </CentralContainerH>
      </MainContainerV>
    );
  } else {
    return (
      <ContainerBox>
        {noticiasObj.map(({ id, title, data, texto, image, url }) => (
          <Noticia
            key={id}
            listNot={noticiasObj}
            SetListNot={setNoticiasObj}
            id={id}
            title={title}
            date={data}
            text={texto}
            image={image}
            url={url}
          ></Noticia>
        ))}
      </ContainerBox>
    );
  }

  return (
    <MainContainerV>
      <BVR_h2>Notícias</BVR_h2>
      <BVR_h3>Adicione novas notícias, ou edite as já postadas.</BVR_h3>
      <br></br>

      <Link to="/cdnoticias">
        <BVR_Button>+ Adicionar Notícia</BVR_Button>
      </Link>

      <CentralContainerH>
        {noticiasObj.map(({ id, title, data, texto, image, url }) => (
          <Noticia
            key={id}
            listNot={noticiasObj}
            SetListNot={setNoticiasObj}
            id={id}
            title={title}
            date={data}
            text={texto}
            image={image}
            url={url}
          ></Noticia>
        ))}
      </CentralContainerH>
    </MainContainerV>
  );
};

export const GetCampeoes = () => {
  const [campeoesObj, setCampeoesObj] = useState<CampeoesProps[]>(campeoes);

  /* Data from DB
  const [campeoesDb, setCampeoesDb] = useState<CampeoesPropsDb[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getchampions").then((response) => {
      setCampeoesDb(response.data);
    });
  }, []);
  */

  return (
    <MainContainerV>
      <BVR_h2>Hall da Fama</BVR_h2>
      <BVR_h3>Confira os campeões da BVR desde a temporada 2021.</BVR_h3>

      <ContainerCampeoes>
        {campeoesObj.map(({ urlFoto }, index) => {
          return (
            <Campeao
              key={index}
              listDoc={campeoesObj}
              SetListDoc={setCampeoesObj}
              id={index}
              url={urlFoto}
            />
          );
        })}
      </ContainerCampeoes>
    </MainContainerV>
  );
};

export const GetLicencas = () => {
  const [licencasObj, setLicencasObj] = useState<LicencasProps[]>(licencas);

  /* Data from DB
  const [licencasDb, setLicencasDb] = useState<LicencasPropsDb[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getlicenses").then((response) => {
      setLicencasDb(response.data);
    });
  }, []);
  */

  return (
    <MainContainerV>
      <BVR_h2>Carteiras BVR</BVR_h2>
      <BVR_h3>Acompanhe o nível de carteira de cada piloto na BVR.</BVR_h3>

      <ContainerCarteiras>
        <ListaLicenca listLic={licencasObj} SetListLic={setLicencasObj} />
      </ContainerCarteiras>
    </MainContainerV>
  );
};

export const GetDocumentos = () => {
  const [documentosObj, setDocumentosObj] =
    useState<DocumentosProps[]>(documentos);

  /* Data from DB
  const [documentosDb, setDocumentosDb] = useState<DocumentoPropsDb[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getdocs").then((response) => {
      setDocumentosDb(response.data);
    });
  }, []);
*/

  return (
    <MainContainerV>
      <BVR_h2>Documentos</BVR_h2>
      <BVR_h3>
        Aqui você tem acesso ao Estatuto da Liga, e a todos os regulamentos dos
        campeonatos realizados.
      </BVR_h3>
      <CentralContainerV>
        {documentosObj.map(
          ({
            doc_IdDocumento_int,
            doc_NomeDocumento_str,
            doc_TipoDocumento_str,
            doc_UrlDocumento_str,
          }) => (
            <Documento
              key={doc_IdDocumento_int}
              listDoc={documentosObj}
              SetListDoc={setDocumentosObj}
              id={doc_IdDocumento_int}
              nome={doc_NomeDocumento_str}
              tipo={doc_TipoDocumento_str}
              url={doc_UrlDocumento_str}
            ></Documento>
          )
        )}
      </CentralContainerV>
    </MainContainerV>
  );
};

export const GetRecordes = () => {
  const [recordesObj, setRecordesObj] = useState<RecordesProps[]>(recordes);

  /* Data from DB
  const [recordesDb, setRecordesDb] = useState<RecordesPropsDb[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getrecordst").then((response) => {
      setRecordesDb(response.data);
    });
  }, []);
  */

  //let currentTrack = "";
  //let repeat = "N";

  return (
    <MainContainerV>
      <BVR_h2>Recordes</BVR_h2>
      <BVR_h3>
        Aqui você confere os recordes de voltas de Pole Position e Melhor Volta
        de Corrida na Liga, por pista.
      </BVR_h3>
      <CentralContainerH>
        <Recorde listRec={recordesObj} SetListRec={setRecordesObj} />
      </CentralContainerH>
    </MainContainerV>
  );
};

/*
{recordesObj.map(
          (
            {
              PistaEtapa,
              Campeonato,
              Ano,
              Plataforma,
              Categoria,
              DataEtapa,
              IdPilotoPole,
              PilotoPole,
              TempoPole,
              IdPilotoVMR,
              PilotoVMR,
              TempoVMR,
            },
            index
          ) => {
            if (currentTrack === PistaEtapa) {
              repeat = "S";
            } else {
              repeat = "N";
              currentTrack = PistaEtapa;
            }

            return (
              <Recorde
                key={index}
                listRec={recordesObj}
                SetListRec={setRecordesObj}
                id={index}
                pista={PistaEtapa}
                campeonato={Campeonato}
                ano={Ano}
                plataforma={Plataforma}
                categoria={Categoria}
                data={DataEtapa}
                idPole={IdPilotoPole}
                pilotoPole={PilotoPole}
                tempoPole={TempoPole}
                idVmr={IdPilotoVMR}
                pilotoVmr={PilotoVMR}
                tempoVmr={TempoVMR}
                repete={repeat}
              />
            );
          }
        )}


        */

export const GetPilotos = () => {
  const [pilotosObj, setPilotosObj] = useState<PilotosProps[]>(pilotos);

  /* Data from DB
  const [pilotosDb, setPilotosDb] = useState<PilotosPropsDb[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getdrivers").then((response) => {
      setPilotosDb(response.data);
    });
  }, []);
*/

  return (
    <MainContainerV>
      <BVR_h2>Pilotos</BVR_h2>
      <BVR_h3>
        Conheça os pilotos na Liga BVR. Aqui você encontra cada piloto e suas
        principais estatísticas.
      </BVR_h3>

      <ContainerPilotos>
        {pilotosObj.map(
          (
            {
              id,
              nome,
              idPsn,
              equipe,
              dataNascimento,
              instagram,
              carteira,
              foto,
              NumeroCampeonatos,
              NumeroCorridas,
              TotalPontos,
              NumeroPenais,
              TotalPenais,
              PontuacaoGeral,
              TotalP1,
              TotalP2,
              TotalP3,
              TotalP4,
              TotalP5,
              TotalP6,
              TotalP7,
              TotalP8,
              TotalP9,
              TotalP10,
              TotalP11,
              TotalP12,
              TotalP13,
              TotalP14,
              NumeroPoles,
              NumeroVMR,
            },
            index
          ) => (
            <Piloto
              key={id}
              listDoc={pilotosObj}
              SetListDoc={setPilotosObj}
              id={id}
              nome={nome}
              idPsn={idPsn}
              equipe={equipe}
              dataNascimento={dataNascimento}
              instagram={instagram}
              carteira={carteira}
              foto={foto}
              posicao={index + 1}
              numeroCampeonatos={NumeroCampeonatos}
              numeroCorridas={NumeroCorridas}
              totalPontos={TotalPontos}
              numeroPenais={NumeroPenais}
              totalPenais={TotalPenais}
              pontuacaoGeral={PontuacaoGeral}
              totalP1={TotalP1}
              totalP2={TotalP2}
              totalP3={TotalP3}
              totalP4={TotalP4}
              totalP5={TotalP5}
              totalP6={TotalP6}
              totalP7={TotalP7}
              totalP8={TotalP8}
              totalP9={TotalP9}
              totalP10={TotalP10}
              totalP11={TotalP11}
              totalP12={TotalP12}
              totalP13={TotalP13}
              totalP14={TotalP14}
              numeroPoles={NumeroPoles}
              numeroVMR={NumeroVMR}
            ></Piloto>
          )
        )}
      </ContainerPilotos>
    </MainContainerV>
  );
};

export const GetUltimoResultado = (rankingType: RankingTypeProps) => {
  const [resultadoGeralObj, setResultadoGeralObj] = useState<ResultadosProps[]>(
    ultimosResultadosGeral
  );
  const [resultadoEtapaObj, setResultadoEtapaObj] = useState<ResultadosProps[]>(
    ultimosResultadosEtapa
  );

  const resultadosObj =
    rankingType.rankingType === "Geral" ? resultadoGeralObj : resultadoEtapaObj;
  const headerLabel: string =
    rankingType.rankingType === "Geral" ? "RANKING GERAL" : "ÚLTIMA ETAPA";

  /*
  const [resultadosDb, setResultadosDb] = useState<ResultadoPropsDb[]>([]);

  let apiPath: string = "http://localhost:3001/getlastrace";
  let headerLabel: string = "ÚLTIMA ETAPA";

  if (rankingType.rankingType === "Geral") {
    apiPath = "http://localhost:3001/getlastgerald";
    headerLabel = "RANKING GERAL";
  }

  useEffect(() => {
    Axios.get(apiPath).then((response) => {
      setResultadosDb(response.data);
    });
  }, [apiPath]);*/

  return (
    <MainContainer>
      <Cabecalho
        nomeCampeonato={resultadosObj[0]?.nomeCampeonato}
        ano={resultadosObj[0]?.ano}
        logo={resultadosObj[0]?.logoCampeonato}
        corTxt={resultadosObj[0]?.corTxt}
        label={headerLabel}
      />

      {resultadosObj.map(
        (
          {
            nomeCampeonato,
            ano,
            logoCampeonato,
            corBkg,
            corHead,
            corRow,
            corTxt,
            idPiloto,
            nomePiloto,
            idPsn,
            posicao,
            totalPontos,
          },
          index
        ) => (
          <LinhaResultado
            id={idPiloto}
            posicao={posicao}
            nomeCampeonato={nomeCampeonato}
            ano={ano}
            logoCampeonato={logoCampeonato}
            corBkg={corBkg}
            corHead={corHead}
            corRow={corRow}
            corTxt={corTxt}
            nomePiloto={nomePiloto}
            idPsn={idPsn}
            totalPontos={totalPontos}
          ></LinhaResultado>
        )
      )}
    </MainContainer>
  );
};
