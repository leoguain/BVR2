import React from 'react';
import { BVR_a, MainContainer, ItemContainer, BVR_h2, BVR_h3, BVR_h4, BVR_span, SubItemContainer, RecordeContainer, InfoContainer } from './styles.js';

export default function Recorde(props) {

 
//key={props.idPole}
//key={props.idVmr}

    //console.log("{\nIdPista:'',\nPistaEtapa:'"+props.pista+"',\nCampeonato:'"+props.campeonato+"',\nAno:'"+props.ano+"',\nPlataforma:'"+props.plataforma+"',\nCategoria:'"+props.categoria+"',\nDataEtapa:'',\nIdPilotoPole:'"+props.idPole+"',\nPilotoPole:'"+props.pilotoPole+"',\nTempoPole:'"+props.tempoPole+"',\nIdPilotoVMR:'"+props.idVmr+"',\nPilotoVMR:'"+props.pilotoVmr+"',\nTempoVMR:'"+props.tempoVmr+"',\n},")
    
    if (props.repete ==="S") {
        return (
            <MainContainer>
                <ItemContainer>
                    <SubItemContainer>
                        <InfoContainer inputColor="#066F2F">

                            <BVR_h3>
                                {props.categoria}<br></br>
                                <BVR_span>{props.plataforma}</BVR_span>
                            </BVR_h3>

                        </InfoContainer>

                        <InfoContainer inputColor="#149B49">
                            <BVR_h3>
                                {props.campeonato}<br></br>
                                <BVR_span>{props.ano }</BVR_span>
                            </BVR_h3>
                        </InfoContainer>
                        
                        <InfoContainer  inputColor="purple">

                            <BVR_h3>
                                {props.pilotoPole}<br></br>
                                {props.tempoPole}
                            </BVR_h3>

                        </InfoContainer>
                        
                        <InfoContainer  inputColor="purple">
                            
                            <BVR_h3>
                                {props.pilotoVmr}<br></br>
                                {props.tempoVmr}
                            </BVR_h3>

                        </InfoContainer>

                    </SubItemContainer>

                </ItemContainer>
                
            </MainContainer>
        )
    } else {
        return (
            <MainContainer>
                <ItemContainer inputMargin="10px">

                    <InfoContainer inputWidth="600px">
                        <BVR_h3>{props.pista}</BVR_h3>
                    </InfoContainer>

                    <SubItemContainer>
                        <InfoContainer inputHeight="10px">
                            <BVR_h4>Categoria</BVR_h4>
                        </InfoContainer>
                        <InfoContainer inputHeight="10px">
                            <BVR_h4>Campeonato</BVR_h4>
                        </InfoContainer>
                        <InfoContainer inputHeight="10px">
                            <BVR_h4>Pole Position</BVR_h4>
                        </InfoContainer>
                        <InfoContainer inputHeight="10px">
                            <BVR_h4>Volta Mais Rápida</BVR_h4>
                        </InfoContainer>
                    </SubItemContainer>

                    <SubItemContainer>

                        <InfoContainer inputColor="#066F2F">

                            <BVR_h3>
                                {props.categoria}<br></br>
                                <BVR_span>{props.plataforma}</BVR_span>
                            </BVR_h3>

                        </InfoContainer>

                        <InfoContainer inputColor="#149B49">
                            <BVR_h3>
                                {props.campeonato}<br></br>
                                <BVR_span>{props.ano }</BVR_span>
                            </BVR_h3>
                        </InfoContainer>
                        
                        <InfoContainer inputColor="purple">

                            <BVR_h3>
                                {props.pilotoPole}<br></br>
                                {props.tempoPole}
                            </BVR_h3>

                        </InfoContainer>
                        
                        <InfoContainer inputColor="purple">
                            
                            <BVR_h3>
                                {props.pilotoVmr}<br></br>
                                {props.tempoVmr}
                            </BVR_h3>

                        </InfoContainer>

                    </SubItemContainer>

                </ItemContainer>
                
            </MainContainer>
        )
    }
}