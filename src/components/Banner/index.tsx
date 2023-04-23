import Image from "next/image";
import {StyledBanner, StyledImage, StyledContent} from "./style";
import { Robot } from "@/assets";

const Banner = () => {
    return(
        <StyledBanner>
            <StyledImage src={Robot} alt="Robô"/>
            <StyledContent>
                <h2>
                    O <span>RobôCIn</span> é um grupo de 
                    Pesquisa e Desenvolvimento em robótica 
                    do Centro de Informática da UFPE.
                </h2>
                <p>
                Desenvolvemos soluções com Inteligência 
                Artificial, Visão Computacional, Mecânica e Eletrônica 
                aplicados na robótica.
                </p>
            </StyledContent>
        </StyledBanner>
    );
};

export default Banner;