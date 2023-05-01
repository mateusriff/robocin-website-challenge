import { SeguidorDeLinha, SSL, VSS, Simulacao2D } from "@/assets";

export const categoriesData = [
    {
      title: "Seguidor de Linha",
      competition: "IRON CUP",
      description: "Seguidor de linha é uma categoria que tem o objetivo de desenvolver robôs autônomos que percorrem um percurso no menor tempo possível. O robô possui sensor de reflectância para poder identificar o trajeto delimitado por uma fita. Os principais desafios da categoria são a produção de robô leve e rápido e o desenvolvimento um controle eficiente e preciso.",
      image: SeguidorDeLinha
    },
    {
      title: "Simulação 2D",
      competition: "ROBOCUP | LARC | IRON CUP",
      description: "Na Simulação 2D duas equipes de onze agentes autônomos jogam futebol em um estádio de futebol virtual bidimensional representado por um servidor central, chamado SoccerServer. Este servidor sabe tudo sobre o jogo, ou seja, a posição atual de todos os jogadores e a bola, a física e assim por diante. O jogo conta ainda com a comunicação entre o servidor e cada agente. Por um lado, cada jogador recebe uma entrada relativa e ruidosa de seus sensores virtuais (visuais, acústicos e físicos) e, por outro lado, pode executar alguns comandos básicos (como correr, girar ou chutar) para influenciar seu ambiente.",
      image: Simulacao2D
    },
    {
      title: "Small Size League",
      competition: "ROBOCUP | LARC",
      description: "Small Size League (SSL) é uma competição que requer o desenvolvimento de várias áreas. Nós desenvolvemos o modelo mecânico, os sistemas eletrônicos e de comunicação e a inteligência artifical dos robôs. Um jogo de SSL ocorre entre duas equipes de seis robôs cada. Os robôs tem dimensões limitadas, o robô deve caber dentro de um círculo de 180 mm de diâmetro e não deve ter mais de 15 cm. Todos os objetos no campo são identificados e normalizados pelos sistema de visão que processa os dados proveniente pelas 4 cameras.",
      image: SSL
    },
    {
      title: "Very Small Size Soccer",
      competition: "LARC | IRON CUP",
      description: "Very Small Size Soccer (VSSS) é uma competição que requer desenvolvimento nas principais áreas do RobôCIn, visão computacional para detectar informações sobre a situação do jogo; inteligência artificial para planejar todos os movimentos dos robôs, para que a equipe possa marcar gols e se defender dos adversários; e robótica que envolve eletrônica e mecânica para criar agentes que precisam se mover perfeitamente em campo.",
      image: VSS
    },
];