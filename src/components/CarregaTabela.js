import React from 'react'

var Pilotos = [
      ["01","Leonardo Guain","188"],
      ["02","JP Facci","185"],
      ["03","Thomas Penteado","157"],
      ["04","Ronald Carvalho","132"],
      ["05","Rafael Garcia","102"],
      ["06","Gustavo Viaro","78"],
      ["07","Luis Ferruthio","77"],
      ["08","Fábian Viegas","72"],
      ["09","Fabiano Furini","64"],
      ["10","Cleber Carlos","58"],
      ["11","Cláudio Faria","58"],
      ["12","Yuri Demetrius","47"],
      ["13","Cristiano Dutra","44"],
      ["14","Kelvin Carvalho","32"]
]

const Tabela = () => {
      
      return 

      for (let index = 0; index < 14; index++) {

            <div>{Pilotos[index,0]}</div>;
            <div>{Pilotos[index,1]}</div>;
            <div>{Pilotos[index,2]}</div>;
      }

      for (let index = 0; index < 14; index++) {
            <div 
            style={{
                backgroundColor: "black",
                height: "25px",
                width: "350px",
                display:"flex",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 14,
            }}
            >
                <div
                style={{
                        borderRadius: "3px 3px 3px 10px",
                        height: "16px",
                        width: "50px",
                        backgroundColor: "red",
                        alignItems: "center",
                        padding:"3px",
                }}
                >
                {Pilotos[index,0]}
                </div>
                <div
                    style={{
                        backgroundColor: '#282c34',
                        height: "20px",
                        width: "300px",
                        display:"flex",
                        alignItems: "center",
                        justifyContent: 'space-between',
                        fontSize: 14,
                        paddingLeft:"10px",
                    }}
                >
                    {Pilotos[index,1]}
                </div>
                <div
                    style={{
                        borderRadius: "3px 10px 3px 3px",
                        height: "16px",
                        width: "50px",
                        backgroundColor: "red",
                        alignItems: "center",
                        padding:"3px",
                    }}
                >
                    {Pilotos[index,2]}
                </div>
            </div>
        }
}

  




export default Tabela;