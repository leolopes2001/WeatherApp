import { iDataOfNextDays, iNextDaysFormated } from '../types';

export const makeObjNextDays = (current: iDataOfNextDays) => {
  const { dt_txt, main: mainObj, weather } = current;

  const { feels_like, temp } = mainObj;

  const { main, description, icon } = weather[0];

  return { dt_txt, temp, feels_like, main, description, icon };
};

export const formatResponseDataOfNextDays = (list: iDataOfNextDays[]) => {
  const currentDay = new Date().toDateString().split(' ')[2];

  const newDataFormated = list.reduce<iNextDaysFormated[]>(
    (result, current) => {
      const currentDate = current.dt_txt.split(' ')[0].split('-')[2];

      if (currentDate === currentDay) {
        return result;
      }
      if (result.length === 0) {
        result.push(makeObjNextDays(current));
        return result;
      }
      const oldDate = result[result.length - 1].dt_txt
        .split(' ')[0]
        .split('-')[2];
      if (oldDate !== currentDate) {
        result.push(makeObjNextDays(current));
        return result;
      }

      return result;
    },
    []
  );

  return newDataFormated;
};
