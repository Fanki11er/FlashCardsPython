import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../../Api/axios";
import endpoints from "../../../Api/endpoints";
import useAuth from "../../../Hooks/useAuth";
import { DefaultButton } from "../../Atoms/Buttons/Buttons";
import { FormError } from "../../Atoms/FormError/FormError";
import { FormHeader } from "../../Atoms/FormHeader/FormHeader";
import FormInput from "../../Molecules/FormInput/FormInput";
import {
  LoginPerson,
  StyledLoginForm,
  ConnectionInfo,
} from "./LoginForm.styles";
import { Navigate } from "react-router-dom";
import routes from "../../../Routes/routes";

interface MyFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { main } = routes;
  const initialValues: MyFormValues = { username: "", password: "" };
  const { loginEndpoint } = endpoints;
  const [isConnecting, setIsConnecting] = useState(false);
  const [isError, setError] = useState("");
  const { handleSetToken, getAccessFromStorage } = useAuth();
  const navigate = useNavigate();
  if (getAccessFromStorage()) {
    return <Navigate to={main} />;
  }

  const handleSubmit = async (values: MyFormValues) => {
    setIsConnecting(true);
    setError("");
    try {
      const { username, password } = values;
      const response = await axios.post(
        loginEndpoint,
        JSON.stringify({
          username: username,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      response && handleSetToken(response?.data);
      setIsConnecting(false);
      navigate("/Main", { replace: true });
    } catch (error: any) {
      setIsConnecting(false);
      if (!error?.response) {
        setError("Błąd połączenia");
      } else if (error.response?.status === 400) {
        setError("Błędny login lub hasło");
      } else if (error.response?.status === 401) {
        setError("Brak autoryzacji");
      } else {
        setError("Błąd logowania");
      }
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
      <StyledLoginForm>
        <FormHeader>Logowanie</FormHeader>
        <FormInput name="username" placeholder="User name" label="User name" />
        <FormInput
          name="password"
          placeholder="Hasło"
          label="Hasło"
          type="password"
        />
        {isConnecting ? (
          <ConnectionInfo />
        ) : (
          <DefaultButton type="submit">
            {isError ? "Spróbuj ponownie" : "Zaloguj"}
          </DefaultButton>
        )}
        {isError ? <FormError>{isError}</FormError> : null}
        <LoginPerson />
      </StyledLoginForm>
    </Formik>
  );
};

export default LoginForm;
