export interface iNextDaysFormated {
  dt_txt: string;
  feels_like: number;
  temp: number;
  main: string;
  description: string;
  icon: string;
}
export interface iPosition {
  lat: number;
  lon: number;
}
export interface iDaysOfWeek {
  nameDay: string;
}

export interface iWeatherData extends iNextDaysFormated {
  nameDay: string;
}
export interface iWeatherContext {
  weatherData: iWeatherData[];
  currentDayWeather: iCurrentDayWeather;
  currentDate: string;
  changePosition: (lat: number, lon: number) => void;
  openSideBar: () => void;
  closeSideBar: () => void;
  isActiveSideBar: boolean;
  isFahrenheit: boolean;
  changeFahrenheitState: (isActive: boolean) => void;
}

export interface iDataOfNextDays {
  dt_txt: string;
  main: {
    feels_like: number;
    temp: number;
  };
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface iCurrentDayWeather {
  name: string;
  visibility: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}
