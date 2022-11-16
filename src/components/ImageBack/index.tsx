import { StyledImg } from './style';
import { iImageBack } from './types';

export const ImageBack = ({ ...rest }: iImageBack) => {
  return <StyledImg {...rest} />;
};
