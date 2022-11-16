import HeavyRain from '../../../../assets/wheater/HeavyRain.png';
import { ImageBack } from '../../../../components/ImageBack';
import { Text } from '../../../../components/Text';
import { Title } from '../../../../components/Title';
import { iWeatherData } from '../../../../contexts/WeatherProvider/types';

import { LiStyled } from './style';

export const CardOfWeek = ({
  dt_txt,
  feels_like,
  description,
  icon,
  temp,
  main,
  nameDay,
}: iWeatherData) => {
  return (
    <LiStyled>
      <Title tag='h5' variant='title6'>
        {nameDay}
      </Title>

      <ImageBack imgId={icon} src={HeavyRain} variant='nextDays' />

      <div>
        <Text variant='text3'>{Math.ceil(feels_like)}°C</Text>
        <Text variant='text3'>{Math.floor(temp)}°C</Text>
      </div>
    </LiStyled>
  );
};
