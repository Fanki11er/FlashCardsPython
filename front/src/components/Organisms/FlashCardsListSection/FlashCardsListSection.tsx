import { ChangeEvent, useEffect, useState } from 'react';
import endpoints from '../../../Api/endpoints';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import { FlashCard } from '../../../Interfaces/Interfaces';
import { FilterInput } from '../../Atoms/FilterInput/FilterInput';
import { FormError } from '../../Atoms/FormError/FormError';
import { StyledConnectionInfo } from '../EditFlashCardForm/EditFlashCardForm.styled';
import FlashCardsList from '../FlashCardsList/FlashCardsList';
import { FlashCardsListSectionWrapper, UpdatePerson } from './FlashCardsListSection.styles';
interface Props {
  openModal: (flashCard: FlashCard) => void;
}

const FlashCardsListSection = (props: Props) => {
  const { openModal } = props;
  const { allFlashCards } = endpoints;
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);
  const [filteredFlashCards, setFilteredFlashCards] = useState<FlashCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState('');
  const axiosPrivate = useAxiosPrivate();
  const [keyword, setKeyWord] = useState('');

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setKeyWord(e.target.value);
    }, 500);
  };

  useEffect(() => {
    const reg = keyword ? new RegExp(keyword.toLowerCase()) : '';
    const filter = () => {
      const results = flashCards.filter((flashCard: FlashCard) => {
        return `${flashCard.frontText} ${flashCard.backText}`.toLowerCase().match(reg);
      });
      setFilteredFlashCards(results);
    };
    filter();
  }, [keyword, flashCards]);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getFlashCards = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await axiosPrivate.get(allFlashCards, {
          signal: controller.signal,
        });
        isMounted && setFlashCards(response.data);
        setIsLoading(false);
      } catch (error: any) {
        if (!error?.response) {
          setError('Błąd połączenia');
        } else if (error.response?.status === 401) {
          setError('Brak autoryzacji');
        } else {
          setError('Błąd ładowania');
        }
        setIsLoading(false);
        /*navigate(login, {
              state: {
                from: location,
              },
              replace: true,
            });*/
      }
    };

    getFlashCards();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [allFlashCards, axiosPrivate]);

  return (
    <FlashCardsListSectionWrapper>
      <FilterInput placeholder="Filter" type="search" onChange={(e) => search(e)} />
      {isLoading ? <StyledConnectionInfo /> : <FlashCardsList flashCards={keyword ? filteredFlashCards : flashCards} openModal={openModal} />}
      {isError ? <FormError>{isError}</FormError> : null}
      <UpdatePerson />
    </FlashCardsListSectionWrapper>
  );
};

export default FlashCardsListSection;
