import React, {useState, useEffect} from 'react';
import Axios from'axios';

import { BVR_h2, BVR_h3, BVR_span, Container, PCard, PContainer, PConteudo, PDados, PDetalhes, PImage, PImgBox, PLine } from './styles.js';

import piloto from '../Assets/Pilotos/p_0001.png';

//<img src={campPorsche2021}>


const Pilotos = () => {

    const [nomePiloto,setNomePiloto] = useState(''); 
    const [idPSN,setIdPSN] = useState(''); 

    return (
        <div>
            <p>Ranking de Pilotos</p>

            <PContainer>
                <PCard>
                    <PLine />
                    <PImgBox>
                        <PImage src={piloto} />
                    </PImgBox>
                    <PConteudo>
                        <PDetalhes>
                            <BVR_h2>Leo Px <br></br> 
                                <BVR_span>BVGtv</BVR_span>
                            </BVR_h2>
                            
                            <PDados>
                                <BVR_h3>1º <BVR_span>Ranking</BVR_span></BVR_h3>
                                <BVR_h3>19 <BVR_span>Vitórias</BVR_span></BVR_h3>
                                <BVR_h3>12 <BVR_span>Poles</BVR_span></BVR_h3>
                                <BVR_h3>180 <BVR_span>Pontos</BVR_span></BVR_h3>
                            </PDados>
                        </PDetalhes>
                    </PConteudo>
                </PCard>

                <PCard>
                    <PLine />
                    <PImgBox>
                        <PImage src={piloto} />
                    </PImgBox>
                    <PConteudo>
                        <PDetalhes>
                            <BVR_h2>Leonardo Guain <br></br> 
                                <BVR_span>BVR</BVR_span>
                            </BVR_h2>
                            
                            <PDados>
                                <BVR_h3>2º <BVR_span>Ranking</BVR_span></BVR_h3>
                                <BVR_h3>15 <BVR_span>Vitórias</BVR_span></BVR_h3>
                                <BVR_h3>6 <BVR_span>Poles</BVR_span></BVR_h3>
                                <BVR_h3>165 <BVR_span>Pontos</BVR_span></BVR_h3>
                            </PDados>
                        </PDetalhes>
                    </PConteudo>
                </PCard>

                <PCard>
                    <PLine />
                    <PImgBox>
                        <PImage src={piloto} />
                    </PImgBox>
                    <PConteudo>
                        <PDetalhes>
                            <BVR_h2>Leonardo Guain <br></br> 
                                <BVR_span>SPEEDBR</BVR_span>
                            </BVR_h2>
                            
                            <PDados>
                                <BVR_h3>3º <BVR_span>Ranking</BVR_span></BVR_h3>
                                <BVR_h3>10 <BVR_span>Vitórias</BVR_span></BVR_h3>
                                <BVR_h3>6 <BVR_span>Poles</BVR_span></BVR_h3>
                                <BVR_h3>140 <BVR_span>Pontos</BVR_span></BVR_h3>
                            </PDados>
                        </PDetalhes>
                    </PConteudo>
                </PCard>

            </PContainer>
        </div>
    )
}

export default Pilotos;