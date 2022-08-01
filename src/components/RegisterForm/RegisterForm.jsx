import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import RegisterValidation from './RegisterValidation';
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
      validationSchema={RegisterValidation}
    >
      {({
        values,
        handleChange,
        handleBlur,
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
