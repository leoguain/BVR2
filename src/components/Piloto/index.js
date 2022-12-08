import { format, parse, differenceInYears } from 'date-fns'
import { BVR_h1, BVR_h2, BVR_h3, BVR_span, PCard, PContainer, PConteudo, PDados, PRanking, PDetalhes, PPosicoes, PImage, PImage2, PImgBox, PLine, PPosicao, PBox } from './styles.js';


export default function Piloto(props) {

    const date = parse(props.dataNascimento, "dd/MM/yyyy", new Date());
    const age = differenceInYears(new Date(), date);
    const urlFoto = "/drivers/" + props.foto;

    const fotoPiloto = new Image();   // Create new img element
    fotoPiloto.src = "../Assets/Pilotos/genericDriver.jpg";
    
    return (
        <PContainer>
                <PCard>
                    <PLine />
                    <PImgBox className="ImgBox">
                        <PImage  src={urlFoto}  />
                    </PImgBox>

                    <PRanking className="Ranking">
                        <BVR_h1>{props.posicao}º</BVR_h1>
                        <BVR_span>no Ranking</BVR_span>
                    </PRanking>

                    <PConteudo>

                        <PDetalhes className="Details">
                            <BVR_h2>{props.nome}<br></br> 
                                <BVR_span>{props.idPsn}</BVR_span>
                            </BVR_h2>
                            
                            <PDados className="Data">
                                <PBox>
                                    <BVR_h3>{age}<BVR_span> anos</BVR_span></BVR_h3>
                                    <BVR_h3><BVR_span>Equipe</BVR_span> {props.equipe}</BVR_h3>
                                    <BVR_h3><BVR_span>Carteira </BVR_span>{props.carteira}</BVR_h3>
                                </PBox>
                                
                                <PBox>
                                    <BVR_h3>{props.pontuacaoGeral} <BVR_span>Pontos</BVR_span></BVR_h3>
                                    <BVR_h3>{props.totalP1} <BVR_span>Vitórias</BVR_span></BVR_h3>
                                    <BVR_h3>{props.numeroPoles} <BVR_span>Poles</BVR_span></BVR_h3>
                                    <BVR_h3>{props.numeroVMR} <BVR_span>VMR</BVR_span></BVR_h3>
                                </PBox>
                                
                            </PDados>

                            

                        </PDetalhes>
                    </PConteudo>
                </PCard>
            </PContainer>
    );
}


/*
<PBox>
    <BVR_h2>
        {props.numeroCampeonatos} <BVR_span>Campeonatos disputados</BVR_span><br></br>
        {props.numeroCorridas} <BVR_span>Corridas disputadas</BVR_span>
    </BVR_h2>
</PBox>

<BVR_span>Número de vezes que chegou em cada colocação:</BVR_span>
                            <PPosicoes>
                                

                                <PPosicao><BVR_h3><BVR_span>P1:</BVR_span> {props.totalP1} </BVR_h3></PPosicao>     
                                <PPosicao><BVR_h3><BVR_span>P2:</BVR_span> {props.totalP2} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P3:</BVR_span> {props.totalP3} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P4:</BVR_span> {props.totalP4} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P5:</BVR_span> {props.totalP5} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P6:</BVR_span> {props.totalP6} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P7:</BVR_span> {props.totalP7} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P8:</BVR_span> {props.totalP8} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P9:</BVR_span> {props.totalP9} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P10:</BVR_span> {props.totalP10} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P11:</BVR_span> {props.totalP11} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P12:</BVR_span> {props.totalP12} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P13:</BVR_span> {props.totalP13} </BVR_h3></PPosicao>
                                <PPosicao><BVR_h3><BVR_span>P14:</BVR_span> {props.totalP14} </BVR_h3></PPosicao>
                            </PPosicoes>

                            */