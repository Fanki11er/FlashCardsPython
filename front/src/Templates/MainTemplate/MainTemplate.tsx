import { Outlet } from 'react-router';
import Navigation from '../../components/Molecules/Navigation/Navigation';
import Footer from '../../components/Organisms/Footer/Footer';
import { MainTemplateWrapper } from './MainTemplate.styles';

const MainTemplate = () => {
  return (
    <MainTemplateWrapper>
      <Navigation />
      <Outlet />
      <Footer/>
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
