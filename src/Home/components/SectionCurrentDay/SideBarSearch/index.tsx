import { IoIosArrowForward } from 'react-icons/io';
import { SlMagnifier } from 'react-icons/sl';
import { MdClose } from 'react-icons/md';
import { Container, FormStyled, ListCity } from './style';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { useWeather } from '../../../../contexts/WeatherProvider';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getLocationByName } from '../../../../service/getLocationByName';
import { AxiosError } from 'axios';
import { iApiError } from '../../../../@types';

const schema = yup.object({
  nameForSearch: yup.string().required(),
});
export const SideBarSearch = () => {
  const { changePosition, isActiveSideBar,closeSideBar } =
    useWeather();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: any) => {
    try {
      const data = await getLocationByName(formData.nameForSearch);

      if (!data.length) {
        console.log('Error');
        return;
      }
      const { lat, lon } = data[0];
      changePosition(lat, lon);
      reset();
      closeSideBar();
    } catch (err) {
      const requestError = err as AxiosError<iApiError>;
      console.log(requestError);
      console.log(requestError.response?.data.error);
    }
  };

  const handleChangePosition = (lat: number, lon: number) => {
    changePosition(lat, lon);
    closeSideBar();
  };
  return (
    <Container isActiveSideBar={isActiveSideBar}>
      <div>
        <MdClose onClick={closeSideBar} />
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type='text'
              placeholder='search location'
              {...register('nameForSearch')}
            />
            <Button variant='searchForPlace' type='submit'>
              Search
            </Button>
            <SlMagnifier />
          </div>
        </FormStyled>
        <ListCity>
          <li onClick={() => handleChangePosition(-25.4295963, -49.2712724)}>
            <h4>Curitiba</h4>
            <IoIosArrowForward />
          </li>
          <li onClick={() => handleChangePosition(-23.5506507, -46.6333824)}>
            <h4>São Paulo</h4>
            <IoIosArrowForward />
          </li>
          <li onClick={() => handleChangePosition(-19.9227318, -43.9450948)}>
            <h4>Belo Horizonte</h4>
            <IoIosArrowForward />
          </li>
        </ListCity>
      </div>
    </Container>
  );
};
