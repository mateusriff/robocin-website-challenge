import styled from "styled-components";

export const CardsWrapper = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12vw;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5vh;
        padding: 0 5vw;
    }
`;