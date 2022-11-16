import styled, { css } from "styled-components";

interface iTextVariant {
  variant: "text1" | "text2" | "text3";
}

const TextVariant = {
  text1: css`
    font-weight: ${({ theme }) => theme.font.weight4};
    font-size: ${({ theme }) => theme.font.size5};
    line-height: ${({ theme }) => theme.font.height6};
    color: ${({ theme }) => theme.colors.grey5};
  `,

  text2: css`
    font-weight: ${({ theme }) => theme.font.weight5};
    font-size: ${({ theme }) => theme.font.size6};
    line-height: ${({ theme }) => theme.font.height7};
    color: ${({ theme }) => theme.colors.grey3};
  `,

  text3: css`
    font-weight: ${({ theme }) => theme.font.weight5};
    font-size: ${({ theme }) => theme.font.size7};
    line-height: ${({ theme }) => theme.font.height8};
  `,

  text4: css`
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.size8};
    line-height: ${({ theme }) => theme.font.height10};
  `,

  text5: css`
    font-weight: ${({ theme }) => theme.font.weight5};
    font-size: ${({ theme }) => theme.font.size7};
    line-height: ${({ theme }) => theme.font.height9};
    color: ${({ theme }) => theme.colors.grey3};
  `,
};

export const Text = styled.p<iTextVariant>`
  font-family: "Montserrat";
  font-style: normal;
  color: #a09fb1;

  ${({ variant }) => TextVariant[variant]}
`;
