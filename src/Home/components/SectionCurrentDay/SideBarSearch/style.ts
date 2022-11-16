import styled, { css } from 'styled-components';

interface iContainer {
  isActiveSideBar: boolean;
}

export const Container = styled.section<iContainer>`
  width: 100%;
  width: 100%;
  position: fixed;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  & > div {
    min-width: 100%;

    & > svg {
      position: absolute;
      right: 17px;
      top: 17px;
      cursor: pointer;
      color: #e7e7eb;
      font-size: 1.4rem;
    }
  }

  transition: transform 400ms;
  ${({ isActiveSideBar }) =>
    isActiveSideBar &&
    css`
      transform: translateX(0%);
    `}

  @media (min-width: 900px) {
    min-width: 300px;
    max-width: 500px;
  }
`;

export const FormStyled = styled.form`
  position: relative;
  margin-top: 60px;

  & > div {
    gap: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;

    svg {
      top: 50%;
      left: 25px;
      transform: translate(-50%, -50%);
      position: absolute;
      color: #616475;
    }
  }
`;

export const ListCity = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 38px;
  gap: 1rem;

  li {
    width: 100%;
    height: 64px;
    border: 1px solid #616475;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      border: 1px solid white;

      svg {
        color: white;
      }
    }

    h4 {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #e7e7eb;
    }

    svg {
      color: #616475;
    }
  }
`;
