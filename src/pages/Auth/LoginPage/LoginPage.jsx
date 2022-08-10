import React from 'react';
import {
  Container,
  LoginImage,
  Upside,
  Title,
  Elips1,
  Elips2,
} from './LoginPage.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import Eli2 from 'assets/images/Ellipse2.png';
import Eli1 from 'assets/images/Ellipse1.png';
import sprite from 'assets/images/sprite.svg';

function LoginPage() {
  return (
    <Container>
      <Upside>
        <LoginImage>
          <use href={sprite + '#login'} />
        </LoginImage>
        <Title>Finance App</Title>
      </Upside>
      <LoginForm />
      <Elips1 src={Eli1} />
      <Elips2 src={Eli2} />
    </Container>
  );
}

export default LoginPage;
