import { iImageBack } from './types';
import styled, { css } from 'styled-components';

import Clear from '../../assets/weather/Clear.png';
import HeavyCloud from '../../assets/weather/HeavyCloud.png';
import LightCloud from '../../assets/weather/LightCloud.png';
import Shower from '../../assets/weather/Shower.png';
import Snow from '../../assets/weather/Snow.png';
import Thunderstorm from '../../assets/weather/Thunderstorm.png';

const ImgaeVariant = {
  currentDay: css`
    top: 30%;
    left: 50%;
    width: 55%;
    max-height: 200px;
    max-width: 200px;
    object-fit: fill;
    transform: translate(-50%);
    position: absolute;
  `,

  nextDays: css`
    width: 56.44px;
    height: 62px;
  `,
};

export const StyledImg = styled.img.attrs<iImageBack>(({ imgId }) => {
  switch (imgId) {
    case '01d':
    case '01n':
      return { src: Clear };

    case '50d':
    case '50n':
      return { src: HeavyCloud };

    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return { src: LightCloud };

    case '10d':
    case '10n':
      return { src: Shower };

    case '13d':
    case '13n':
      return { src: Snow };

    case '11d':
    case '11n':
      return { src: Thunderstorm };

    default:
      return { src: Clear };
  }
})<iImageBack>`
  ${({ variant }) => ImgaeVariant[variant]}
`;
