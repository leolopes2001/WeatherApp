import styled from 'styled-components';

export const SectionStyled = styled.section`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  > div{
    overflow: hidden;
    width: 100%;
    padding: 1rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  @media (min-width: 900px) {
    max-width: 500px;
    grid-column: 1/2;
    grid-row: 1/3;
  }
  @media (min-width: 1300px) {
    grid-column: 1/2;
    grid-row: 1/3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 10%;

  img:nth-child(1) {
    width: 100%;
    object-fit: cover;
    height: 350px;
    max-height: 400px;
    opacity: 0.1;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 2rem;
  gap: 3rem;
  div:nth-of-type(1) {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    p:nth-of-type(2) {
      vertical-align: middle;
    }
  }
  div:nth-of-type(2) {
    display: flex;
    align-items: center;
    row-gap: 9px;
    img {
      color: #88869d;
      width: 20px;
      height: 20px;
    }
  }
`;
