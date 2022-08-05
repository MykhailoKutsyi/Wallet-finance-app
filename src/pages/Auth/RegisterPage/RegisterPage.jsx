import React from 'react';
import {
  Container,
  RegistrationImage,
  Upside,
  Title,
  Elips1,
  Elips2,
} from './RegisterPage.styled';
import RegistrationForm from 'components/RegisterForm/RegisterForm'
import Eli2 from 'images/Ellipse2.png'
import Eli1 from 'images/Ellipse1.png'
import sprite from 'images/sprite.svg';

function RegistrationPage() {
  return (
    <Container>
      <Upside>
        <RegistrationImage><use href={sprite+'#register'}/></RegistrationImage>
        <Title>FINANCE APP</Title>
      </Upside>
      <RegistrationForm/>
      <Elips1 src={Eli1}/>
      <Elips2 src={Eli2}/>
    </Container>
  );
}

export default RegistrationPage;
