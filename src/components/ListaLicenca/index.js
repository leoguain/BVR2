import {Info, Line, Label, BVR_h2, BVR_h3, Container, Card, BorderLine, Content } from './styles.js';

export default function ListaLicenca(props) {

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
    
    const ArrayCarteiras = [cSS,cS,cA,cB]

    //<BorderLine cSS inputColor={carteira[0]?.cor}/>

    return (

        <>
            {ArrayCarteiras.map((carteira, index)=>(
                <Container>
                <Card inputColor={carteira[0]?.cor}>
                    <Content>
                        <BVR_h2>Carteira {carteira[0]?.carteira}</BVR_h2>
                        <Info>
                            <Line inputBottomBorder="none" 
                                    inputBorder="10px" 
                                    inputColor={carteira[0]?.cor}>
                                <Label>
                                    <BVR_h3>PILOTO</BVR_h3>
                                </Label>
                                <Label>
                                    <BVR_h3>ID PSN</BVR_h3>
                                </Label>
                            </Line>
                                {carteira.map((piloto) => (
                                    <Line>
                                        <Label>
                                        <BVR_h3>{piloto.nome}</BVR_h3>
                                        </Label>
                                        <BVR_h3>{piloto.idPsn}</BVR_h3>
                                    </Line>
                                ))}
                        </Info>
                    </Content>
                </Card>
            </Container>
            ))}
        </>
    );
};