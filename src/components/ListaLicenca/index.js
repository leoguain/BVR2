import {useState, useEffect} from 'react';
import {CColumn, CHeader, CData, CPiloto, CNome, BVR_h2 } from './styles.js';

export default function ListaLicenca(props) {

    console.log(props.listLic);

    let cSS = props.listLic.filter((piloto) => {
        return piloto.carteira === 'SS';
    })

    let cS = props.listLic.filter((piloto) => {
        return piloto.carteira === 'S';
    })

    let cA = props.listLic.filter((piloto) => {
        return piloto.carteira === 'A';
    })

    let cB = props.listLic.filter((piloto) => {
        return piloto.carteira === 'B';
    })

    let listaCarteiras = [cSS,cS,cA,cB];




    return (
        <CColumn>
            <CHeader inputColor={cSS[0].cor}>
                <BVR_h2>Carteira {cSS[0].carteira}</BVR_h2>
            </CHeader>
            <CData inputColor={cSS[0].cor}>
                <CPiloto inputBottomBorder="none" 
                        inputWidth="260px" 
                        inputBorder="10px" 
                        inputColor="#282828">
                    <CNome>
                        Piloto
                    </CNome>
                    <CNome>
                        ID
                    </CNome>
                </CPiloto>
                    {cSS.map((piloto) => (
                        <CPiloto>
                            <CNome>
                                {piloto.nome}
                            </CNome>
                            {piloto.idPsn}
                        </CPiloto>
                    ))}
            </CData>
        </CColumn>
    );

}

/*
<CHeader inputColor="#fff">
                <BVR_h2>Carteira {licenca}</BVR_h2>
            </CHeader>
            <CData inputColor="#fff">
                <CPiloto inputBottomBorder="none" 
                        inputWidth="260px" 
                        inputBorder="10px" 
                        inputColor="#282828">
                    <CNome>
                        Piloto
                    </CNome>
                    <CNome>
                        ID
                    </CNome>
                </CPiloto>
                    {listaCarteiras.map((piloto) => (
                        <CPiloto>
                            <CNome>
                                {piloto.nome}
                            </CNome>
                            {piloto.idPsn}
                        </CPiloto>
                    ))}
            </CData>
            */