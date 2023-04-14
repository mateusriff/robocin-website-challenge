import { StyledNav } from "./style";
import Image from "next/image";
import { RCLogo } from '@/assets'

const Navbar = () => {
    return(
        <StyledNav>
            <a href="#">
                <Image src={RCLogo} alt="Logo RobôCIn" width={180}/>
            </a>
            <div>
                <a href="#">Início</a>
                <a href="#">Categorias</a>
                <a href="#">Membros</a>
                <a href="#">Pesquisa</a>
            </div>
        </StyledNav>
    );
};

export default Navbar;