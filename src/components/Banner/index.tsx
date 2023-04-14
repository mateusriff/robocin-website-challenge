import Image from "next/image";
import {StyledBanner, StyledContent} from "./style";
import { Robot } from "@/assets";

const Banner = () => {
    return(
        <StyledBanner>
            <Image src={Robot} alt="Robô" style={{ width: '30vw', height: 'auto' }}/>
            <StyledContent>
                <h2>
                    O <span>RobôCIn</span> é um grupo de Pesquisa e 
                    Desenvolvimento do Centro de Informática da UFPE.
                </h2>
                <p>
                    Com robótica, desenvolvemos soluções que
                    ganham competições internacionais.
                </p>
            </StyledContent>
        </StyledBanner>
    );
};

export default Banner;