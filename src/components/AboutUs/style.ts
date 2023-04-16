import styled from "styled-components";

const AboutUsWrapper = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    gap: 1vw;
    padding: 0 12vw;
    
    h3 {
        color: #4DC264;
        font-size: 2vw;
        text-transform: uppercase;
        writing-mode: vertical-lr;
        text-orientation: mixed;
        transform: rotate(180deg);
        text-decoration: underline;
    }

    p {
        font-size: 1.5vw;
        width: 40vw;
    }
`;

export default AboutUsWrapper;