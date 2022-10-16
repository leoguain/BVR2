import React from 'react';


import { Container, CColumn, CHeader, CData, CPiloto, CNome } from './styles';
//import { Piloto } from '../Piloto';

const pilotosSS = [
    {nome:'Gustavo Viaro', id:'Gustavo Viaro'},
    {nome:'Luis Ferruthio', id:'FERRUTH_SPEEDBR'},
    {nome:'João Paulo Facci', id:'JPFACCI_SPEEDBR'},
    {nome:'José Eduardo F Filho', id:'PCR_Dudu10'},
    {nome:'Ronald Carvalho', id:'roonald_1'},
    {nome:'Leonardo Guain', id:'leoguain'},
    {nome:'Murilo H da Silva', id:'MYTH_MuriloSilva'},
    {nome:'Eduardo Schaarschmidt', id:'DuduToretto'},
    {nome:'João Cláudio Pessoa', id:'GRID_JOAOSOF'},
];

const pilotosS = [
    {nome:'Fábian Viegas', id:'FABIAN SPEEDBR'},
    {nome:'Fabiano Furini', id:'FURINI_SPEEDBR'},
    {nome:'Alessandro Albuquerque', id:'AleCareca'},
    {nome:'Rafael Garcia', id:'rafael_garcia79'},
    {nome:'Marco Santos', id:'MarcodiSantti'},
    {nome:'Marco Aurélio Cequeira', id:'Marco_RJ'},
    {nome:'Gerson Garcia', id:'Gersão Hamilton'},
    {nome:'Ednaldo Martins', id:'KMZ_Naldo'},
    {nome:'Milton Garcia', id:'KMZ_RGarcia'},
];

const pilotosA = [
    {nome:'Thomas Penteado', id:'NeoCactuar'},
    {nome:'Yuri Demetrius', id:'KMZ_YuriGrush'},
    {nome:'Cléber Carlos', id:'CLEBER_SPEEDBR'},
    {nome:'Luis Vilches', id:'Luisvilches'},
    {nome:'Cláudio Faria', id:'CCGTBR_ClaudioFaria'},
    {nome:'Marco Godoi', id:'Cel_God'},
    {nome:'Gustavo dos Santos', id:'Ghustaw'},
    {nome:'Leandro Borges', id:'Caua-1308'},
    {nome:'Paulo Henrique Monte', id:'PRBR_PH'},
    {nome:'Jeferson Souza', id:'Jefimwn221'},
    {nome:'Taynam Magalhães', id:'TayMaga'},
    {nome:'Ronan Costa Berto', id:'Bertorcsb'},
    {nome:'Luan Muniz', id:'Luan_mmuniz89'},
    {nome:'Walter de Moraes', id:'waltinhorpm74'},
    {nome:'Alessandro Gratão', id:'AleGratao76'},
    {nome:'Francisco da Silva', id:'ELEKTROEDD'},
    {nome:'Cristiano Dutra', id:'CCGTBR_Cristiano'},
    {nome:'Lucas Macam', id:'KMZ_Lucas'},
];

const pilotosB = [
    {nome:'Gustavp Nery', id:'Gustavo_Nery'},
    {nome:'Juan Matheus', id:'DJ_CARIOCAD27'},
    {nome:'Luciano Braga', id:'KymMastter-kmz'},
    {nome:'Thiago Lima', id:'ThiagoGt_Rbr_Am'},
    {nome:'Walter dos Santos', id:'walter-wa42'},
    {nome:'Yuri Stolai', id:'Punhalkiller'},
    {nome:'Luciano Five', id:'lppfive'},
    {nome:'Pedro Bernardo', id:'Petros'},
    {nome:'Jonathan Diego', id:'-'},
    {nome:'Marcos André da Silva', id:'CCGTBR_Borges'},
    {nome:'Thiago Alves', id:'Thiago Wolf'},
    {nome:'Kelvin Carvalho', id:'KMZ-kelvin.C'},
    {nome:'Algberg Veloso', id:'Berg_pvh'},
    {nome:'Paulo Tureck', id:'TURECK_SPEEDBR'},
    {nome:'Aldair Martins', id:'Aldair_Martins'},
    {nome:'Eduardo Alecrim', id:'Alecrim7'},
    {nome:'Rafael Leite', id:'Rafael_1983_SCCP'},
    {nome:'Matheus Souza', id:'AIR_FORCE_ONE'},
];

const TabelasCarteiras = () => {
    return (
        <Container >
            <CColumn>
                <CHeader>
                    Carteira SS
                </CHeader>
                <CData>
                    <CPiloto 
                        inputBottomBorder="none" 
                        inputWidth="260px" 
                        inputBorder="10px" 
                        inputColor="#282828"
                    >
                        <CNome>
                            Piloto
                        </CNome>
                        <CNome>
                            ID
                        </CNome>
                    </CPiloto>
                        {pilotosSS.map((piloto) => (
                            <CPiloto>
                                <CNome>
                                    {piloto.nome}
                                </CNome>
                                
                                {piloto.id}
                            </CPiloto>
                        ))}
                </CData>
            </CColumn>
            <CColumn>
                <CHeader inputColor="#049dc8">
                    Carteira S
                </CHeader>
                <CData inputColor="#049dc8">
                    <CPiloto inputBottomBorder="none"  inputWidth="260px" inputBorder="10px" inputColor="#086a85">
                        <CNome>
                            Piloto
                        </CNome>
                        <CNome>
                            ID
                        </CNome>
                    </CPiloto>
                    {pilotosS.map((piloto) => (
                        <CPiloto>
                            <CNome>
                                {piloto.nome}
                            </CNome>
                            
                            {piloto.id}
                        </CPiloto>
                    ))}
                </CData>
            </CColumn>
            <CColumn>
                <CHeader inputColor="#00a85a">
                    Carteira A
                </CHeader>
                <CData inputColor="#00a85a">
                    <CPiloto inputBottomBorder="none"  inputWidth="260px" inputBorder="10px" inputColor="#006536">
                        <CNome>
                            Piloto
                        </CNome>
                        <CNome>
                            ID
                        </CNome>
                    </CPiloto>
                    {pilotosA.map((piloto) => (
                        <CPiloto>
                            <CNome>
                                {piloto.nome}
                            </CNome>
                            
                            {piloto.id}
                        </CPiloto>
                    ))}
                </CData>
            </CColumn>
            <CColumn>
                <CHeader inputColor="#ec3237">
                    Carteira B
                </CHeader>
                <CData inputColor="#ec3237">
                    <CPiloto inputBottomBorder="none"  inputWidth="260px" inputBorder="10px" inputColor="#ac060b">
                        <CNome>
                            Piloto
                        </CNome>
                        <CNome>
                            ID
                        </CNome>
                    </CPiloto>

                    {pilotosB.map((piloto) => (
                        <CPiloto>
                            <CNome>
                                {piloto.nome}
                            </CNome>
                            
                            {piloto.id}
                        </CPiloto>
                    ))}
                </CData>
            </CColumn>                    
        </Container>
    )
}

export default TabelasCarteiras;