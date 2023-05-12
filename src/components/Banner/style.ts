import Image from "next/image";
import styled from "styled-components";

export const StyledBanner = styled.section`
    padding: 12vh 12vw 6vh;
    min-height: 100vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;   

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const StyledImage = styled(Image)`
    width: 22vw; 
    height: auto;

    @media (max-width: 768px) {
        width: 80vw;
    }
`;

export const StyledContent = styled.div`
    text-align: right;
    width: 50vw;
    
    h2 {
        font-size: var(--fs-xl);
        font-weight: 900;
        margin-bottom: 10vh;

        span {
            color: #43E435;
        }
    }

    p {
        font-size: var(--fs-ml);
    }

    @media (max-width: 768px) {
        text-align: left;
        width: 80vw;

        h2 {
            margin-bottom: 4vh;
        }
    }
`;