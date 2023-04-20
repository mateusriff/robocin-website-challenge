import { StyledNav, LogoImage } from "./style";
import Image from "next/image";
import { RCLogo } from '@/assets'

const Navbar = () => {
    return(
        <StyledNav>
            <a href="/">
                <LogoImage src={RCLogo} alt="Logo RobôCIn"/>
            </a>
            <div>
                <a href="/">Início</a>
                <a href="/membros">Membros</a>
                <a href="#">Categorias</a>
                <a href="#">Pesquisa</a>
            </div>
        </StyledNav>
    );
};

export default Navbar;