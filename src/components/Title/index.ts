import { BaseTitle } from './BaseTitle';
import styled, { css } from 'styled-components';

interface iTitle {
  variant: 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'title6';
}

export const TitleVariant = {
  title1: css`
    font-size: ${({ theme }) => theme.font.size1};

    font-weight: ${({ theme }) => theme.font.weight5};

    & > span {
      font-size: ${({ theme }) => theme.font.size3};
      color: ${({ theme }) => theme.colors.grey4};
    }
  `,

  title2: css`
    font-weight: ${({ theme }) => theme.font.weight4};
    font-size: ${({ theme }) => theme.font.size3};
    line-height: ${({ theme }) => theme.font.height3};
    color: #a09fb1;
  `,

  title3: css`
    font-weight: ${({ theme }) => theme.font.weight4};
    font-size: ${({ theme }) => theme.font.size5};
    line-height: ${({ theme }) => theme.font.height6};
    color: ${({ theme }) => theme.colors.grey5};
  `,
  title4: css`
    font-weight: ${({ theme }) => theme.font.weight3};
    font-size: ${({ theme }) => theme.font.size4};
    line-height: ${({ theme }) => theme.font.height4};
  `,
  title5: css`
    font-weight: ${({ theme }) => theme.font.weight3};
    font-size: ${({ theme }) => theme.font.size2};
    line-height: ${({ theme }) => theme.font.height2};
  `,
  title6: css`
    font-weight: ${({ theme }) => theme.font.weight5};
    font-size: ${({ theme }) => theme.font.size6};
    line-height: ${({ theme }) => theme.font.height7};
  `,
};

export const Title = styled(BaseTitle)<iTitle>`
  font-family: 'Raleway';
  font-style: normal;
  color: #e7e7eb;

  ${({ variant }) => TitleVariant[variant]}
`;
