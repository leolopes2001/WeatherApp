import { SectionCurrentDay } from './components/SectionCurrentDay';
import { SideBarSearch } from './components/SectionCurrentDay/SideBarSearch';
import { SectionNextDay } from './components/SectionNextDay';
import { TodayHightlights } from './components/TodayHightlights';
import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <SideBarSearch />
      <SectionCurrentDay />
      <SectionNextDay />
      <TodayHightlights />
    </Container>
  );
};
