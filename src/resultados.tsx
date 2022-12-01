import {useState, useEffect} from 'react';
import Axios  from 'axios';

import Documento from '../src/components/Documento/index.js';
import Recorde from '../src/components/Recorde/index.js';
import Piloto from '../src/components/Piloto/index.js';
import ListaLicenca from './components/ListaLicenca/index.js';

import {MainContainerV, MainContainerH, CentralContainerV, CentralContainerH, ContainerPilotos, BVR_h2, BVR_h3 } from '../src/components/Pages/styles.js';

import {Cabecalho, LinhaResultado} from '../src/components/LinhaResultado/index.js'
import { MainContainer} from '../src/components/LinhaResultado/styles'
import { Container, CColumn, CHeader, CData, CPiloto, CNome } from './components/ListaLicenca/styles';

type DocumentoProps = {
    doc_IdDocumento_int: number
    doc_NomeDocumento_str: string
    doc_TipoDocumento_str: string
    doc_UrlDocumento_str: string
}
type RecordesProps = {
    PistaEtapa: string
    Campeonato: string
    Ano: string
    Plataforma: string
    Categoria:string
    DataEtapa:string
    IdPilotoPole: number
    PilotoPole:string
    TempoPole:string
    IdPilotoVMR: number
    PilotoVMR:string
    TempoVMR:string
}
type ResultadoProps = {
    nomeCampeonato: string
    ano: string
    logoCampeonato: string
    corBkg: string
    corHead: string
    corRow: string
    corTxt: string
    idPiloto: number
    nomePiloto: string
    idPsn: string
    totalPontos: number
}
type PilotoProps = {
    id: number
    nome: string
    idPsn: string
    equipe: string
    dataNascimento: Date
    email: string
    instagram: string
    carteira: string
    foto: string
    NumeroCampeonatos: number
    NumeroCorridas: number
    TotalPontos: number
    NumeroPenais: number
    TotalPenais: number
    PontuacaoGeral: number
    TotalP1: number
    TotalP2: number
    TotalP3: number
    TotalP4: number
    TotalP5: number
    TotalP6: number
    TotalP7: number
    TotalP8: number
    TotalP9: number
    TotalP10: number
    TotalP11: number
    TotalP12: number
    TotalP13: number
    TotalP14: number
    NumeroPoles: number
    NumeroVMR: number
}
type LicencasProps = {
    id: number
    nome: string
    idPsn: string
    carteira: string
    pontuacaoGeral: number
    posicao: number
    cor: string
}

export const GetLicencas = () => {

    const [licencas, setLicencas] = useState<LicencasProps[]>([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getlicenses").then((response) => {
            setLicencas(response.data);
            });
    },[]);

    let cSS = licencas.filter((piloto) => {
        return piloto.carteira === 'SS';
    })

    let cS = licencas.filter((piloto) => {
        return piloto.carteira === 'S';
    })

    let cA = licencas.filter((piloto) => {
        return piloto.carteira === 'A';
    })

    let cB = licencas.filter((piloto) => {
        return piloto.carteira === 'B';
    })

    return (
        <MainContainerV>
            <BVR_h2>Carteiras BVR</BVR_h2>
            <BVR_h3>Acompanhe o nível de carteira de cada piloto da BVR.</BVR_h3>
            
            <CentralContainerH>
                <ListaLicenca listCarteiras={cSS}/>
                <ListaLicenca listCarteiras={cS}/>
                <ListaLicenca listCarteiras={cA}/>
                <ListaLicenca listCarteiras={cB}/>
            </CentralContainerH>
        </MainContainerV>
    )
}

export const GetDocumentos = () => {

    const [documentos, setDocumentos] = useState<DocumentoProps[]>([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getdocs").then((response) => {
            setDocumentos(response.data);
            });
    },[]);
    
    return (
        <MainContainerV>
            <BVR_h2>Documentos</BVR_h2>
            <BVR_h3>Aqui você tem acesso ao Estatuto da Liga, e a todos os regulamentos dos campeonatos realizados.</BVR_h3>
            <CentralContainerV>
                {documentos.map(({doc_IdDocumento_int, 
                              doc_NomeDocumento_str, 
                              doc_TipoDocumento_str, 
                              doc_UrlDocumento_str})=>(
                              <Documento 
                                key={doc_IdDocumento_int}
                                listDoc={documentos}
                                SetListDoc={setDocumentos}
                                id={doc_IdDocumento_int}
                                nome={doc_NomeDocumento_str}
                                tipo={doc_TipoDocumento_str}
                                url={doc_UrlDocumento_str}
                                ></Documento>))}
            </CentralContainerV>
        </MainContainerV>
    )
}

export const GetRecordes = () => {

    const [recordes, setRecordes] = useState<RecordesProps[]>([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getrecordst").then((response) => {
            setRecordes(response.data);
            });
    },[]);

    let currentTrack = "";
    let repeat = "N";

    return (
        <MainContainerV >
            <BVR_h2>Recordes</BVR_h2>
            <BVR_h3>Aqui você confere os recordes de voltas de Pole Position e Melhor Volta de Corrida na Liga, por pista.</BVR_h3>
            <CentralContainerH>
                {recordes.map(({PistaEtapa,
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
                                TempoVMR}, index)=>{

                                if (currentTrack === PistaEtapa) {
                                    repeat = "S"
                                } else {
                                    repeat = "N"
                                    currentTrack =  PistaEtapa;
                                };

                              return <Recorde
                                key={index}
                                listDoc={recordes}
                                SetListDoc={setRecordes}
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
                                />})}
            </CentralContainerH>
            
        </MainContainerV>
    )
}

export const GetPilotos = () => {

    const [pilotos, setPilotos] = useState<PilotoProps[]>([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getdrivers").then((response) => {
            setPilotos(response.data);
            });
    },[]);

    return (
        <MainContainerV>
            <BVR_h2>Pilotos</BVR_h2>
            <BVR_h3>Conheça os pilotos na Liga.</BVR_h3>
            
            <ContainerPilotos>
                {pilotos.map(({id,
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
                                NumeroVMR}, index)=>(
                              <Piloto
                                key={id}
                                listDoc={pilotos}
                                SetListDoc={setPilotos}
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
                                ></Piloto>))}
            </ContainerPilotos>
        </MainContainerV>
    )
}

export const UltimoResultadoGeralD = () => {

    const [resultados, setResultados] = useState<ResultadoProps[]>([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getlastgerald").then((response) => {
            setResultados(response.data);
            });
    },[]);
    

    /*
    <MainContainer style={{backgroundColor:{resultados[0].corTxt},
                               color:"#000"}}>
            
            <Cabecalho nomeCampeonato={resultados[0].nomeCampeonato}
                       ano={resultados[0].ano}
                       logo={resultados[0].logoCampeonato}
                       corTxt={resultados[0].corTxt}> 
            </Cabecalho>
            */
    return (
        <MainContainer>
                
            {resultados.map(({nomeCampeonato,
                            ano,
                            logoCampeonato,
                            corBkg,
                            corHead,
                            corRow,
                            corTxt,
                            idPiloto,
                            nomePiloto,
                            idPsn,
                            totalPontos}, index)=>(
                                
                                <LinhaResultado key={idPiloto}
                                    posicao={index + 1}
                                    nomeCampeonato={nomeCampeonato}
                                    ano={ano}
                                    logoCampeonato={logoCampeonato}
                                    corBkg={corBkg}
                                    corHead={corHead}
                                    corRow={corRow}
                                    corTxt={corTxt}
                                    nomePiloto={nomePiloto}
                                    idPsn={idPsn}
                                    totalPontos={totalPontos}>
                                </LinhaResultado>
                            ))}
        </MainContainer>
    )
}