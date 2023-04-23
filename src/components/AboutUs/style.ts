import styled from "styled-components";

export const AboutUsWrapper = styled.div`
    min-height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
    padding: 6vh 12vw;
    
    h3 {
        color: #4DC264;
        font-size: var(--fs-l);
        text-transform: uppercase;
        writing-mode: vertical-lr;
        text-orientation: mixed;
        transform: rotate(180deg);
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5vh;

        h3 {
            writing-mode: horizontal-tb;
            text-orientation: upright;
            transform: rotate(0deg);
            text-decoration: underline;
            margin-bottom: 2vh;
        }
    }
`;

export const StyledParagraph = styled.p`
    width: 30vw;
    font-size: var(--fs-m);

    @media (max-width: 768px) {
        width: 80vw;
    }
`;

export const StyledContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;