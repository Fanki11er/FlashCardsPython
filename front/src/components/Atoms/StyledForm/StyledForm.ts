import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: grid;
  grid-column: 2 / span 1;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr 1fr;
  align-self: center;
  width: 100%;
  height: 550px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
