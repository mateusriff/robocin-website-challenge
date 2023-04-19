import styled from "styled-components";
import Image from "next/image";

export const SocialMediaWrapper = styled.div`
    height: 100%;
    padding: 0 1vw;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vh;
    
    a {
        opacity: 0.1;
        transition: 0.2s ease-in-out;

        :hover {
            opacity: 1;
        }
    }
`;

export const StyledImage = styled(Image)`
    width: 2vw;
    height: auto;
`; 