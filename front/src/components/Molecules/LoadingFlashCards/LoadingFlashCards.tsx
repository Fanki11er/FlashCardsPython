import { Information, LoaderWrapper, StyledLoader } from './LoadingFlashCards.styles';

const LoadingFlashCards = () => {
  return (
    <LoaderWrapper>
      <StyledLoader />
      <Information>Ładuję listę fiszek do nauki...</Information>
    </LoaderWrapper>
  );
};

export default LoadingFlashCards;

