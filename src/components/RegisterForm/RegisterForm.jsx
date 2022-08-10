import React from 'react';

import { Formik, ErrorMessage } from 'formik';
import RegisterValidation from './RegisterValidation';
import sessionSelectors from 'redux/session/session-selectors';

import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from 'redux/session/session-operations';

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
  Progress,
  InputContainer,
  Error,
} from './RegisterForm.styled';
import sprite from 'assets/images/sprite.svg';

function Registration() {
  const dispatch = useDispatch();
  const isLoading = useSelector(sessionSelectors.getLoading);

  const handleSubmit = async ({ email, name, password }, { resetForm }) => {
    const obj = {
      email: email,
      name: name,
      password: password,
    };
    const user = await dispatch(register(obj));
    user.type === 'register/fulfilled' &&
      (await dispatch(logIn({ email, password })));
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
      }}
      validationSchema={RegisterValidation}
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

            <InputContainer>
              <FormIcon>
                <use href={sprite + '#icon-password'} />
              </FormIcon>
              <Input
                placeholder="Confirm password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <Error>
                <ErrorMessage name={'confirmPassword'} />
              </Error>
            </InputContainer>

            <Progress
              completed={values.confirmPassword.length}
              maxCompleted={values.password.length}
              bgColor={'#24cca7'}
              height={'10px'}
              customLabel={' '}
            />
            <InputContainer>
              <FormIcon>
                <use href={sprite + '#account'} />
              </FormIcon>
              <Input
                placeholder="First name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
              />
              <Error>
                <ErrorMessage name={'name'} />
              </Error>
            </InputContainer>

            <Btn type="submit" disabled={isSubmitting || isLoading}>
              {isSubmitting || isLoading ? (
                <BtnTitle>LOADING...</BtnTitle>
              ) : (
                <BtnTitle>REGISTER</BtnTitle>
              )}
            </Btn>
            <Link to="/login">
              <LinkTitle>LOG IN</LinkTitle>
            </Link>
          </RegistrationForm>
        </FormContainer>
      )}
    </Formik>
  );
}

export default Registration;
