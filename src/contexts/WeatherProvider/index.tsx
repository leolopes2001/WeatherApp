import { AxiosError } from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { iApiError, iDefaultContextProps } from '../../@types';
import { getDataOfCurrentDay } from '../../service/getDataOfCurrentDay';
import { getDataOfNextDays } from '../../service/getDataOfNextDays';
import {
  iCurrentDayWeather,
  iDaysOfWeek,
  iNextDaysFormated,
  iPosition,
  iWeatherContext,
  iWeatherData,
} from './types';
import { formatResponseDataOfNextDays } from './utils';

const WeatherContext = createContext<iWeatherContext>({} as iWeatherContext);

export const WeatherProvider = ({ children }: iDefaultContextProps) => {
  // const [currentDate] = useState<string>("");
  const [currentDate] = useState(new Date().toDateString());

  const [daysOfWeek, setDaysOfWeek] = useState<iDaysOfWeek[]>([]);

  const [nextDaysData, setNextDaysData] = useState<iNextDaysFormated[]>([]);

  const [weatherData, setWeaterData] = useState<iWeatherData[]>([]);

  const [currentDayWeather, seCurrentDayWeather] = useState<iCurrentDayWeather>(
    {} as iCurrentDayWeather
  );
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const [isActiveSideBar, setIsActiveSideBar] = useState(false);

  const changeToCelsius = () => {
    setIsFahrenheit(false);
  };

  const changeToFahrenheit = () => {
    setIsFahrenheit(true);
  };

  const openSideBar = (): void => {
    setIsActiveSideBar(true);
  };

  const closeSideBar = (): void => {
    setIsActiveSideBar(false);
  };

  const [currentPosition, setCurrentPosition] = useState<iPosition>({
    lat: -25.4295963,
    lon: -49.2712724,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCurrentPosition({
          lat: latitude,
          lon: longitude,
        });
        closeSideBar();
      }
    );
  }, []);

  useEffect(() => {
    if (daysOfWeek.length && nextDaysData.length) {
      const weatherData = daysOfWeek.map((day, i) => {
        return { ...day, ...nextDaysData[i] };
      });

      setWeaterData(weatherData);
    }
  }, [daysOfWeek, nextDaysData]);

  useEffect(() => {
    if (currentDate.length) {
      const days_of_week = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
      ];
      const idxCurrentDay = days_of_week.indexOf(currentDate.slice(0, 3));

      const nextDaysOfWeek = [{ nameDay: 'Tomorrow' }];

      for (let i = idxCurrentDay + 2; i <= idxCurrentDay + 5; i++) {
        nextDaysOfWeek.push({ nameDay: days_of_week[i] });
      }

      setDaysOfWeek(nextDaysOfWeek);
    }
  }, [currentDate]);

  useEffect(() => {
    (async () => {
      const { lat, lon } = currentPosition;

      try {
        const list = await getDataOfNextDays(lat, lon);
        const dataDay = await getDataOfCurrentDay(lat, lon);

        console.log(dataDay);
        const data = formatResponseDataOfNextDays(list);

        console.log(dataDay);
        seCurrentDayWeather(dataDay);
        setNextDaysData(data);
      } catch (error) {
        const requestError = error as AxiosError<iApiError>;
        console.log(requestError.response?.data.error);
      }
    })();
  }, [currentPosition]);

  const changePosition = (lat: number, lon: number) => {
    setCurrentPosition({ lat, lon });
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        currentDayWeather,
        currentDate,
        changePosition,
        isActiveSideBar,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
