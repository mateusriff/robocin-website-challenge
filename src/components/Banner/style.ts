import Image from "next/image";
import styled from "styled-components";

export const StyledBanner = styled.section`
    padding: 12vh 12vw 0;
    height: 100vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;   

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const StyledImage = styled(Image)`
    width: 80vw; 
    height: auto;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const StyledContent = styled.div`
    text-align: right;
    width: 50vw;
    
    h2 {
        font-size: var(--fs-xl);
        margin-bottom: 10vh;

        span {
            background-image: linear-gradient(to right,  #4DC264,   #43E435);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    p {
        font-size: var(--fs-ml);
    }

    @media (max-width: 600px) {
        text-align: left;
        width: 80vw;

        h2 {
            margin-bottom: 4vh;
        }
    }
`;