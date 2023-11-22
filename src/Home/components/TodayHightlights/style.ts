import styled, { css } from 'styled-components';

export const Title = styled.h4`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #e7e7eb;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: left;
  align-self: flex-start;
`;

export const SectionStyled = styled.section`
  background: #100e1d;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    grid-column: 2/3;
    grid-row: 2/3;
    
  }

  @media (min-width: 1300px) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: 328px;
  grid-template-rows: 204px 204px 159px 159px;

  li {
    padding: 1rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 328px 328px;
    grid-template-rows: 204px 159px;
  }


`;
interface iWindStatusCard {
  degWind: number;
}

export const WindStatusCard = styled.li<iWindStatusCard>`
  width: 328px;
  height: 204px;
  background: #1e213a;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #e7e7eb;
  }
  h5 {
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    color: #e7e7eb;

    span {
      font-size: 30px;
    }
  }

  div {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: #e7e7eb;
    }
  }

  .background-img {
    width: 29.49px;
    height: 29.49px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      ${({ degWind }) => `transform: rotate(${degWind}deg)`}
    }
  }
`;
interface iHumidity {
  humidity: number | undefined;
}

export const Humidity = styled.li<iHumidity>`
  width: 328px;
  height: 204px;
  background: #1e213a;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #e7e7eb;
  }

  h5 {
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
    color: #e7e7eb;

    span {
      font-size: 35px;
    }
  }
  & > div {
    width: 229px;

    & > p {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      text-align: end;
      margin-top: 4px;
      color: #a09fb1;
    }
  }

  .mark {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #a09fb1;
    }
  }

  .bar {
    width: 100%;
    height: 8px;
    background: #e7e7eb;
    border-radius: 80px;
    margin-top: 2px;

    div {
      width: ${({ humidity }) => `${humidity}%`};
      height: 8px;
      background: #ffec65;
      border-radius: 80px;
    }
  }
`;

export const Visibility = styled.li`
  width: 328px;
  height: 159px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background: #1e213a;

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    text-align: center;

    color: #e7e7eb;
  }

  h5 {
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
    color: #e7e7eb;
    span {
      font-size: 30px;
    }
  }
`;

export const AirPressure = styled.li`
  width: 328px;
  height: 159px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background: #1e213a;

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #e7e7eb;
  }

  h5 {
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
    color: #e7e7eb;

    span {
      font-size: 30px;
    }
  }
`;
