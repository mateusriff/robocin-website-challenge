import styled from 'styled-components';

export const CardWrapper = styled.a`
    width: 21vw;
    height: 35vh;
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
      width: 22vw;
      height: 36vh;
      outline: 3px solid rgba(0, 0, 0, 0.1);

      h2 {
        color: #469C57;
      }
    }
`;

export const CardTitle = styled.h2`
  font-size: var(--fs-m);
  font-weight: 600;
  margin-bottom: 5vh;
  transition: 0.3s ease-in-out;
`;