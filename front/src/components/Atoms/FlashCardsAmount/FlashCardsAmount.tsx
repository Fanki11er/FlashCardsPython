import { AmountInfoSpan, FlashCardsAmountWrapper } from './FlashCardsAmount.styled';

interface InfoProps {
  color: string;
  amount?: number;
  label: string;
  title?: string;
}

const FlashCardsAmount = (props: InfoProps) => {
  const { color, amount, label } = props;
  return (
    <FlashCardsAmountWrapper color={color} title={props.title}>
      <AmountInfoSpan>{amount ? amount : 0}</AmountInfoSpan>
      <AmountInfoSpan>{label}</AmountInfoSpan>
    </FlashCardsAmountWrapper>
  );
};

export default FlashCardsAmount;
