import React from 'react';
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
} from './LoginForm.styled';
import sprite from '../../images/sprite.svg'

function Login() {
  return (
    <FormContainer>
      <Logo ><use href={sprite+'#logo'}/></Logo>
      <RegistrationForm>
        <InputContainer style={{ marginTop: '60px' }}>
           <FormIcon><use href={sprite+'#icon-email'}/></FormIcon>
          <Input placeholder="E-mail" />
        </InputContainer>
        <InputContainer>
          <FormIcon><use href={sprite+'#icon-password'}/></FormIcon>
          <Input placeholder="Password" />
        </InputContainer>
        <Btn type="submit">
          <BtnTitle>LOG IN</BtnTitle>
        </Btn>
        <Link to="/register">
          <LinkTitle>REGISTER</LinkTitle>
        </Link>
      </RegistrationForm>
    </FormContainer>
  );
}

export default Login;
