import CloudBackgrond from '../../../assets/weather/Cloud-background.png';
import Sun from '../../../assets/weather/LightCloud.png';
import LocationPointer from '../../../assets/weather/icons8-marcador-24.png';
import YourLocation from '../../../assets/weather/gps.png';

import { Button } from '../../../components/Button';
import { Text } from '../../../components/Text';
import { Title } from '../../../components/Title';

import {
  SectionStyled,
  ButtonContainer,
  ImageContainer,
  ContentContainer,
} from './style';
import { useWeather } from '../../../contexts/WeatherProvider';
import { useEffect, useState } from 'react';
import { ImageBack } from '../../../components/ImageBack';
import celsiusToFahrenheit from '../../utils/celsiusToFahrenheit';

export const SectionCurrentDay = () => {
  const {
    currentDayWeather,
    currentDate,
    changePosition,
    openSideBar,
    closeSideBar,
    isFahrenheit,
  } = useWeather();

  const [date, setDate] = useState<string>('');

  const tempCelsius = currentDayWeather?.main?.temp;
  const currentWeather = isFahrenheit
    ? celsiusToFahrenheit(tempCelsius)
    : tempCelsius;

  useEffect(() => {
    const arrDate = currentDate.split(' ');

    setDate(`${arrDate[0]} ${arrDate[2]} ${arrDate[1]}`);
  }, [currentDate]);

  const getPosition = async () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      changePosition(coords.latitude, coords.longitude);
      closeSideBar();
    });
  };

  return (
    <SectionStyled>
      <div>
        <ButtonContainer>
          <Button variant='openSideBar' onClick={openSideBar}>
            Search For Place
          </Button>
          <Button variant='yourLocation'>
            <img
              src={YourLocation}
              alt='Gps location'
              onClick={getPosition}
              title='Previsão do tempo pela sua localização.'
            />
          </Button>
        </ButtonContainer>

        <ImageContainer>
          <img src={CloudBackgrond} alt='' />
          <ImageBack
            imgId={
              currentDayWeather.weather ? currentDayWeather?.weather[0].icon : ''
            }
            src={Sun}
            variant='currentDay'
          />
        </ImageContainer>
        <div style={{ height: "400px" }}>

        </div>
        <ContentContainer>
          <Title tag='h3' variant='title1'>
            {!!currentDayWeather?.main ? Math.floor(currentWeather) : '30'}
            <span>{isFahrenheit ? '°F' : '°C'}</span>
          </Title>
          <Title tag='h4' variant='title2'>
            {currentDayWeather?.weather
              ? currentDayWeather?.weather[0].main
              : 'Shower'}
          </Title>

          <div>
            <Text variant='text1'>Today</Text>
            <Text variant='text1'>.</Text>
            <Text variant='text1'>{date}</Text>
          </div>

          <div>
            <img src={LocationPointer} alt='Location Pointer' />
            <Title tag='h2' variant='title3'>
              {currentDayWeather?.name}
            </Title>
          </div>
        </ContentContainer>
      </div>
    </SectionStyled>
  );
};
