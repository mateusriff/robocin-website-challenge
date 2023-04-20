import styled from "styled-components";
import Image from "next/image";

export const StyledNav = styled.nav`
    width: 100%;
    height: 12vh;

    position: fixed;
    z-index: 10;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12vw;
    
    background-color: white;
    font-size: 20px;

    div{
        display: flex;
        gap: 3vw;

        a {
            font-size: 1.1vw;
            transition: 0.2s ease-in-out;

            &:hover{
                color: #469C57;
            }
        }
    }
`;

export const LogoImage = styled(Image)`
    width: 10vw;
    height: auto;
`;