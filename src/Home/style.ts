import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: 459px auto;
    grid-template-rows: 300px 0.8fr;
  }


`;
