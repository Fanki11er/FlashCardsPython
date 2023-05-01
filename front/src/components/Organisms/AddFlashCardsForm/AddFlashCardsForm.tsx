import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import endpoints from "../../../Api/endpoints";
import routes from "../../../Routes/routes";
import { CancelButton, DefaultButton } from "../../Atoms/Buttons/Buttons";
import { FormHeader } from "../../Atoms/FormHeader/FormHeader";
import {
  ButtonsWrapper,
  InputWrapper,
  NewFlashCardsInput,
  StyledAddFlashCardsForm,
  StyledError,
  StyledFormError,
  StyledPerson,
} from "./AddFlashCardsForm.styled";
import * as Yup from "yup";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { ConnectionInfo } from "../LoginForm/LoginForm.styles";
import { useState } from "react";

interface MyFormValues {
  frontText: string;
  backText: string;
}

const AddFlashCardsForm = () => {
  const initialValues: MyFormValues = { frontText: "", backText: "" };
  const { createFlashCardEndpoint } = endpoints;
  const { main } = routes;
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [isError, setError] = useState("");

  const AddingSchema = Yup.object().shape({
    frontText: Yup.string().required("Pole wymagane"),
    backText: Yup.string().required("Pole wymagane"),
  });

  const handleSubmit = async (values: MyFormValues) => {
    setIsSending(true);
    setError("");
    try {
      const { frontText, backText } = values;
      axiosPrivate.post(
        createFlashCardEndpoint,
        JSON.stringify({
          front_text: frontText,
          back_text: backText,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setTimeout(() => {
        navigate(main, {
          state: {
            refresh: true,
          },
        });
        setIsSending(false);
      }, 1000);
    } catch (error: any) {
      if (!error?.response) {
        setError("Błąd połączenia");
      } else if (error.response?.status === 401) {
        setError("Brak autoryzacji");
      } else {
        setError("Błąd połączenia");
      }
      setIsSending(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddingSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);

        actions.setSubmitting(false);
      }}
    >
      <StyledAddFlashCardsForm>
        <FormHeader>Dodaj nową</FormHeader>
        <InputWrapper>
          <NewFlashCardsInput
            name="frontText"
            placeholder="Przód karty"
            label=""
            autocomplete="off"
            autoFocus={true}
          />
          <ErrorMessage
            name="frontText"
            render={(msg) => <StyledError>{msg}</StyledError>}
          />
        </InputWrapper>
        <InputWrapper>
          <NewFlashCardsInput
            name="backText"
            placeholder="Tył karty"
            label=""
            autocomplete="off"
          />
          <ErrorMessage
            name="backText"
            render={(msg) => <StyledError>{msg}</StyledError>}
          />
        </InputWrapper>

        {isSending ? (
          <ConnectionInfo />
        ) : (
          <ButtonsWrapper>
            <DefaultButton type="submit">Dodaj</DefaultButton>
            <CancelButton as={Link} to={main}>
              Anuluj
            </CancelButton>
          </ButtonsWrapper>
        )}
        <StyledPerson />
        {isError ? <StyledFormError>{isError}</StyledFormError> : null}
      </StyledAddFlashCardsForm>
    </Formik>
  );
};

export default AddFlashCardsForm;
