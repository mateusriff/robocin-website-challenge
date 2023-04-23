import styled from "styled-components";

export const AboutUsWrapper = styled.div`
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
    padding: 0 12vw;
    
    h3 {
        color: #4DC264;
        font-size: var(--fs-l);
        text-transform: uppercase;
        writing-mode: vertical-lr;
        text-orientation: mixed;
        transform: rotate(180deg);
        text-decoration: underline;
    }

    p {
        font-size: var(--fs-m);
        width: 30vw;
    }
`;

export const AwardContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
`;