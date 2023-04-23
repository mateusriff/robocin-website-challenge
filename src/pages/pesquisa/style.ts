import styled from "styled-components";

export const PageWrapper = styled.section`
    min-height: 100vh;
    padding: 16vh 12vw 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;

    p {
        font-size: 0.8vw;
    }
`;

export const PapersWrapper = styled.div`    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: start;

    h1 {
        font-size: 2vw;
        color: #469C57;
        margin: 10vh 0 1vh;
    }

    div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1vw;
        //width: 100%;
    }
`;
