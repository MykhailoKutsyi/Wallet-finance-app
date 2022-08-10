import React from 'react';
import {
  Container,
  RegistrationImage,
  Upside,
  Title,
  Elips1,
  Elips2,
} from './RegisterPage.styled';
import RegistrationForm from 'components/RegisterForm/RegisterForm';
import Eli2 from 'assets/images/Ellipse2.png';
import Eli1 from 'assets/images/Ellipse1.png';
import sprite from 'assets/images/sprite.svg';

function RegistrationPage() {
  return (
    <Container>
      <Upside>
        <RegistrationImage>
          <use href={sprite + '#register'} />
        </RegistrationImage>
        <Title>Finance App</Title>
      </Upside>
      <RegistrationForm />
      <Elips1 src={Eli1} />
      <Elips2 src={Eli2} />
    </Container>
  );
}

export default RegistrationPage;
