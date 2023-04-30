import { HeroPageWrapper, StyledFlashCard, StyledMainPerson, Wrapper } from './HeroPageWrapper.styles';

const HeroPage = () => {
  return (
    <HeroPageWrapper>
      <Wrapper>
        <StyledFlashCard />
        <StyledMainPerson />
      </Wrapper>
    </HeroPageWrapper>
  );
};

export default HeroPage;
