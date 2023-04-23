import styled from 'styled-components';
import Image from 'next/image';

export const CardWrapper = styled.a`
    height: 50vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    transition: 0.3s ease-in-out;

    p {
        width: 45vw;
        font-size: 1vw;
        color: #626262;
    }
`;

export const CardTitle = styled.h2`
  font-size: 2vw;
  font-weight: 600;
  margin-bottom: 5vh;
  transition: 0.3s ease-in-out;
  color: #4DC264;

  p {
    margin-top: 1vh;
    color: gray;
  }
`;

export const StyledImage = styled(Image)`
  height: 80%;
  width: auto;
  max-width: 20vw;
  object-fit: cover;
  border-radius: 25px;
`;