import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import endpoints from '../../../Api/endpoints';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import { FlashCard } from '../../../Interfaces/Interfaces';
import routes from '../../../Routes/routes';
import { CancelButton, DefaultButton, DeleteButton } from '../../Atoms/Buttons/Buttons';
import { ButtonsWrapper, EditFlashCardsInput, InputWrapper, StyledConnectionInfo, StyledEditFlashCardsForm } from './EditFlashCardForm.styled';

interface MyFormValues {
  frontText: string;
  backText: string;
}

interface Props {
  flashCard: FlashCard;
  closeModal: () => void;
}

const EditFlashCardsForm = (props: Props) => {
  const { flashCard, closeModal } = props;
  const initialValues: MyFormValues = { frontText: flashCard ? flashCard.frontText : '', backText: flashCard ? flashCard.backText : '' };
  const { flashCardEditEndpoint, deleteFlashCardEndpoint } = endpoints;
  const { main, maintenance } = routes;
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = async (values: MyFormValues) => {
    if (!values.frontText || !values.backText || (flashCard.frontText === values.frontText && flashCard.backText === values.backText)) {
      closeModal();
      return;
    }
    setIsSending(true);
    try {
      const { frontText, backText } = values;
      await axiosPrivate.post(
        flashCardEditEndpoint,
        JSON.stringify({
          FrontText: frontText,
          BackText: backText,
          Id: flashCard.id,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      setTimeout(() => {
        navigate(main, {
          state: {
            refresh: true,
          },
        });
        setIsSending(false);
        closeModal();
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsSending(false);
    }
  };

  const deleteFlashCard = () => {
    setIsSending(true);
    try {
      axiosPrivate.post(
        deleteFlashCardEndpoint,
        JSON.stringify({
          FrontText: flashCard.frontText,
          BackText: flashCard.backText,
          Id: flashCard.id,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );

      setTimeout(() => {
        navigate(main, {
          state: {
            refresh: true,
          },
        });
        setIsSending(false);
        closeModal();
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsSending(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);

        actions.setSubmitting(false);
      }}
    >
      <StyledEditFlashCardsForm>
        {isSending ? (
          <StyledConnectionInfo />
        ) : (
          <>
            <InputWrapper>
              <EditFlashCardsInput name="frontText" placeholder="Przód karty" label="" autocomplete="off" />
            </InputWrapper>
            <InputWrapper>
              <EditFlashCardsInput name="backText" placeholder="Tył karty" label="" autocomplete="off"/>
            </InputWrapper>
            <ButtonsWrapper>
              <DefaultButton type="submit">Edytuj</DefaultButton>
              <DeleteButton onClick={() => deleteFlashCard()}>Usuń</DeleteButton>
              <CancelButton as={Link} to={maintenance} onClick={() => closeModal()}>
                Anuluj
              </CancelButton>
            </ButtonsWrapper>
          </>
        )}
      </StyledEditFlashCardsForm>
    </Formik>
  );
};

export default EditFlashCardsForm;
