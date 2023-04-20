import styled from "styled-components";
import Image from "next/image";

export const MemberCardWrapper = styled.div`
    width: 16vw;
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.03);
    border-radius: 25px;
    padding: 1vw;
    background-color: white;

    display: flex;
    flex-direction: column;
    gap: 1vh;

    div {
        h3 {
            text-decoration: none;  
        }

        p {
            color: #469C57;
        }
    }
`; 

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 0.5vw;
    align-items: center;

    a {
        opacity: 0.5;
    }
`;   

export const MemberImage = styled.img`
    border-radius: 25px;
    width: 100%;
    height: auto;
`;

export const SocialMediaImage = styled(Image)`
    width: 1.2vw;
    height: auto;
`;