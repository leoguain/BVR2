import logoBVRB from "./components/Assets/liga_bvr_gt_branco.png";

export type NoticiasProps = {
  id: string;
  title: string;
  data: string;
  texto: string;
  image: string;
  url: string;
};

export const noticias = [
  {
    id: "6",
    title: "Novas silhuetas de carros anunciadas",
    data: "10/12/2022",
    texto:
      "Como de costume, Kazunori Yamauchi postou ontem a noite em seu twitter mais uma imagem com as silhuetas dos carros que virão no próximo update.",
    image: "",
    url: "https://www.instagram.com/p/Cl_Z-sjusWo/",
  },
  {
    id: "5",
    title: "Atualização 1.26 chega recheada de conteúdo",
    data: "24/11/2022",
    texto:
      "Carros novos, pista nova, enquete cheia de prêmios, atualização do modo online! Essas são algumas das novidades da nova atualização do Gran Turismo 7. Lançada hoje, a atualização de aniversário da franquia rendeu um vídeo com muitas coisas novas. ",
    image: "",
    url: "https://www.youtube.com/watch?v=93uchaHAbWE",
  },
  {
    id: "4",
    title: "Gustavo Viaro campeão do Nissan Silvia Kup",
    data: "21/11/2022",
    texto:
      "Mesmo não vencendo a última etapa, Gustavo Viaro da CCGTBR se consagrou campeão do Nissan Silvia Kup. É o quinto título do gaúcho na Liga BVR.",
    image: "",
    url: "https://www.instagram.com/p/ClOm4JUu9D4/",
  },
  {
    id: "3",
    title: "Fabiano Furini vence em Suzuka",
    data: "19/11/2022",
    texto:
      "Fabiano Furini da SpeedBr vence a última etapa do Nissan Silvia Kup. Com o resultado, o gaúcho se projeta para a terceira posição no ranking geral. Os resultados serão confirmados oficialmente na próxima segunda-feira.",
    image: logoBVRB,
    url: "https://www.youtube.com/watch?v=CM1qkWd0t3M",
  },
  {
    id: "2",
    title: "Exploit de teleport em Lago Maggiore",
    data: "18/11/2022",
    texto:
      "Está difícil vencer a última missão de Endurance em Lago Maggiore? Seus problemas acabaram!! Confira este exploit que está salvando a vida de muita gente.",
    image: logoBVRB,
    url: "https://www.youtube.com/watch?v=dX-8hJhSd8g&t=14s",
  },
  {
    id: "1",
    title: "Atualização nova no GT7!",
    data: "20/10/2022",
    texto:
      "Hoje tivemos a atualização 1.25 no Gran Turismo 7. A atualização conta com a inclusão de 3 novos carros, além de alguns novos eventos e pequenas correções.",
    image: logoBVRB,
    url: "https://www.youtube.com/watch?v=TYG3lfU5EoY",
  },
];
