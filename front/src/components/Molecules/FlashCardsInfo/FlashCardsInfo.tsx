import FlashCardsAmount from '../../Atoms/FlashCardsAmount/FlashCardsAmount';
import { FlashCardsInfoWrapper } from './FlashCardsInfo.styles';
import { theme } from '../../../Theme/theme';
import { FlashCardsStatus } from '../../../Interfaces/Interfaces';

interface Props {
  flashCardsInfo: FlashCardsStatus | undefined;
}

const FlashCardsInfo = (props: Props) => {
  const { flashCardsInfo } = props;

  const { lightBlue, darkOrange, yellow } = theme.colors;
  return (
    <FlashCardsInfoWrapper>
      <FlashCardsAmount
        color={lightBlue}
        label={'Nowe'}
        amount={flashCardsInfo?.newAmount ? flashCardsInfo.newAmount : 0}
        title={'Ilość nowych fiszek'}
      />
      <FlashCardsAmount
        color={darkOrange}
        label={'Nauka'}
        amount={flashCardsInfo?.toLearnAmount ? flashCardsInfo.toLearnAmount : 0}
        title={'Fiszki których naukę trzeba powtórzyć'}
      />
      <FlashCardsAmount
        color={yellow}
        label={'Wszystkie'}
        amount={flashCardsInfo?.allAmount ? flashCardsInfo.allAmount : 0}
        title={'Ilość wszystkich fiszek'}
      />
    </FlashCardsInfoWrapper>
  );
};

export default FlashCardsInfo;
