import { AboutUsWrapper, AwardContent } from "./style";
import Awards from "../Awards";

const AboutUs = () => {
    return(
        <AboutUsWrapper>
            <AwardContent>
                <h3>NOSSA HISTÓRIA</h3>
                <p>
                    O grupo foi criado em 2015 por 12 estudantes 
                    de Engenharia da Computação com ajuda de dois 
                    professores, Edna Barros e Hansenclever Bassani.
                    <br/><br/> 
                    Hoje contamos com 47 estudantes de graduação e 
                    pós-graduação e 4 professores estão orientado o 
                    time para desenvolver soluções utilizando Inteligência 
                    Artificial, Visão Computacional, Mecânica e Eletrônica 
                    aplicados na robótica.
                </p>
            </AwardContent>
            <Awards/>
        </AboutUsWrapper>
    );
};

export default AboutUs;