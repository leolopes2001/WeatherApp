import { useWeather } from '../../../contexts/WeatherProvider';
import { CardOfWeek } from './CardOfWeek';
import { SectionStyled, List, ChangeBox } from './style';

export const SectionNextDay = () => {
  const { weatherData } = useWeather();

  return (
    <SectionStyled>
      <div>
        <ChangeBox>
          <button>°C</button>
          <button>°F</button>
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
