import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import LoginValidation from './LoginValidation';
import {
  FormContainer,
  Logo,
  RegistrationForm,
  Input,
  Btn,
  BtnTitle,
  Link,
  LinkTitle,
  FormIcon,
  InputContainer,
  Error,
} from './LoginForm.styled';
import sprite from '../../images/sprite.svg';

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        dispatch(operations.register(values));
        resetForm();
    };
 
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
      }}
      validationSchema={LoginValidation}
    >
      {({
        values,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <FormContainer>
          <Logo>
            <use href={sprite + '#logo'} />
          </Logo>
          <RegistrationForm onSubmit={handleSubmit}>
            <InputContainer style={{ marginTop: '60px' }}>
              <FormIcon>
                <use href={sprite + '#icon-email'} />
              </FormIcon>
              <Input
                placeholder="E-mail"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            <Error>
              <ErrorMessage name={'email'} />
            </Error>
            </InputContainer>
            <InputContainer>
              <FormIcon>
                <use href={sprite + '#icon-password'} />
              </FormIcon>
              <Input
                placeholder="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            <Error>
              <ErrorMessage name={'password'} />
            </Error>
            </InputContainer>
            <Btn type="submit" disabled={isSubmitting}>
              <BtnTitle>LOG IN</BtnTitle>
            </Btn>
            <Link to="/register">
              <LinkTitle>REGISTER</LinkTitle>
            </Link>
          </RegistrationForm>
        </FormContainer>
      )}
    </Formik>
  );
}

export default Login;
