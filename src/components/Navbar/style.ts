import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100%;
    height: 12vh;

    position: fixed;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12vw;
    
    background-color: white;
    font-size: 20px;

    div{
        display: flex;
        gap: 3vw;

        a {
            transition: 0.2s ease-in-out;

            &:hover{
                color: #469C57;
            }
        }
    }
`;