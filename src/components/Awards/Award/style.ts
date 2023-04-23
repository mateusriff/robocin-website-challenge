import styled from "styled-components";

export const AwardWrapper = styled.div`
    height: 50vh;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1vw;

    @media (max-width: 768px) {
        height: 20vh;
        flex-direction: row-reverse;
        justify-content: start;
    }
`;

export const StyledAward = styled.div`
    text-align: right;
    width: 20vw;
    h1 {
        font-size: var(--fs-m);
        padding-bottom: 1vh;
    }
        
    h2 {
        color: gray;
        padding-bottom: 2vh;
    }

    p {
        font-size: var(--fs-m);
    }

    @media (max-width: 768px) {
        text-align: left;
        width: 70vw;
    }
`;

export const StyledDot = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: solid #4DC264;
    background-color: white;
    margin-left: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 4px;
        height: 55vh;
        background-color: #4DC264;
        z-index: -1;

        @media (max-width: 768px) {
            height: 22vh;
        }
    }
`;