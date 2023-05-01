import { Formik } from "formik";
import { DefaultButton } from "../../Atoms/Buttons/Buttons";
import { AnswerInput, StyledLearnAnswerForm } from "./LearnAnswerForm.styles";

interface Props {
  checkAnswer: (answer: string) => void;
  flashCards: boolean;
}

interface MyFormValues {
  answer: string;
}

const LearnAnswerForm = (props: Props) => {
  const { checkAnswer, flashCards } = props;
  const initialValues: MyFormValues = { answer: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        checkAnswer(values.answer);

        actions.setSubmitting(false);
      }}
    >
      <StyledLearnAnswerForm>
        <AnswerInput
          name="answer"
          placeholder="Odpowiedź"
          autoComplete="off"
          autoFocus={true}
        />
        <DefaultButton
          className={!flashCards ? "disable" : ""}
          type="submit"
          disabled={!flashCards ? true : false}
        >
          Sprawdź
        </DefaultButton>
      </StyledLearnAnswerForm>
    </Formik>
  );
};

export default LearnAnswerForm;
