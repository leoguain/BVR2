import { BVR_a, MainContainer, ItemContainer, BVR_h2, BVR_h3, BVR_h4, BVR_span, SubItemContainer, RecordeContainer, InfoContainer, PairContainer } from './styles.js';

export default function Recorde(props) {

 
//key={props.idPole}
//key={props.idVmr}

    //console.log("{\nIdPista:'',\nPistaEtapa:'"+props.pista+"',\nCampeonato:'"+props.campeonato+"',\nAno:'"+props.ano+"',\nPlataforma:'"+props.plataforma+"',\nCategoria:'"+props.categoria+"',\nDataEtapa:'',\nIdPilotoPole:'"+props.idPole+"',\nPilotoPole:'"+props.pilotoPole+"',\nTempoPole:'"+props.tempoPole+"',\nIdPilotoVMR:'"+props.idVmr+"',\nPilotoVMR:'"+props.pilotoVmr+"',\nTempoVMR:'"+props.tempoVmr+"',\n},")
    
    let currentTrack = "";
    let repeat = "N";

    return (
        <>
            {props.listRec.map((
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

                if (repeat ==="N") {
                    return (
                        <MainContainer>
                            <ItemContainer inputMargin='20px'>
                                <InfoContainer inputWidth="400px">
                                    <BVR_h3>{PistaEtapa}</BVR_h3>
                                </InfoContainer>
    
                                <SubItemContainer inputColor="#149B49">
                                    
                         
                                        <InfoContainer inputColor="#066F2F">
                                            <BVR_h3>
                                                <BVR_span>Categoria</BVR_span><br></br>
                                                {Categoria}<br></br>
                                                <BVR_span>{Plataforma}</BVR_span>
                                            </BVR_h3>
    
                                            </InfoContainer>
    
                                            <InfoContainer inputColor="#149B49">
                                            <BVR_h3>
                                                <BVR_span>Campeonato</BVR_span><br></br>
                                                {Campeonato}<br></br>
                                                <BVR_span>{Ano}</BVR_span>
                                            </BVR_h3>
                                        </InfoContainer>
                  
                                        
                                        <InfoContainer>
                                            <BVR_h3 inputColor="#DE72DA">
                                                <BVR_span>Pole Position</BVR_span><br></br>
                                                {PilotoPole}<br></br>
                                                {TempoPole}
                                            </BVR_h3>
                                        </InfoContainer>
                                        
                                        <InfoContainer>
                                            <BVR_h3 inputColor="#DE72DA">
                                                <BVR_span>Volta Mais Rápida</BVR_span><br></br>
                                                {PilotoVMR}<br></br>
                                                {TempoVMR}
                                            </BVR_h3>
                                        </InfoContainer>
   
    
                                </SubItemContainer>
    
                            </ItemContainer>
                            
                        </MainContainer>
                    )      
                } else {
                    return (
                        <MainContainer>
                            <ItemContainer>
    
                                <SubItemContainer inputColor="#149B49">
                                    
                                 
                                        <InfoContainer inputColor="#066F2F">
                                            <BVR_h3>
                                                <BVR_span>Categoria</BVR_span><br></br>
                                                {Categoria}<br></br>
                                                <BVR_span>{Plataforma}</BVR_span>
                                            </BVR_h3>
    
                                            </InfoContainer>
    
                                            <InfoContainer inputColor="#149B49">
                                            <BVR_h3>
                                                <BVR_span>Campeonato</BVR_span><br></br>
                                                {Campeonato}<br></br>
                                                <BVR_span>{Ano}</BVR_span>
                                            </BVR_h3>
                                        </InfoContainer>
                              
                                        <InfoContainer>
                                            <BVR_h3 inputColor="#DE72DA">
                                                <BVR_span>Pole Position</BVR_span><br></br>
                                                {PilotoPole}<br></br>
                                                {TempoPole}
                                            </BVR_h3>
                                        </InfoContainer>
                                        
                                        <InfoContainer>
                                            <BVR_h3 inputColor="#DE72DA">
                                                <BVR_span>Volta Mais Rápida</BVR_span><br></br>
                                                {PilotoVMR}<br></br>
                                                {TempoVMR}
                                            </BVR_h3>
                                        </InfoContainer>
                               
    
                                </SubItemContainer>
    
                            </ItemContainer>
                            
                        </MainContainer>
                    )
                }
            }
            )}
        </>
    )

    


    if (props.repete ==="S") {
        return (
            <MainContainer>
                <ItemContainer>
                    <SubItemContainer inputColor="#149B49">
                        
                        <PairContainer>
                            <InfoContainer inputColor="#066F2F">
                                <BVR_h3>
                                    <BVR_span>Categoria</BVR_span><br></br>
                                    {props.categoria}<br></br>
                                    <BVR_span>{props.plataforma}</BVR_span>
                                </BVR_h3>

                                </InfoContainer>

                                <InfoContainer inputColor="#149B49">
                                <BVR_h3>
                                    <BVR_span>Campeonato</BVR_span><br></br>
                                    {props.campeonato}<br></br>
                                    <BVR_span>{props.ano }</BVR_span>
                                </BVR_h3>
                            </InfoContainer>
                        </PairContainer>

                        <PairContainer>
                            <InfoContainer>
                                <BVR_h3 inputColor="#DE72DA">
                                    <BVR_span>Pole Position</BVR_span><br></br>
                                    {props.pilotoPole}<br></br>
                                    {props.tempoPole}
                                </BVR_h3>
                            </InfoContainer>
                            
                            <InfoContainer>
                                <BVR_h3 inputColor="#DE72DA">
                                    <BVR_span>Volta Mais Rápida</BVR_span><br></br>
                                    {props.pilotoVmr}<br></br>
                                    {props.tempoVmr}
                                </BVR_h3>
                            </InfoContainer>
                        </PairContainer>

                    </SubItemContainer>

                </ItemContainer>
                
            </MainContainer>
        )
    } else {
        return (
            <MainContainer>
                <ItemContainer inputMargin="10px">

                    <InfoContainer inputWidth="400px">
                        <BVR_h3>{props.pista}</BVR_h3>
                    </InfoContainer>

                    <SubItemContainer inputColor="#149B49">

                        <PairContainer>
                            <InfoContainer inputColor="#066F2F">
                                <BVR_h3>
                                    <BVR_span>Categoria</BVR_span><br></br>
                                    {props.categoria}<br></br>
                                    <BVR_span>{props.plataforma}</BVR_span>
                                </BVR_h3>

                                </InfoContainer>

                                <InfoContainer inputColor="#149B49">
                                <BVR_h3>
                                    <BVR_span>Campeonato</BVR_span><br></br>
                                    {props.campeonato}<br></br>
                                    <BVR_span>{props.ano }</BVR_span>
                                </BVR_h3>
                            </InfoContainer>
                        </PairContainer>

                        <PairContainer>
                            <InfoContainer>
                                <BVR_h3 inputColor="#DE72DA">
                                    <BVR_span>Pole Position</BVR_span><br></br>
                                    {props.pilotoPole}<br></br>
                                    {props.tempoPole}
                                </BVR_h3>
                            </InfoContainer>
                            
                            <InfoContainer>
                                <BVR_h3 inputColor="#DE72DA">
                                    <BVR_span>Volta Mais Rápida</BVR_span><br></br>
                                    {props.pilotoVmr}<br></br>
                                    {props.tempoVmr}
                                </BVR_h3>
                            </InfoContainer>
                        </PairContainer>

                    </SubItemContainer>

                </ItemContainer>
                
            </MainContainer>
        )
    }
}

/*
if (props.repete ==="N") {
        return (
            <MainContainer>
                <ItemContainer inputMargin="10px">
                    <InfoContainer inputWidth="600px">
                        <BVR_h3>{props.pista}</BVR_h3>
                    </InfoContainer>
                </ItemContainer>
            </MainContainer>  
        )
                 
    }
    return (
        <MainContainer>
            <ItemContainer>
                <SubItemContainer inputColor="#149B49">
                    <InfoContainer inputColor="#066F2F">

                        <BVR_h3>
                            <BVR_span>Categoria</BVR_span><br></br>
                            {props.categoria}<br></br>
                            <BVR_span>{props.plataforma}</BVR_span>
                        </BVR_h3>

                    </InfoContainer>

                    <InfoContainer inputColor="#149B49">
                        <BVR_h3>
                            <BVR_span>Campeonato</BVR_span><br></br>
                            {props.campeonato}<br></br>
                            <BVR_span>{props.ano }</BVR_span>
                        </BVR_h3>
                    </InfoContainer>
                    
                    <InfoContainer>

                        <BVR_h3 inputColor="#DE72DA">
                            <BVR_span>Pole Position</BVR_span><br></br>
                            {props.pilotoPole}<br></br>
                            {props.tempoPole}
                        </BVR_h3>

                    </InfoContainer>
                    
                    <InfoContainer>
                        
                        <BVR_h3 inputColor="#DE72DA">
                            <BVR_span>Volta Mais Rápida</BVR_span><br></br>
                            {props.pilotoVmr}<br></br>
                            {props.tempoVmr}
                        </BVR_h3>

                    </InfoContainer>

                </SubItemContainer>

            </ItemContainer>
            
        </MainContainer>
    )
                    */