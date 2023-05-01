import { ErrorWrapper, Information, StyledError } from './LoadingError.styles';
interface Props {
  errorText: string;
}

const LoadingError = (props: Props) => {
  return (
    <ErrorWrapper>
      <StyledError />
      <Information>{props.errorText}</Information>
    </ErrorWrapper>
  );
};

export default LoadingError;

