import HeavyRain from '../../../../assets/weather/HeavyRain.png';
import { ImageBack } from '../../../../components/ImageBack';
import { Text } from '../../../../components/Text';
import { Title } from '../../../../components/Title';
import { useWeather } from '../../../../contexts/WeatherProvider';
import { iWeatherData } from '../../../../contexts/WeatherProvider/types';
import celsiusToFahrenheit from '../../../utils/celsiusToFahrenheit';

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
  const { isFahrenheit } = useWeather();

  return (
    <LiStyled>
      <Title tag='h5' variant='title6'>
        {nameDay}
      </Title>

      <ImageBack imgId={icon} src={HeavyRain} variant='nextDays' />

      <div>
        <Text variant='text3'>
          {isFahrenheit
            ? `${Math.ceil(celsiusToFahrenheit(feels_like))}°F`
            : `${Math.ceil(feels_like)}°C`}
        </Text>
        <Text variant='text3'>
          {isFahrenheit
            ? `${Math.floor(celsiusToFahrenheit(temp))}°F`
            : `${Math.floor(temp)}°C`}
        </Text>
      </div>
    </LiStyled>
  );
};
