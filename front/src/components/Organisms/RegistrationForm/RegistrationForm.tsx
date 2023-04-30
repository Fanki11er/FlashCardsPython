import { Formik, ErrorMessage } from 'formik';
import { DefaultButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import FormInput from '../../Molecules/FormInput/FormInput';
import { ErrorInput, InputWrapper, RegistrationPerson, StyledRegistrationForm } from './RegistrationForm.styles';
import * as Yup from 'yup';
import axios from '../../../Api/axios';
import endpoints from '../../../Api/endpoints';
import { useState } from 'react';
import { FormError } from '../../Atoms/FormError/FormError';
import { ConnectionInfo } from '../LoginForm/LoginForm.styles';
import { useNavigate } from 'react-router';
import routes from '../../../Routes/routes';
import useAutoFocus from '../../../Hooks/useAutoFocus';

interface MyFormValues {
  name: string;
  password: string;
  email: string;
  confirmPassword: string;
}

class UserRegistrationCredentials {
  Name = '';
  Email = '';
  Password = '';
  ConfirmPassword = '';

  constructor(values: MyFormValues) {
    this.Name = values.name;
    this.Email = values.email;
    this.Password = values.password;
    this.ConfirmPassword = values.confirmPassword;
  }
}

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Login za krótki').required('Pole wymagane'),
  email: Yup.string().email('Nieprawidłowy email').required('Pole wymagane'),
  password: Yup.string().min(6, 'Za króthie hasło').required('Pole wymagane'),
  confirmPassword: Yup.string().min(6, 'Za króthie hasło').required('Pole wymagane'),
});

const RegistrationForm = () => {
  const { main } = routes;
  const [isConnecting, setIsConnecting] = useState(false);
  const [isError, setError] = useState('');
  const navigate = useNavigate();
  const nameInput = useAutoFocus();

  const initialValues: MyFormValues = { name: '', password: '', email: '', confirmPassword: '' };
  const { registerEndpoint } = endpoints;

  const handleSubmit = async (userCredentials: UserRegistrationCredentials) => {
    setIsConnecting(true);
    setError('');
    try {
      await axios.post(registerEndpoint, JSON.stringify(userCredentials), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setIsConnecting(false);
      navigate(main);
    } catch (error: any) {
      setIsConnecting(false);
      if (!error?.response) {
        setError('Błąd połączenia');
      } else if (error.response?.status === 409) {
        setError('Taki email już istnieje');
      } else {
        setError('Błąd rejestracji');
      }
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={(values, actions) => {
        const userCredentials = new UserRegistrationCredentials(values);
        handleSubmit(userCredentials);

        actions.setSubmitting(false);
      }}
    >
      <StyledRegistrationForm>
        <FormHeader>Rejestracja</FormHeader>
        <InputWrapper>
          <FormInput name="name" placeholder="Imię" label="Imię*" inputRef={nameInput} />
          <ErrorMessage name="name" render={(msg) => <ErrorInput>{msg}</ErrorInput>} />
        </InputWrapper>
        <InputWrapper>
          <FormInput name="email" placeholder="Email" label="Email*" type="email" />
          <ErrorMessage name="email" render={(msg) => <ErrorInput>{msg}</ErrorInput>} />
        </InputWrapper>
        <InputWrapper>
          <FormInput name="password" placeholder="Hasło" label="Hasło*" type="password" />
          <ErrorMessage name="password" render={(msg) => <ErrorInput>{msg}</ErrorInput>} />
        </InputWrapper>
        <InputWrapper>
          <FormInput name="confirmPassword" placeholder="Powtórz Hasło" label="Powtórz Hasło*" type="password" />
          <ErrorMessage name="confirmPassword" render={(msg) => <ErrorInput>{msg}</ErrorInput>} />
        </InputWrapper>

        {isConnecting ? <ConnectionInfo /> : <DefaultButton type="submit">{isError ? 'Spróbuj ponownie' : 'Zarejestruj'}</DefaultButton>}
        {isError ? <FormError>{isError}</FormError> : null}
        <RegistrationPerson />
      </StyledRegistrationForm>
    </Formik>
  );
};

export default RegistrationForm;
//<--
//
//
