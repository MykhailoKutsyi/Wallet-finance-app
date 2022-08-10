import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import LoginValidation from './LoginValidation';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/session/session-operations';
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
import sprite from 'assets/images/sprite.svg';

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(logIn(values));
    console.log(values);
    //     user: {id: '62f374974132a2e70577039e', email: 'example1234cc55@gmail.com', name: 'd', balance: 0}
    // [[Prototype]]: Object

    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginValidation}
    >
      {({ values, handleChange, handleBlur, isSubmitting }) => (
        <FormContainer>
          <Logo>
            <use href={sprite + '#logo'} />
          </Logo>
          <RegistrationForm>
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
              {isSubmitting ? (
                <BtnTitle>LOADING...</BtnTitle>
              ) : (
                <BtnTitle>LOG IN</BtnTitle>
              )}
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
