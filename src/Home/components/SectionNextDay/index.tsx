import { Button } from '../../../components/Button';
import { useWeather } from '../../../contexts/WeatherProvider';
import { CardOfWeek } from './CardOfWeek';
import { SectionStyled, List, ChangeBox } from './style';

export const SectionNextDay = () => {
  const { weatherData, isFahrenheit, changeFahrenheitState } = useWeather();

  return (
    <SectionStyled>
      <div>
        <ChangeBox>
          <Button
            isActive={!isFahrenheit}
            onClick={() => changeFahrenheitState(false)}
            variant='fahrenheitAndCelsius'
          >
            °C
          </Button>
          <Button
            isActive={isFahrenheit}
            onClick={() => changeFahrenheitState(true)}
            variant='fahrenheitAndCelsius'
          >
            °F
          </Button>
        </ChangeBox>
        <List>
          {weatherData?.map((day, i) => (
            <CardOfWeek key={i} {...day} />
          ))}
        </List>
      </div>
    </SectionStyled>
  );
};
