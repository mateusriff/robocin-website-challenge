import styled from "styled-components";

export const AwardWrapper = styled.div`
    height: 50vh;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1vw;
    //box-shadow: inset 0px 50px 20px -10px white, 0px -50px 20px -10px white;

    
    section {
        text-align: right;
        h1 {
            width: 20vw;
            font-size: 1.5vw;
            padding-bottom: 1vh;
        }
        
        h2 {
            color: gray;
            padding-bottom: 2vh;
        }

        p {
            width: 20vw;
            font-size: 0.9vw;
        }
    }
`;

export const StyledDot = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: solid #4DC264;
    background-color: white;
    margin-left: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 8px;
        height: 50.5vh;
        background-color: #4DC264;
        z-index: -1;
    }
`;