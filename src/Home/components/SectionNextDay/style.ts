import styled from 'styled-components';

export const ChangeBox = styled.div`
  display: none;
  align-self: flex-end;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    width: 40px;
    height: 40px;
    background: #585676;
    border-radius: 54px;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: flex-end;
    color: #e7e7eb;
    cursor: pointer;

    /* active */
    background: #e7e7eb;
    color: #110e3c;
    
  }
  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const SectionStyled = styled.section`
  background: #100e1d;
  padding: 40px;
  height: auto;
  display: flex;
  align-items: flex-start;
  text-align: center;
  justify-content: center;

  @media (min-width: 1300px) {
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

  @media (min-width: 900px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
  @media (min-width: 1300px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1.2rem;
  }
`;
