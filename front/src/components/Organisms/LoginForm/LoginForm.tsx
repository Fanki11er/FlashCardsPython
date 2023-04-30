import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from '../../../Api/axios';
import endpoints from '../../../Api/endpoints';
import useAuth from '../../../Hooks/useAuth';
import useAutoFocus from '../../../Hooks/useAutoFocus';
import { AuthUser } from '../../../Interfaces/Interfaces';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormError } from '../../Atoms/FormError/FormError';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import FormInput from '../../Molecules/FormInput/FormInput';
import { LoginPerson, StyledLoginForm, ConnectionInfo } from './LoginForm.styles';

interface MyFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = { email: '', password: '' };
  const { loginEndpoint } = endpoints;
  const [isConnecting, setIsConnecting] = useState(false);
  const [isError, setError] = useState('');
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const emailInput = useAutoFocus();

  const handleSubmit = async (values: MyFormValues) => {
    setIsConnecting(true);
    setError('');
    try {
      const { email, password } = values;
      const response = await axios.post(
        loginEndpoint,
        JSON.stringify({
          Email: email,
          Password: password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      response && setAuth(response?.data as AuthUser);
      setIsConnecting(false);
      navigate('/Main', { replace: true });
    } catch (error: any) {
      setIsConnecting(false);
      if (!error?.response) {
        setError('Błąd połączenia');
      } else if (error.response?.status === 400) {
        setError('Błędny login lub hasło');
      } else if (error.response?.status === 401) {
        setError('Brak autoryzacji');
      } else {
        setError('Błąd logowania');
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
        <FormInput name="email" placeholder="Email" label="Email" type="email" inputRef={emailInput} />
        <FormInput name="password" placeholder="Hasło" label="Hasło" type="password" />
        {isConnecting ? <ConnectionInfo /> : <DefaultButton type="submit">{isError ? 'Spróbuj ponownie' : 'Zaloguj'}</DefaultButton>}
        {isError ? <FormError>{isError}</FormError> : null}
        <LoginPerson />
      </StyledLoginForm>
    </Formik>
  );
};

export default LoginForm;
