import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6).max(12).required('Password is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
      }}
      validationSchema={validate}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
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
