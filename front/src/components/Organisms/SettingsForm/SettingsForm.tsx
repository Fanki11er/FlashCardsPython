import { Formik } from "formik";
import {
  SmallerCancelButton,
  SmallerEditButton,
} from "../../Atoms/Buttons/Buttons";
import { FormHeader } from "../../Atoms/FormHeader/FormHeader";
import {
  ButtonsWrapper,
  Label,
  ShortInputWrapper,
  StyledFormError,
  StyledInput,
  StyledSettingsForm,
} from "./SettingsForm.styles";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import endpoints from "../../../Api/endpoints";
import { useNavigate } from "react-router";
import routes from "../../../Routes/routes";
import { UserSettingsDto } from "../../../Interfaces/Interfaces";
import { useState } from "react";
import { ConnectionInfo } from "../LoginForm/LoginForm.styles";
import useUser from "../../../Hooks/useUser";
import useHelpers from "../../../Hooks/useHelpers";

interface MyFormValues {
  dailyFlashCards: number;
  maximumBreak: number;
  percentNew: number;
}

const SettingsForm = () => {
  const { userSettings, handleSetUserSettings } = useUser();
  const axiosPrivate = useAxiosPrivate();
  const { changeSettingsEndpoint } = endpoints;
  const { main } = routes;
  const navigate = useNavigate();
  const [isError, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const { convertUserSettingsToDto, convertDtoToUserSettings } = useHelpers();
  const initialValues: MyFormValues = {
    dailyFlashCards: userSettings ? userSettings.dailyFlashCards : 20,
    maximumBreak: userSettings ? userSettings.maximumBreak : 20,
    percentNew: userSettings ? userSettings.percentNew : 20,
  };

  const handleSubmit = async (values: MyFormValues) => {
    setError("");
    const { dailyFlashCards, maximumBreak, percentNew } = values;
    if (dailyFlashCards < 0 || maximumBreak < 0 || percentNew < 0) {
      navigate(main);
      return;
    }
    if (
      dailyFlashCards === userSettings?.dailyFlashCards &&
      maximumBreak === userSettings?.maximumBreak &&
      percentNew === userSettings?.percentNew
    ) {
      navigate(main);
      return;
    }
    setIsSending(true);
    try {
      const settingsDto = convertUserSettingsToDto(values);
      const response = await axiosPrivate.post(
        changeSettingsEndpoint,

        JSON.stringify(settingsDto),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const data = response.data as UserSettingsDto;
      const convertedUserSettings = convertDtoToUserSettings(data);
      response && handleSetUserSettings(convertedUserSettings);
      setIsSending(false);
      navigate(main);
    } catch (error: any) {
      setIsSending(false);
      if (!error?.response) {
        setError("Błąd połączenia");
      } else if (error.response?.status === 401) {
        setError("Brak autoryzacji");
      } else {
        setError("Błąd");
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      <StyledSettingsForm>
        <FormHeader>Ustawienia</FormHeader>

        <ShortInputWrapper>
          <Label>Ile fishek dziennie</Label>
          <StyledInput name={"dailyFlashCards"} type="number" />
        </ShortInputWrapper>
        <ShortInputWrapper>
          <Label>Maksymalna przerwa</Label>
          <StyledInput name={"maximumBreak"} type="number" />
        </ShortInputWrapper>
        <ShortInputWrapper>
          <Label>Procent nowych</Label>
          <StyledInput name={"percentNew"} type="number" />
        </ShortInputWrapper>
        {isSending ? (
          <ConnectionInfo />
        ) : (
          <ButtonsWrapper>
            <SmallerEditButton type={"submit"}>Edytuj</SmallerEditButton>
            <SmallerCancelButton onClick={() => navigate(main)}>
              Anuluj
            </SmallerCancelButton>
          </ButtonsWrapper>
        )}

        {isError ? <StyledFormError>{isError}</StyledFormError> : null}
      </StyledSettingsForm>
    </Formik>
  );
};

export default SettingsForm;

/*
<LongInputWrapper>
          <Label>Nazwa użytkownika</Label>
          <StyledInput name="userName" autoFocus={true} />
        </LongInputWrapper>
*/
