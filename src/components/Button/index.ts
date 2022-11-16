import styled, { css } from 'styled-components';

interface iButtonVariant {
  variant: 'openSideBar' | 'searchForPlace' | 'yourLocation' | 'closeSideBar';
}

const ButtonVariant = {
  openSideBar: css`
    width: 161px;
    height: 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #e7e7eb;
    background: #6e707a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,

  searchForPlace: css`
    min-width: 86px;
    height: 48px;
    background: #3c47e9;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #e7e7eb;
  `,

  yourLocation: css`
    width: 40px;
    height: 40px;
    background: rgba(110, 112, 122, 0.3);
    border-radius: 50%;
    
    & > img {
      border-radius: 50%;
      width: 22px;
      background: rgba(110, 112, 122, 0.3);
    }
  `,

  closeSideBar: css`
    width: 14px;
    height: 14px;
    background: #e7e7eb;
  `,
};

export const Button = styled.button<iButtonVariant>`
  font-family: 'Raleway';
  font-style: normal;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    filter: brightness(1.2);
  }

  ${({ variant }) => ButtonVariant[variant]}
`;
