import styled from "styled-components";

export const StyledBanner = styled.section`
    padding: 0 12vw;
    height: 70vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;   
`;

export const StyledContent = styled.div`
    text-align: right;
    width: 50vw;
    
    h2 {
        font-size: 3.2vw;
        margin-bottom: 10vh;

        span {
            background-image: linear-gradient(to right,  #4DC264,   #43E435);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    p {
        font-size: 1.5vw;
    }
`;