import logoSilviaKup2022 from './components/Assets/LogosCampeonatos/logoSilviaKupRed2022.png';
import logoNascar2022 from './components/Assets/LogosCampeonatos/logoNascar2022.png';
import logoMazda2022 from './components/Assets/LogosCampeonatos/logoMazda2022.png';
import logoGT32022 from './components/Assets/LogosCampeonatos/logoGT3B2022.png';
import logoGr42021 from './components/Assets/LogosCampeonatos/logoGr4B2021.png';
import logoToyota2021 from './components/Assets/LogosCampeonatos/logoToyotaLightB2021.png';
import logoBMW2021 from './components/Assets/LogosCampeonatos/logoBMWB2021.png';
import logoRedware2021 from './components/Assets/LogosCampeonatos/logoRedware2021.png';
import logoPorsche2021 from './components/Assets/LogosCampeonatos/logoPorscheCup2021.png';

import campSilviaKup2022 from './components/Assets/Campeoes/campSilvia22.jpg';
import campNascar2022 from './components/Assets/Campeoes/campNascar22.jpg';
import campMazda2022 from './components/Assets/Campeoes/campMazda22.jpg';
import campGT32022 from './components/Assets/Campeoes/campGT3.jpg';
import campGr42021 from './components/Assets/Campeoes/campGR4.jpg';
import campToyota2021 from './components/Assets/Campeoes/campToyota.jpg';
import campBMW2021 from './components/Assets/Campeoes/campBMW.jpg';
import campRedware2021 from './components/Assets/Campeoes/campGT500.jpg';
import campMazda2021 from './components/Assets/Campeoes/campMazda21.jpg';
import campPorsche2021 from './components/Assets/Campeoes/campPorsche21.jpg';

export type CampeonatoProps = {
    id:string,
    title:string,
    logo:string,
    campeao:string,
    colors:{
        bkg:string,
        head:string,
        row:string,
        txt:string,
    }
};

export const campeonatos = 
[
    /*{
        id: "silvia22", 
        title: "Nissan Silvia KUP 2022", 
        logo: logoSilviaKup2022,
        campeao: campSilvia2022,
        colors: {
            bkg:"#e9e9e9",
            head: "#bc0202",
            row: "#5b5b5b",
            txt: "red",
        },
        pistas: [
            {etapa:"1", nome: "Autódromo de Intelagos"},
            {etapa:"2", nome: "Alsace - Vila"},
            {etapa:"3", nome: "Tokyo Exp. Sul Rev."},
            {etapa:"4", nome: "Mount Panorama"},
            {etapa:"5", nome: "Deep Forest Raceway"},
            {etapa:"6", nome: "Fuji Speedway"},
        ],
        resultados:[
            {pos:"1", nome:"Gustavo Viaro", id:"CCGTBR_Gustavo", penal:"0", descarte:"17", total:"60",
             pontos:[{et:"1", pt:"20"},{et:"2", pt:"17"},{et:"3", pt:"20"},
             {et:"4", pt:"20"},{et:"5", pt:"0"},{et:"6", pt:"0"},]},
        ],
    },*/
    {
        id: "nascar22", 
        title: "Nascar Series Cup 2022", 
        logo: logoNascar2022,
        campeao: campNascar2022,
        colors: {
            bkg:"black",
            head: "#0079c2",
            row: "#5b5b5b",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "Daytona Road"},
            {etapa:"2", nome: "Blue Moon Speedway"},
            {etapa:"3", nome: "Laguna Seca"},
            {etapa:"4", nome: "Watkins Glen"},
            {etapa:"5", nome: "High Speed Ring"},
            {etapa:"6", nome: "Daytona Tri-Oval"},
        ],
        resultados:[
            {pos:"1", nome:"Gustavo Viaro", id:"CCGTBR_Gustavo", penal:"0", descarte:"21", total:"157",
             pontos:[{et:"1", pt:"30"},{et:"2", pt:"30"},{et:"3", pt:"25"},
                    {et:"4", pt:"30"},{et:"5", pt:"21"},{et:"6", pt:"42"},
                    ]
            },
            {pos:"2", nome:"Milton Garcia", id:"KMZ-R_SGarcia", penal:"0", descarte:"0", total:"136",
             pontos:[{et:"1", pt:"1"},{et:"2", pt:"0"},{et:"3", pt:"30"},
                    {et:"4", pt:"25"},{et:"5", pt:"30"},{et:"6", pt:"50"},
                    ]
            },
            {pos:"3", nome:"Ednaldo Martins", id:"KMZ_Naldo", penal:"0", descarte:"12", total:"129",
             pontos:[{et:"1", pt:"12"},{et:"2", pt:"15"},{et:"3", pt:"21"},
                    {et:"4", pt:"21"},{et:"5", pt:"12"},{et:"6", pt:"60"},
                    ]
            },
            {pos:"4", nome:"Luis Ferruthio", id:"FERRUTH_SPEEDBR", penal:"0", descarte:"0", total:"109",
             pontos:[{et:"1", pt:"25"},{et:"2", pt:"12"},{et:"3", pt:"18"},
                    {et:"4", pt:"18"},{et:"5", pt:"0"},{et:"6", pt:"36"},
                    ]
            },
            {pos:"5", nome:"Fabiano Furini", id:"FURINI_SPEEDBR", penal:"0", descarte:"0", total:"96",
             pontos:[{et:"1", pt:"18"},{et:"2", pt:"18"},{et:"3", pt:"0"},
                    {et:"4", pt:"12"},{et:"5", pt:"18"},{et:"6", pt:"30"},
                    ]
            },
            {pos:"6", nome:"Fábian Viegas", id:"FABIAN_SPEEDBR", penal:"0", descarte:"0", total:"84",
             pontos:[{et:"1", pt:"21"},{et:"2", pt:"21"},{et:"3", pt:"12"},
                    {et:"4", pt:"0"},{et:"5", pt:"10"},{et:"6", pt:"20"},
                    ]
            },
            {pos:"7", nome:"Yuri Demetrius", id:"KMZ_YuriGrush", penal:"0", descarte:"0", total:"74",
             pontos:[{et:"1", pt:"8"},{et:"2", pt:"10"},{et:"3", pt:"0"},
                    {et:"4", pt:"15"},{et:"5", pt:"25"},{et:"6", pt:"16"},
                    ]
            },
            {pos:"8", nome:"Ronald Carvalho", id:"roonald_f1", penal:"0", descarte:"0", total:"71",
             pontos:[{et:"1", pt:"15"},{et:"2", pt:"7"},{et:"3", pt:"0"},
                    {et:"4", pt:"10"},{et:"5", pt:"15"},{et:"6", pt:"24"},
                    ]
            },
            {pos:"9", nome:"Cláudio Faria", id:"CCGTBR-c_faria", penal:"0", descarte:"0", total:"42",
             pontos:[{et:"1", pt:"5"},{et:"2", pt:"8"},{et:"3", pt:"15"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"14"},
                    ]
            },
            {pos:"10", nome:"Cristiano Dutra", id:"CCGTBR_Cristiano", penal:"0", descarte:"0", total:"37",
             pontos:[{et:"1", pt:"4"},{et:"2", pt:"5"},{et:"3", pt:"8"},
                    {et:"4", pt:"0"},{et:"5", pt:"8"},{et:"6", pt:"12"},
                    ]
            },
            {pos:"11", nome:"Rafael Garcia", id:"rafael_garcia79", penal:"4", descarte:"0", total:"31",
             pontos:[{et:"1", pt:"10"},{et:"2", pt:"25"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"12", nome:"Francisco da Silva", id:"ELEKTROEDD", penal:"0", descarte:"0", total:"30",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"10"},
                    {et:"4", pt:"3"},{et:"5", pt:"7"},{et:"6", pt:"10"},
                    ]
            },
            {pos:"13", nome:"Marcos André da Silva", id:"CCGTBR_Borges", penal:"0", descarte:"0", total:"15",
             pontos:[{et:"1", pt:"7"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"8"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"14", nome:"Jonathan Diego", id:"E-Boss_Jonathan", penal:"0", descarte:"0", total:"12",
             pontos:[{et:"1", pt:"6"},{et:"2", pt:"6"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
        ],
    },
    {
        id: "mazda22", 
        title: "Mazda Touring Cup 2022", 
        logo: logoMazda2022,
        campeao: campMazda2022,
        colors: {
            bkg:"#5b5b5b",
            head: "#0d91b0",
            row: "#312d4c",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "Sardegna C"},
            {etapa:"2", nome: "Horse Thief Mile"},
            {etapa:"3", nome: "Trial Mountain"},
            {etapa:"4", nome: "Tsukuba Circuit"},
        ],
        resultados:[
            {pos:"1", nome:"Gustavo Viaro", id:"CCGTBR_Gustavo", penal:"0", descarte:"17", total:"60",
             pontos:[{et:"1", pt:"20"},{et:"2", pt:"17"},{et:"3", pt:"20"},{et:"4", pt:"20"},]},
            {pos:"2", nome:"João Paulo Facci", id:"JPFACCI_SPEEDBR", penal:"0", descarte:"0", total:"53",
             pontos:[{et:"1", pt:"15"},{et:"2", pt:"20"},{et:"3", pt:"18"},{et:"4", pt:"0"},]},
            {pos:"3", nome:"Luis Ferruthio", id:"FERRUTHI_SPEEDBR", penal:"0", descarte:"0", total:"51",
             pontos:[{et:"1", pt:"18"},{et:"2", pt:"18"},{et:"3", pt:"15"},{et:"4", pt:"0"},]},
             {pos:"4", nome:"Fabiano Furini", id:"FURINI_SPEEDBR", penal:"0", descarte:"11", total:"49",
             pontos:[{et:"1", pt:"11"},{et:"2", pt:"15"},{et:"3", pt:"16"},{et:"4", pt:"18"},]},
             {pos:"5", nome:"Ronald Carvalho", id:"roonald_f1", penal:"0", descarte:"12", total:"48",
             pontos:[{et:"1", pt:"12"},{et:"2", pt:"16"},{et:"3", pt:"17"},{et:"4", pt:"15"},]},
             {pos:"6", nome:"Thomas Penteado", id:"NeoCactuar", penal:"0", descarte:"0", total:"47",
             pontos:[{et:"1", pt:"17"},{et:"2", pt:"13"},{et:"3", pt:"0"},{et:"4", pt:"17"},]},
             {pos:"7", nome:"Ednaldo Martins", id:"KMZ_Naldo", penal:"0", descarte:"13", total:"44",
             pontos:[{et:"1", pt:"13"},{et:"2", pt:"14"},{et:"3", pt:"14"},{et:"4", pt:"16"},]},
             {pos:"8", nome:"José Eduardo Filho", id:"PCR_Dudu10", penal:"0", descarte:"0", total:"41",
             pontos:[{et:"1", pt:"16"},{et:"2", pt:"0"},{et:"3", pt:"11"},{et:"4", pt:"14"},]},
             {pos:"9", nome:"Luis Vilches", id:"luisvilches", penal:"0", descarte:"9", total:"34",
             pontos:[{et:"1", pt:"10"},{et:"2", pt:"11"},{et:"3", pt:"9"},{et:"4", pt:"13"},]},
             {pos:"10", nome:"Cléber Carlos", id:"CLEBER_SPEEDBR", penal:"0", descarte:"0", total:"33",
             pontos:[{et:"1", pt:"9"},{et:"2", pt:"0"},{et:"3", pt:"12"},{et:"4", pt:"12"},]},
             {pos:"11", nome:"Pedro Bernardo", id:"Petros_pro", penal:"0", descarte:"8", total:"29",
             pontos:[{et:"1", pt:"8"},{et:"2", pt:"10"},{et:"3", pt:"8"},{et:"4", pt:"11"},]},
             {pos:"12", nome:"Fábian Viegas", id:"FABIAN_SPEEDBR", penal:"0", descarte:"0", total:"27",
             pontos:[{et:"1", pt:"14"},{et:"2", pt:"0"},{et:"3", pt:"13"},{et:"4", pt:"0"},]},
             {pos:"13", nome:"Leandro Borges", id:"Caua-1308", penal:"0", descarte:"0", total:"22",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"12"},{et:"3", pt:"10"},{et:"4", pt:"0"},]},
             {pos:"14", nome:"Luciano Five", id:"lppfive", penal:"0", descarte:"0", total:"0",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},{et:"4", pt:"0"},]},
        ],
    },
    {
        id: "gt322", 
        title: "GT3 Cup 2022", 
        logo: logoGT32022,
        campeao: campGT32022,
        colors: {
            bkg:"#1d1d1d",
            head: "#00bb1c",
            row: "#1d1d1d",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "Laguna Seca"},
            {etapa:"2", nome: "Autopolis Int."},
            {etapa:"3", nome: "Mount Panorama"},
            {etapa:"4", nome: "Autodromo Monza S/C"},
            {etapa:"5", nome: "Blue Moon Speedway"},
            {etapa:"6", nome: "Autódromo de Intelagos"},
            {etapa:"7", nome: "Nürburgring 24h"},
            {etapa:"8", nome: "Spa"},
        ],
        resultados:[
            {pos:"1", nome:"Gustavo Viaro", id:"CCGTBR_Gustavo", penal:"0", descarte:"25", total:"170",
             pontos:[{et:"1", pt:"25"},{et:"2", pt:"25"},{et:"3", pt:"30"},{et:"4", pt:"30"},
                    {et:"5", pt:"25"},{et:"6", pt:"25"},{et:"7", pt:"30"},{et:"8", pt:"30"},
                    ]
            },
            {pos:"2", nome:"José Eduardo Filho", id:"PCR_Dudu10", penal:"0", descarte:"3", total:"142",
             pontos:[{et:"1", pt:"30"},{et:"2", pt:"12"},{et:"3", pt:"6"},{et:"4", pt:"21"},
                    {et:"5", pt:"3"},{et:"6", pt:"30"},{et:"7", pt:"18"},{et:"8", pt:"25"},
                    ]
            },
            {pos:"3", nome:"João Paulo Facci", id:"JPFACCI_SPEEDBR", penal:"0", descarte:"0", total:"120",
             pontos:[{et:"1", pt:"12"},{et:"2", pt:"15"},{et:"3", pt:"0"},{et:"4", pt:"9"},
                    {et:"5", pt:"30"},{et:"6", pt:"21"},{et:"7", pt:"15"},{et:"8", pt:"18"},
                    ]
            },
            {pos:"4", nome:"Gerson Garcia", id:"Gersão Hamilton", penal:"0", descarte:"0", total:"116",
             pontos:[{et:"1", pt:"18"},{et:"2", pt:"1"},{et:"3", pt:"15"},{et:"4", pt:"15"},
                    {et:"5", pt:"21"},{et:"6", pt:"0"},{et:"7", pt:"25"},{et:"8", pt:"21"},
                    ]
            },
            {pos:"5", nome:"Ednaldo Martins", id:"KMZ_Naldo", penal:"0", descarte:"6", total:"105",
             pontos:[{et:"1", pt:"6"},{et:"2", pt:"9"},{et:"3", pt:"12"},{et:"4", pt:"18"},
                    {et:"5", pt:"15"},{et:"6", pt:"18"},{et:"7", pt:"21"},{et:"8", pt:"12"},
                    ]
            },
            {pos:"6", nome:"Fabiano Furini", id:"FURINI_SPEEDBR", penal:"0", descarte:"0", total:"100",
             pontos:[{et:"1", pt:"3"},{et:"2", pt:"18"},{et:"3", pt:"18"},{et:"4", pt:"25"},
                    {et:"5", pt:"9"},{et:"6", pt:"15"},{et:"7", pt:"12"},{et:"8", pt:"0"},
                    ]
            },
            {pos:"7", nome:"Equipe BVR", id:"-", penal:"8", descarte:"1", total:"98",
             pontos:[{et:"1", pt:"1"},{et:"2", pt:"30"},{et:"3", pt:"21"},{et:"4", pt:"12"},
                    {et:"5", pt:"18"},{et:"6", pt:"1"},{et:"7", pt:"9"},{et:"8", pt:"15"},
                    ]
            },
            {pos:"8", nome:"Fábian Viegas", id:"FABIAN_SPEEDBR", penal:"0", descarte:"0", total:"65",
             pontos:[{et:"1", pt:"15"},{et:"2", pt:"6"},{et:"3", pt:"25"},{et:"4", pt:"6"},
                    {et:"5", pt:"0"},{et:"6", pt:"12"},{et:"7", pt:"0"},{et:"8", pt:"1"},
                    ]
            },
            {pos:"9", nome:"Luis Ferruthio", id:"FERRUTH_SPEEDBR", penal:"0", descarte:"1", total:"54",
             pontos:[{et:"1", pt:"9"},{et:"2", pt:"21"},{et:"3", pt:"1"},{et:"4", pt:"3"},
                    {et:"5", pt:"6"},{et:"6", pt:"3"},{et:"7", pt:"6"},{et:"8", pt:"6"},
                    ]
            },
            {pos:"10", nome:"Cléber Carlos", id:"CLEBER_SPEEDBR", penal:"0", descarte:"0", total:"25",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"3"},{et:"4", pt:"1"},
                    {et:"5", pt:"0"},{et:"6", pt:"9"},{et:"7", pt:"3"},{et:"8", pt:"9"},
                    ]
            },
            {pos:"11", nome:"Alessandro Gratão", id:"AleGratao75", penal:"0", descarte:"0", total:"24",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"3"},{et:"3", pt:"9"},{et:"4", pt:"0"},
                    {et:"5", pt:"12"},{et:"6", pt:"0"},{et:"7", pt:"0"},{et:"8", pt:"0"},
                    ]
            },
            {pos:"12", nome:"Eduardo Schaarschmidt", id:"DuduToretto", penal:"0", descarte:"0", total:"21",
             pontos:[{et:"1", pt:"21"},{et:"2", pt:"0"},{et:"3", pt:"0"},{et:"4", pt:"0"},
                    {et:"5", pt:"0"},{et:"6", pt:"0"},{et:"7", pt:"0"},{et:"8", pt:"0"},
                    ]
            },
            {pos:"13", nome:"Marco Godoi", id:"Cel_God", penal:"0", descarte:"0", total:"0",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},{et:"4", pt:"0"},
                    {et:"5", pt:"0"},{et:"6", pt:"0"},{et:"7", pt:"0"},{et:"8", pt:"0"},
                    ]
            },
            {pos:"14", nome:"Luis Vilches", id:"luisvilches", penal:"0", descarte:"0", total:"0",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},{et:"4", pt:"0"},
                    {et:"5", pt:"0"},{et:"6", pt:"0"},{et:"7", pt:"0"},{et:"8", pt:"0"},
                    ]
            },
        ],
    },
    {
        id: "gr421", 
        title: "Multi Gr.4 $tream 2021", 
        logo: logoGr42021,
        campeao: campGr42021,
        colors: {
            bkg:"black",
            head: "#d19a00",
            row: "#5b5b5b",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "Red Bull Ring"},
            {etapa:"2", nome: "Big Willow"},
            {etapa:"3", nome: "Catalunha"},
            {etapa:"4", nome: "Blue Moon Speedway A"},
            {etapa:"5", nome: "Autodromo Monza"},
            {etapa:"6", nome: "Autódromo de Interlagos"},
        ],
        resultados:[
            {pos:"1", nome:"Gustavo Viaro", id:"CCGTBR_Gustavo", penal:"0", descarte:"-", total:"131",
             pontos:[{et:"1", pt:"30"},{et:"2", pt:"21"},{et:"3", pt:"25"},
                    {et:"4", pt:"0"},{et:"5", pt:"30"},{et:"6", pt:"25"},
                    ]
            },
            {pos:"2", nome:"Luis Ferruthio", id:"FERRUTH_SPEEDBR", penal:"0", descarte:"-", total:"127",
             pontos:[{et:"1", pt:"25"},{et:"2", pt:"15"},{et:"3", pt:"18"},
                    {et:"4", pt:"30"},{et:"5", pt:"18"},{et:"6", pt:"21"},
                    ]
            },
            {pos:"3", nome:"João Paulo Facci", id:"JPFACCI_SPEEDBR", penal:"0", descarte:"-", total:"121",
             pontos:[{et:"1", pt:"21"},{et:"2", pt:"18"},{et:"3", pt:"21"},
                    {et:"4", pt:"21"},{et:"5", pt:"25"},{et:"6", pt:"15"},
                    ]
            },
            {pos:"4", nome:"João Cláudio Pessoa", id:"GRID_JOAOSOF", penal:"0", descarte:"-", total:"115",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"30"},{et:"3", pt:"30"},
                    {et:"4", pt:"25"},{et:"5", pt:"0"},{et:"6", pt:"30"},
                    ]
            },
            {pos:"5", nome:"Rafael Garcia", id:"rafael_garcia79", penal:"0", descarte:"-", total:"97",
             pontos:[{et:"1", pt:"15"},{et:"2", pt:"25"},{et:"3", pt:"15"},
                    {et:"4", pt:"18"},{et:"5", pt:"15"},{et:"6", pt:"9"},
                    ]
            },
            {pos:"6", nome:"Ronald Carvalho", id:"roonald_f1", penal:"0", descarte:"-", total:"63",
             pontos:[{et:"1", pt:"6"},{et:"2", pt:"0"},{et:"3", pt:"9"},
                    {et:"4", pt:"15"},{et:"5", pt:"21"},{et:"6", pt:"12"},
                    ]
            },
            {pos:"7", nome:"Gustavo dos Santos", id:"Ghustaw", penal:"0", descarte:"-", total:"36",
             pontos:[{et:"1", pt:"9"},{et:"2", pt:"0"},{et:"3", pt:"12"},
                    {et:"4", pt:"12"},{et:"5", pt:"0"},{et:"6", pt:"3"},
                    ]
            },
            {pos:"8", nome:"Luis Vilches", id:"luisvilches", penal:"0", descarte:"-", total:"31",
             pontos:[{et:"1", pt:"1"},{et:"2", pt:"6"},{et:"3", pt:"3"},
                    {et:"4", pt:"9"},{et:"5", pt:"12"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"9", nome:"Fábian Viegas", id:"FABIAN_SPEEDBR", penal:"0", descarte:"-", total:"27",
             pontos:[{et:"1", pt:"18"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"3"},{et:"5", pt:"0"},{et:"6", pt:"6"},
                    ]
            },
            {pos:"10", nome:"Murilo H da Silva", id:"MYTH_MuriloSilva", penal:"4", descarte:"-", total:"26",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"12"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"18"},
                    ]
            },
            {pos:"11", nome:"Marco Godoi", id:"Cel_God", penal:"0", descarte:"-", total:"19",
             pontos:[{et:"1", pt:"3"},{et:"2", pt:"3"},{et:"3", pt:"6"},
                    {et:"4", pt:"6"},{et:"5", pt:"0"},{et:"6", pt:"1"},
                    ]
            },
            {pos:"12", nome:"Ronan Costa Berto", id:"Bertorcsb", penal:"0", descarte:"-", total:"1",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"1"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"13", nome:"Marco Santos", id:"MarcodiSantti", penal:"0", descarte:"-", total:"0",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"14", nome:"Leandro Borges", id:"Caua-1308", penal:"0", descarte:"-", total:"0",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
        ],
    },
    {
        id: "toyota21", 
        title: "Toyota $tream Light 2021", 
        logo: logoToyota2021,
        campeao: campToyota2021,
        colors: {
            bkg:"black",
            head: "#d19a00",
            row: "#5b5b5b",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "BB Raceway"},
            {etapa:"2", nome: "Tsukuba Circuit"},
            {etapa:"3", nome: "Autopolis Curta"},
            {etapa:"4", nome: "Kyoto - Yamagiwa"},
            {etapa:"5", nome: "Suzuka Circuit"},
            {etapa:"6", nome: "Fuji - Curto"},
        ],
        resultados:[
            {pos:"1", nome:"João Paulo Facci", id:"JPFACCI_SPEEDBR", penal:"0", descarte:"-", total:"104",
             pontos:[{et:"1", pt:"20"},{et:"2", pt:"16"},{et:"3", pt:"20"},
                    {et:"4", pt:"16"},{et:"5", pt:"18"},{et:"6", pt:"14"},
                    ]
            },
            {pos:"2", nome:"Gerson Garcia", id:"Gersão Hamilton", penal:"0", descarte:"-", total:"98",
             pontos:[{et:"1", pt:"18"},{et:"2", pt:"20"},{et:"3", pt:"14"},
                    {et:"4", pt:"18"},{et:"5", pt:"10"},{et:"6", pt:"18"},
                    ]
            },
            {pos:"3", nome:"Luis Ferruthio", id:"FERRUTH_SPEEDBR", penal:"0", descarte:"-", total:"84",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"18"},{et:"3", pt:"16"},
                    {et:"4", pt:"14"},{et:"5", pt:"20"},{et:"6", pt:"16"},
                    ]
            },
            {pos:"4", nome:"Ronald Carvalho", id:"roonald_f1", penal:"0", descarte:"-", total:"80",
             pontos:[{et:"1", pt:"14"},{et:"2", pt:"0"},{et:"3", pt:"18"},
                    {et:"4", pt:"20"},{et:"5", pt:"16"},{et:"6", pt:"12"},
                    ]
            },
            {pos:"5", nome:"Fabiano Furini", id:"FURINI_SPEEDBR", penal:"0", descarte:"-", total:"80",
             pontos:[{et:"1", pt:"16"},{et:"2", pt:"12"},{et:"3", pt:"8"},
                    {et:"4", pt:"10"},{et:"5", pt:"14"},{et:"6", pt:"20"},
                    ]
            },
            {pos:"6", nome:"Thiago Lima", id:"ThiagoGt_Rbr_Am", penal:"0", descarte:"-", total:"48",
             pontos:[{et:"1", pt:"8"},{et:"2", pt:"14"},{et:"3", pt:"12"},
                    {et:"4", pt:"6"},{et:"5", pt:"8"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"7", nome:"Ednaldo Martins", id:"KMZ_Naldo", penal:"0", descarte:"-", total:"44",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"10"},
                    {et:"4", pt:"12"},{et:"5", pt:"12"},{et:"6", pt:"10"},
                    ]
            },
            {pos:"8", nome:"Paulo Ramos", id:"Paulo_baiano27", penal:"6", descarte:"-", total:"32",
             pontos:[{et:"1", pt:"4"},{et:"2", pt:"10"},{et:"3", pt:"6"},
                    {et:"4", pt:"8"},{et:"5", pt:"2"},{et:"6", pt:"8"},
                    ]
            },
            {pos:"9", nome:"Marco Aurélio Cerqueira", id:"Marco_RJ", penal:"3", descarte:"-", total:"25",
             pontos:[{et:"1", pt:"10"},{et:"2", pt:"6"},{et:"3", pt:"4"},
                    {et:"4", pt:"4"},{et:"5", pt:"4"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"10", nome:"Cléber Carlos", id:"CLEBER_SPEEDBR", penal:"0", descarte:"-", total:"24",
             pontos:[{et:"1", pt:"12"},{et:"2", pt:"4"},{et:"3", pt:"0"},
                    {et:"4", pt:"2"},{et:"5", pt:"0"},{et:"6", pt:"6"},
                    ]
            },
            {pos:"11", nome:"Walter de Moraes", id:"waltinhorpm74", penal:"0", descarte:"-", total:"12",
             pontos:[{et:"1", pt:"2"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"6"},{et:"6", pt:"4"},
                    ]
            },
            {pos:"12", nome:"Lucas Macam", id:"KMZ_Lucas", penal:"0", descarte:"-", total:"8",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"8"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"13", nome:"Aldair Martins", id:"Aldair_Martins", penal:"0", descarte:"-", total:"6",
             pontos:[{et:"1", pt:"6"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"14", nome:"Walter dos Santos", id:"walter-wa42", penal:"0", descarte:"-", total:"4",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"2"},{et:"3", pt:"2"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
        ],
    },
    {
        id: "bmw21", 
        title: "BMW $tream Challenge 2021", 
        logo: logoBMW2021,
        campeao: campBMW2021,
        colors: {
            bkg:"black",
            head: "#d19a00",
            row: "#5b5b5b",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "Brands Hatch"},
            {etapa:"2", nome: "Lago Maggiore O"},
            {etapa:"3", nome: "Goodwood"},
            {etapa:"4", nome: "Red Bull Ring Curta"},
            {etapa:"5", nome: "Sardegna C II"},
            {etapa:"6", nome: "Nürburgring GP"},
        ],
        resultados:[
            {pos:"1", nome:"Ronan Costa Berto", id:"Bertorcsb", penal:"0", descarte:"-", total:"98",
             pontos:[{et:"1", pt:"12"},{et:"2", pt:"20"},{et:"3", pt:"20"},
                    {et:"4", pt:"14"},{et:"5", pt:"20"},{et:"6", pt:"12"},
                    ]
            },
            {pos:"2", nome:"Luan Muniz", id:"Luan_mmuniz89", penal:"0", descarte:"-", total:"78",
             pontos:[{et:"1", pt:"10"},{et:"2", pt:"10"},{et:"3", pt:"16"},
                    {et:"4", pt:"18"},{et:"5", pt:"10"},{et:"6", pt:"14"},
                    ]
            },
            {pos:"3", nome:"Luis VIlches", id:"luisvilches", penal:"0", descarte:"-", total:"78",
             pontos:[{et:"1", pt:"14"},{et:"2", pt:"14"},{et:"3", pt:"18"},
                    {et:"4", pt:"10"},{et:"5", pt:"14"},{et:"6", pt:"8"},
                    ]
            },
            {pos:"4", nome:"Ronald Carvalho", id:"roonald_f1", penal:"0", descarte:"-", total:"74",
             pontos:[{et:"1", pt:"16"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"20"},{et:"5", pt:"18"},{et:"6", pt:"20"},
                    ]
            },
            {pos:"5", nome:"Gustavo dos Santos", id:"Ghustaw", penal:"0", descarte:"-", total:"60",
             pontos:[{et:"1", pt:"18"},{et:"2", pt:"16"},{et:"3", pt:"12"},
                    {et:"4", pt:"6"},{et:"5", pt:"8"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"6", nome:"Alessandro Gratão", id:"AlêGratão76", penal:"7", descarte:"-", total:"59",
             pontos:[{et:"1", pt:"4"},{et:"2", pt:"18"},{et:"3", pt:"0"},
                    {et:"4", pt:"12"},{et:"5", pt:"16"},{et:"6", pt:"16"},
                    ]
            },
            {pos:"7", nome:"Eduardo Alecrim", id:"Alecrim7", penal:"12", descarte:"-", total:"54",
             pontos:[{et:"1", pt:"20"},{et:"2", pt:"12"},{et:"3", pt:"0"},
                    {et:"4", pt:"16"},{et:"5", pt:"0"},{et:"6", pt:"18"},
                    ]
            },
            {pos:"8", nome:"Marco Aurélio Cerqueira", id:"Marco_RJ", penal:"0", descarte:"-", total:"40",
             pontos:[{et:"1", pt:"8"},{et:"2", pt:"8"},{et:"3", pt:"8"},
                    {et:"4", pt:"4"},{et:"5", pt:"12"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"9", nome:"Algberg Veloso", id:"Berg_pvh", penal:"0", descarte:"-", total:"38",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"6"},{et:"3", pt:"14"},
                    {et:"4", pt:"8"},{et:"5", pt:"0"},{et:"6", pt:"10"},
                    ]
            },
            {pos:"10", nome:"Cléber Carlos", id:"CLEBER_SPEEDBR", penal:"0", descarte:"-", total:"22",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"2"},{et:"3", pt:"6"},
                    {et:"4", pt:"2"},{et:"5", pt:"6"},{et:"6", pt:"6"},
                    ]
            },
            {pos:"11", nome:"Yuri Stolai", id:"Punhalkiller", penal:"3", descarte:"-", total:"17",
             pontos:[{et:"1", pt:"6"},{et:"2", pt:"0"},{et:"3", pt:"10"},
                    {et:"4", pt:"0"},{et:"5", pt:"4"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"12", nome:"Luciano Braga", id:"KymMastter-kmz", penal:"0", descarte:"-", total:"2",
             pontos:[{et:"1", pt:"2"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"13", nome:"Fábian Viegas", id:"FABIAN_SPEEDBR", penal:"0", descarte:"-", total:"0",
             pontos:[{et:"0", pt:"6"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"14", nome:"Leandro Borges", id:"Caua-1308", penal:"5", descarte:"-", total:"-1",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"4"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
        ],
    },
    {
        id: "redware21", 
        title: "Redware GT500 2021", 
        logo: logoRedware2021,
        campeao: campRedware2021,
        colors: {
            bkg:"black",
            head: "red",
            row: "#5b5b5b",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "Autodromo Monza"},
            {etapa:"2", nome: "La Sarthe"},
            {etapa:"3", nome: "Mount Panorama"},
            {etapa:"4", nome: "Kyoto Miyabi + Yamagiwa"},
            {etapa:"5", nome: "Saint Croix A"},
            {etapa:"6", nome: "Spa"},
        ],
        resultados:[
            {pos:"1", nome:"Murilo H da Silva", id:"MYTH_MuriloSilva", penal:"0", descarte:"0", total:"194",
             pontos:[{et:"1", pt:"40"},{et:"2", pt:"40"},{et:"3", pt:"40"},
                    {et:"4", pt:"34"},{et:"5", pt:"0"},{et:"6", pt:"40"},
                    ]
            },
            {pos:"2", nome:"Gustavo Viaro", id:"CCGTBR_Gustavo", penal:"0", descarte:"0", total:"139",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"34"},{et:"3", pt:"0"},
                    {et:"4", pt:"40"},{et:"5", pt:"40"},{et:"6", pt:"25"},
                    ]
            },
            {pos:"3", nome:"Luis Ferruthio", id:"FERRUTH_SPEEDBR", penal:"0", descarte:"16", total:"134",
             pontos:[{et:"1", pt:"16"},{et:"2", pt:"25"},{et:"3", pt:"22"},
                    {et:"4", pt:"28"},{et:"5", pt:"28"},{et:"6", pt:"31"},
                    ]
            },
            {pos:"4", nome:"João Paulo Facci", id:"JPFACCI_SPEEDBR", penal:"0", descarte:"0", total:"131",
             pontos:[{et:"1", pt:"22"},{et:"2", pt:"22"},{et:"3", pt:"25"},
                    {et:"4", pt:"0"},{et:"5", pt:"34"},{et:"6", pt:"28"},
                    ]
            },
            {pos:"5", nome:"Leonardo Guain", id:"leoguain", penal:"0", descarte:"0", total:"131",
             pontos:[{et:"1", pt:"28"},{et:"2", pt:"19"},{et:"3", pt:"28"},
                    {et:"4", pt:"25"},{et:"5", pt:"31"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"6", nome:"José Eduardo Filho", id:"PCR_Dudu10", penal:"0", descarte:"0", total:"128",
             pontos:[{et:"1", pt:"34"},{et:"2", pt:"16"},{et:"3", pt:"31"},
                    {et:"4", pt:"0"},{et:"5", pt:"25"},{et:"6", pt:"22"},
                    ]
            },
            {pos:"7", nome:"Ronald Carvalho", id:"roonald_f1", penal:"10", descarte:"0", total:"117",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"28"},{et:"3", pt:"34"},
                    {et:"4", pt:"31"},{et:"5", pt:"0"},{et:"6", pt:"34"},
                    ]
            },
            {pos:"8", nome:"Eduardo Schaarschmidt", id:"DuduToretto", penal:"5", descarte:"0", total:"57",
             pontos:[{et:"1", pt:"31"},{et:"2", pt:"31"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"9", nome:"Thomas Penteado", id:"NeoCactuar", penal:"0", descarte:"0", total:"41",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"22"},{et:"5", pt:"0"},{et:"6", pt:"19"},
                    ]
            },
            {pos:"10", nome:"Fábian Viegas", id:"FABIAN_SPEEDBR", penal:"0", descarte:"0", total:"38",
             pontos:[{et:"1", pt:"25"},{et:"2", pt:"13"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"11", nome:"Paulo Tureck", id:"TURECK_SPEEDBR", penal:"15", descarte:"0", total:"37",
             pontos:[{et:"1", pt:"19"},{et:"2", pt:"6"},{et:"3", pt:"0"},
                    {et:"4", pt:"19"},{et:"5", pt:"0"},{et:"6", pt:"8"},
                    ]
            },
            {pos:"12", nome:"Eduardo Alecrim", id:"Alecrim7", penal:"0", descarte:"0", total:"14",
             pontos:[{et:"1", pt:"10"},{et:"2", pt:"4"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"13", nome:"Francisco da Silva", id:"ELEKTROEDD", penal:"0", descarte:"0", total:"10",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"10"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"14", nome:"Jeferson de Souza", id:"Jefimwn221", penal:"0", descarte:"0", total:"8",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"8"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
        ],
    },
    {
        id: "mazda21", 
        title: "Mazda Touring Cup 2021", 
        logo: logoMazda2022,
        campeao: campMazda2021,
        colors: {
            bkg:"#312d4c",
            head: "#0d91b0",
            row: "#312d4c",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "Kyoto Miyabi"},
            {etapa:"2", nome: "Suzuka Leste"},
            {etapa:"3", nome: "Laggo Maggiore C"},
            {etapa:"4", nome: "Sardegna C"},
            {etapa:"5", nome: "Autopolis Curta"},
            {etapa:"6", nome: "Laguna Seca"},
        ],
        resultados:[
            {pos:"1", nome:"João Paulo Facci", id:"JPFACCI_SPEEDBR", penal:"0", descarte:"-", total:"104",
             pontos:[{et:"1", pt:"20"},{et:"2", pt:"16"},{et:"3", pt:"20"},
                    {et:"4", pt:"16"},{et:"5", pt:"18"},{et:"6", pt:"14"},
                    ]
            },
            {pos:"2", nome:"Gerson Garcia", id:"Gersão Hamilton", penal:"0", descarte:"-", total:"98",
             pontos:[{et:"1", pt:"18"},{et:"2", pt:"20"},{et:"3", pt:"14"},
                    {et:"4", pt:"18"},{et:"5", pt:"10"},{et:"6", pt:"18"},
                    ]
            },
            {pos:"3", nome:"Luis Ferruthio", id:"FERRUTH_SPEEDBR", penal:"0", descarte:"-", total:"84",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"18"},{et:"3", pt:"16"},
                    {et:"4", pt:"14"},{et:"5", pt:"20"},{et:"6", pt:"16"},
                    ]
            },
            {pos:"4", nome:"Ronald Carvalho", id:"roonald_f1", penal:"0", descarte:"-", total:"80",
             pontos:[{et:"1", pt:"14"},{et:"2", pt:"0"},{et:"3", pt:"18"},
                    {et:"4", pt:"20"},{et:"5", pt:"16"},{et:"6", pt:"12"},
                    ]
            },
            {pos:"5", nome:"Fabiano Furini", id:"FURINI_SPEEDBR", penal:"0", descarte:"-", total:"80",
             pontos:[{et:"1", pt:"16"},{et:"2", pt:"12"},{et:"3", pt:"8"},
                    {et:"4", pt:"10"},{et:"5", pt:"14"},{et:"6", pt:"20"},
                    ]
            },
            {pos:"6", nome:"Thiago Lima", id:"ThiagoGt_Rbr_Am", penal:"0", descarte:"-", total:"48",
             pontos:[{et:"1", pt:"8"},{et:"2", pt:"14"},{et:"3", pt:"12"},
                    {et:"4", pt:"6"},{et:"5", pt:"8"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"7", nome:"Ednaldo Martins", id:"KMZ_Naldo", penal:"0", descarte:"-", total:"44",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"10"},
                    {et:"4", pt:"12"},{et:"5", pt:"12"},{et:"6", pt:"10"},
                    ]
            },
            {pos:"8", nome:"Paulo Ramos", id:"Paulo_baiano27", penal:"6", descarte:"-", total:"32",
             pontos:[{et:"1", pt:"4"},{et:"2", pt:"10"},{et:"3", pt:"6"},
                    {et:"4", pt:"8"},{et:"5", pt:"2"},{et:"6", pt:"8"},
                    ]
            },
            {pos:"9", nome:"Marco Aurélio Cerqueira", id:"Marco_RJ", penal:"3", descarte:"-", total:"25",
             pontos:[{et:"1", pt:"10"},{et:"2", pt:"6"},{et:"3", pt:"4"},
                    {et:"4", pt:"4"},{et:"5", pt:"4"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"10", nome:"Cléber Carlos", id:"CLEBER_SPEEDBR", penal:"0", descarte:"-", total:"24",
             pontos:[{et:"1", pt:"12"},{et:"2", pt:"4"},{et:"3", pt:"0"},
                    {et:"4", pt:"2"},{et:"5", pt:"0"},{et:"6", pt:"6"},
                    ]
            },
            {pos:"11", nome:"Walter de Moraes", id:"waltinhorpm74", penal:"0", descarte:"-", total:"12",
             pontos:[{et:"1", pt:"2"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"6"},{et:"6", pt:"4"},
                    ]
            },
            {pos:"12", nome:"Lucas Macam", id:"KMZ_Lucas", penal:"0", descarte:"-", total:"8",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"8"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"13", nome:"Aldair Martins", id:"Aldair_Martins", penal:"0", descarte:"-", total:"6",
             pontos:[{et:"1", pt:"6"},{et:"2", pt:"0"},{et:"3", pt:"0"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
            {pos:"14", nome:"Walter dos Santos", id:"walter-wa42", penal:"0", descarte:"-", total:"4",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"2"},{et:"3", pt:"2"},
                    {et:"4", pt:"0"},{et:"5", pt:"0"},{et:"6", pt:"0"},
                    ]
            },
        ],
    },
    {
        id: "porsche21", 
        title: "Porsche Cup Gemignani 2021", 
        logo: logoPorsche2021,
        campeao: campPorsche2021,
        colors: {
            bkg:"#1d1d1d",
            head: "#d97316",
            row: "#1d1d1d",
            txt: "white",
        },
        pistas: [
            {etapa:"1", nome: "Autopolis Int."},
            {etapa:"2", nome: "Sardegna A II"},
            {etapa:"3", nome: "Autodromo Monza"},
            {etapa:"4", nome: "Mount Panorama"},
            {etapa:"5", nome: "Lago Maggiore L"},
            {etapa:"6", nome: "Fuji Speedway"},
            {etapa:"7", nome: "Spa"},
            {etapa:"8", nome: "Red Bull Ring"},
        ],
        resultados:[
            {pos:"1", nome:"Luis Ferruthio", id:"FERRUTH_SPEEDBR", penal:"0", descarte:"-", total:"143",
             pontos:[{et:"1", pt:"17"},{et:"2", pt:"18"},{et:"3", pt:"18"},{et:"4", pt:"17"},
                    {et:"5", pt:"18"},{et:"6", pt:"20"},{et:"7", pt:"20"},{et:"8", pt:"15"},
                    ]
            },
            {pos:"2", nome:"Ronald Carvalho", id:"roonald_f1", penal:"0", descarte:"-", total:"134",
             pontos:[{et:"1", pt:"18"},{et:"2", pt:"0"},{et:"3", pt:"20"},{et:"4", pt:"20"},
                    {et:"5", pt:"20"},{et:"6", pt:"18"},{et:"7", pt:"18"},{et:"8", pt:"20"},
                    ]
            },
            {pos:"3", nome:"José Eduardo Filho", id:"PCR_Dudu10", penal:"0", descarte:"-", total:"133",
             pontos:[{et:"1", pt:"20"},{et:"2", pt:"17"},{et:"3", pt:"17"},{et:"4", pt:"16"},
                    {et:"5", pt:"16"},{et:"6", pt:"14"},{et:"7", pt:"17"},{et:"8", pt:"16"},
                    ]
            },
            {pos:"4", nome:"Leonardo Guain", id:"leoguain", penal:"0", descarte:"-", total:"120",
             pontos:[{et:"1", pt:"16"},{et:"2", pt:"15"},{et:"3", pt:"16"},{et:"4", pt:"18"},
                    {et:"5", pt:"14"},{et:"6", pt:"13"},{et:"7", pt:"14"},{et:"8", pt:"14"},
                    ]
            },
            {pos:"5", nome:"Marco Santos", id:"MarcodiSantti", penal:"0", descarte:"-", total:"110",
             pontos:[{et:"1", pt:"15"},{et:"2", pt:"11"},{et:"3", pt:"15"},{et:"4", pt:"15"},
                    {et:"5", pt:"15"},{et:"6", pt:"15"},{et:"7", pt:"13"},{et:"8", pt:"11"},
                    ]
            },
            {pos:"6", nome:"João Paulo Facci", id:"JPFACCI_SPEEDBR", penal:"0", descarte:"-", total:"108",
             pontos:[{et:"1", pt:"14"},{et:"2", pt:"20"},{et:"3", pt:"11"},{et:"4", pt:"0"},
                    {et:"5", pt:"17"},{et:"6", pt:"17"},{et:"7", pt:"12"},{et:"8", pt:"17"},
                    ]
            },
            {pos:"7", nome:"Jeferson Luis de Souza", id:"Jefimwn221", penal:"5", descarte:"-", total:"100",
             pontos:[{et:"1", pt:"12"},{et:"2", pt:"14"},{et:"3", pt:"12"},{et:"4", pt:"14"},
                    {et:"5", pt:"13"},{et:"6", pt:"12"},{et:"7", pt:"15"},{et:"8", pt:"13"},
                    ]
            },
            {pos:"8", nome:"Rafael Garcia", id:"rafael_garcia79", penal:"5", descarte:"-", total:"96",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"16"},{et:"3", pt:"14"},{et:"4", pt:"10"},
                    {et:"5", pt:"11"},{et:"6", pt:"16"},{et:"7", pt:"16"},{et:"8", pt:"18"},
                    ]
            },
            {pos:"9", nome:"Luis Henrique Vilches", id:"luisvilches", penal:"3", descarte:"-", total:"87",
             pontos:[{et:"1", pt:"11"},{et:"2", pt:"13"},{et:"3", pt:"10"},{et:"4", pt:"12"},
                    {et:"5", pt:"12"},{et:"6", pt:"11"},{et:"7", pt:"11"},{et:"8", pt:"10"},
                    ]
            },
            {pos:"10", nome:"Marco Aurélio Cerqueira", id:"Marco_RJ", penal:"0", descarte:"-", total:"80",
             pontos:[{et:"1", pt:"13"},{et:"2", pt:"12"},{et:"3", pt:"13"},{et:"4", pt:"0"},
                    {et:"5", pt:"10"},{et:"6", pt:"10"},{et:"7", pt:"10"},{et:"8", pt:"12"},
                    ]
            },
            {pos:"11", nome:"Paulo Henrique Monte", id:"PRBR_PH", penal:"0", descarte:"-", total:"67",
             pontos:[{et:"1", pt:"10"},{et:"2", pt:"10"},{et:"3", pt:"8"},{et:"4", pt:"13"},
                    {et:"5", pt:"8"},{et:"6", pt:"9"},{et:"7", pt:"0"},{et:"8", pt:"9"},
                    ]
            },
            {pos:"12", nome:"Taynam Magalhães", id:"TayMaga", penal:"0", descarte:"-", total:"29",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"9"},{et:"4", pt:"11"},
                    {et:"5", pt:"9"},{et:"6", pt:"0"},{et:"7", pt:"0"},{et:"8", pt:"0"},
                    ]
            },
            {pos:"13", nome:"Eduardo Alecrim Morais", id:"Alecrim7", penal:"0", descarte:"-", total:"0",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},{et:"4", pt:"0"},
                    {et:"5", pt:"0"},{et:"6", pt:"0"},{et:"7", pt:"0"},{et:"8", pt:"0"},
                    ]
            },
            {pos:"14", nome:"Matheus Souza", id:"AIR_FORCE_ONE", penal:"0", descarte:"-", total:"0",
             pontos:[{et:"1", pt:"0"},{et:"2", pt:"0"},{et:"3", pt:"0"},{et:"4", pt:"0"},
                    {et:"5", pt:"0"},{et:"6", pt:"0"},{et:"7", pt:"0"},{et:"8", pt:"0"},
                    ]
            },
        ],
    },
]