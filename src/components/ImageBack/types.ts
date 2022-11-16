
import { ImgHTMLAttributes } from 'react';

export interface iImageBack extends ImgHTMLAttributes<HTMLImageElement>{
  variant: 'currentDay' | 'nextDays';
  imgId: any;
}
