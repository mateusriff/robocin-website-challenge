import styled from 'styled-components';

export const CardWrapper = styled.a`
    min-width: 21vw;
    min-height: 35vh;
    box-shadow: 0px 5px 25px 10px rgba(0, 0, 0, 0.1);
    outline: 3px solid rgba(0, 0, 0, 0);
    border-radius: 50px;
    padding: 0 3vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: 0.3s ease-in-out;

    p {
        width: 15vw;
        font-size: var(--fs-m);
        color: #626262;
        text-align: center;
    }

    &:hover {
      outline: 3px solid rgba(0, 0, 0, 0.1);

      h2 {
        color: #469C57;
      }
    }

    @media (max-width: 768px) {
      padding: 2vh 10vw;

      p {
        width: 40vw;
      }
    }
`;

export const CardTitle = styled.h2`
  font-size: var(--fs-m);
  font-weight: 600;
  margin-bottom: 5vh;
  transition: 0.3s ease-in-out;
`;