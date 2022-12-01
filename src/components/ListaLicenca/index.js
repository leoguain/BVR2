import {useState, useEffect} from 'react';
import {CColumn, CHeader, CData, CPiloto, CNome, BVR_h2 } from './styles.js';

export default function ListaLicenca(props) {

    const licenca = props.listCarteiras[0].carteira;
    const cor = props.listCarteiras[0].cor;

    return (
        <CColumn>
            <CHeader inputColor={cor}>
                <BVR_h2>Carteira {licenca}</BVR_h2>
            </CHeader>
            <CData inputColor={cor}>
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
                    {props.listCarteiras.map((piloto) => (
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

