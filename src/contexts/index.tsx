import { iDefaultContextProps } from '../@types';
import { CustomThemeProvider } from './CustomThemeProvider';
import { WeatherProvider } from './WeatherProvider';


export const Providers = ({ children }: iDefaultContextProps) => {
  return (
    <CustomThemeProvider>
      <WeatherProvider>{children}</WeatherProvider>
    </CustomThemeProvider>
  );
};
