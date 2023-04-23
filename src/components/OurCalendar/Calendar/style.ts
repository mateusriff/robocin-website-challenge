import styled from "styled-components";

export const CalendarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        margin: 0 1vw;
    }
`;

export const StyledDot = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: solid lightgray;
    background-color: white;
`;

export const StyledEvent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        line-height: 5vh;
    }

    p {
        line-height: 5vh;
    }
`;

export const Timeline = styled.div`
    width: 100%;
    height: 1vh;
    background-color: lightgray;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;