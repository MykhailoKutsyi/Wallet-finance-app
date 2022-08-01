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
  Progress,
  InputContainer,
  Error,
} from './RegisterForm.styled';
import sprite from '../../images/sprite.svg';

function Registration() {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6).max(12).required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    firstName: Yup.string()
      .min(1, 'Must be 1 character or more')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
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
          {console.log(values)}
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
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
              />
              <Error>
                <ErrorMessage name={'firstName'} />
              </Error>
            </InputContainer>

            <Btn type="submit" disabled={isSubmitting}>
              <BtnTitle>REGISTER</BtnTitle>
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
