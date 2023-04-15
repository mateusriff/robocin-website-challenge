import Image from "next/image";
import {StyledBanner, StyledContent} from "./style";
import { Robot } from "@/assets";

const Banner = () => {
    return(
        <StyledBanner>
            <Image src={Robot} alt="Robô" style={{ width: '22vw', height: 'auto' }}/>
            <StyledContent>
                <h2>
                    O <span>RobôCIn</span> é um grupo de 
                    Pesquisa e Desenvolvimento em robótica 
                    do Centro de Informática da UFPE.
                </h2>
                <p>
                    Desenvolvemos soluções que ganham 
                    competições internacionais.
                </p>
            </StyledContent>
        </StyledBanner>
    );
};

export default Banner;