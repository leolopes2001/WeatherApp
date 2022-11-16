import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { iDefaultContextProps } from "../../@types";

import dark from "../../styles/themes/dark";
import { iTheme, iThemeContext } from "./types";


const ThemeContext = createContext<iThemeContext>({} as iThemeContext);

const CustomThemeProvider = ({ children }: iDefaultContextProps) => {
  const [theme, setTheme] = useState<iTheme>(dark);

  useEffect(() => {
    setTheme(dark);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, CustomThemeProvider };

