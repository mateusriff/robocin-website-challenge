import styled from 'styled-components';
import Image from 'next/image';

export const CardWrapper = styled.a`
    height: 50vh;

    box-shadow: 0px 5px 25px 10px rgba(0, 0, 0, 0.05);
    padding: 2vw;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    transition: 0.3s ease-in-out;

    p {
        width: 45vw;
        font-size: var(--fs-ms);
        color: #626262;
    }
`;

export const CardTitle = styled.h2`
  font-size: var(--fs-l);
  font-weight: 600;
  margin-bottom: 5vh;
  transition: 0.3s ease-in-out;
  color: #4DC264;

  p {
    margin-top: var(--fs-ml);
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