import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    grid-template-rows: auto 100%;
  }
  @media (min-width: 1400px) {
 
    display: grid;
    grid-template-columns: 459px auto;
    grid-template-rows: 300px 100%;
  }


`;
