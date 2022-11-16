
export interface iTheme {
  name: string;

  colors: {
    primary: string;
    secondary: string;

    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    grey6: string;

    blue1: string;
    whiteFixed: string;
    blackFixed: string;
  };

  font: {
    size1: string;
    size2: string;
    size3: string;
    size4: string;
    size5: string;
    size6: string;
    size7: string;
    size8: string;

    weight1: number;
    weight2: number;
    weight3: number;
    weight4: number;
    weight5: number;
    weight6: number;

    height1: string;
    height2: string;
    height3: string;
    height4: string;
    height5: string;
    height6: string;
    height7: string;
    height8: string;
    height9: string;
    height10: string,
  };
}




export interface iThemeContext {
  theme: iTheme
}






