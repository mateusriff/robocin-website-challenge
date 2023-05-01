import Image from "next/image";
import styled from "styled-components";

export const PaperCardWrapper = styled.a`
    width: 20vw;
    display: flex;
    align-items: center;
    text-align: left;
    transition: 0.5s ease-in-out;

    :hover {
        color: #469C57;
    }
`;

export const StyledImage = styled(Image)`
    height: 5vh;
    width: auto;
`;