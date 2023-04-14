import styled from "styled-components";

export const StyledBanner = styled.section`
    padding: 0 12vw;
    height: 100vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5vw;   
`;

export const StyledContent = styled.div`
    text-align: right;
    width: 50vw;
    
    h2 {
        font-size: 2.4vw;
        margin-bottom: 10vh;

        span {
            color: #469C57;
        }
    }

    p {
        font-size: 1.8vw;
    }
`;