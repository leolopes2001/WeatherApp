import navigation from '../../../assets/wheater/navigation.svg';
import { useWeather } from '../../../contexts/WeatherProvider';
import {
  SectionStyled,
  List,
  WindStatusCard,
  Humidity,
  Visibility,
  AirPressure,
  Title,
} from './style';

export const TodayHightlights = () => {
  const { currentDayWeather } = useWeather();

  return (
    <SectionStyled>
      <div>
        <Title>Today's Hightlights</Title>

        <List>
          <WindStatusCard>
            <h4>Wind status</h4>
            <h5>
              {currentDayWeather?.wind
                ? Math.floor(currentDayWeather.wind.speed * 2.237)
                : '7'}
              <span>mph</span>
            </h5>
            <div>
              <div className='background-img'>
                <img src={navigation} alt='navigation' />
              </div>
              <p>WSW</p>
            </div>
          </WindStatusCard>

          <Humidity humidity={currentDayWeather?.main?.humidity}>
            <h4>Humidity</h4>
            <h5>
              {currentDayWeather?.main
                ? currentDayWeather?.main?.humidity
                : '84'}
              <span>%</span>
            </h5>

            <div>
              <div className='mark'>
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>

              <div className='bar'>
                <div></div>
              </div>

              <p>%</p>
            </div>
          </Humidity>

          <Visibility>
            <h4>Visibility</h4>
            <h5>
              {currentDayWeather?.visibility
                ? currentDayWeather?.visibility * 0.00062
                : '6,4'}
              <span>miles</span>
            </h5>
          </Visibility>

          <AirPressure>
            <h4>Air Pressure</h4>
            <h5>
              {currentDayWeather?.main?.pressure} <span>mb</span>{' '}
            </h5>
          </AirPressure>
        </List>
      </div>

      <p>created by username - devChallenges.io</p>
    </SectionStyled>
  );
};
