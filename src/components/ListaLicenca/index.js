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


    const corSS = cSS[0]?.cor;
    const corS = cS[0]?.cor;
    const corA = cA[0]?.cor;
    const corB = cB[0]?.cor;


    const ArrayCarteiras = [cSS,cS,cA,cB]

    console.log(ArrayCarteiras)

    return (

        <><CColumn>
        <CHeader inputColor={corSS}>
            <BVR_h2>Carteira S</BVR_h2>
        </CHeader>
        <CData inputColor={corSS}>
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
    <CColumn>
        <CHeader inputColor={corS}>
            <BVR_h2>Carteira S</BVR_h2>
        </CHeader>
        <CData inputColor={corS}>
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
                {cS.map((piloto) => (
                    <CPiloto>
                        <CNome>
                            {piloto.nome}
                        </CNome>
                        {piloto.idPsn}
                    </CPiloto>
                ))}
        </CData>
    </CColumn></>
    

        

        
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