import styled from 'styled-components';

export const ChangeBox = styled.div`
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 1rem;
`;

export const SectionStyled = styled.section`
  background: #100e1d;
  padding: 40px;
  // height: auto;
  display: flex;
  align-items: flex-start;
  text-align: center;
  justify-content: center;

  @media (min-width: 900px) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  align-items: flex-start;
  justify-content: center;

 
  @media (min-width: 1300px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1.2rem;
  }
`;
