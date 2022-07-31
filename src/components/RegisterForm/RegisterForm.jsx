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
  Progress,
  InputContainer,
} from './RegisterForm.styled';
import sprite from '../../images/sprite.svg'


function Registration() {
  return (
   
      <FormContainer>
        <Logo ><use href={sprite+'#logo'}/></Logo>
        <RegistrationForm>
          <InputContainer style = {{marginTop: '60px'}}>
            <FormIcon><use href={sprite+'#icon-email'}/></FormIcon>
            <Input  placeholder="E-mail" />
          </InputContainer>  
          <InputContainer>
          <FormIcon><use href={sprite+'#icon-password'}/></FormIcon>
            <Input placeholder="Password"/>
          </InputContainer>   
          <InputContainer>
          <FormIcon><use href={sprite+'#icon-password'}/></FormIcon>
            <Input placeholder="Confirm password"/>
          </InputContainer> 
            <Progress completed={6} maxCompleted={12} bgColor={'#24cca7'} height={'10px'} customLabel={''}/>
          <InputContainer>
            <FormIcon><use href={sprite+'#account'}/></FormIcon>
            <Input placeholder = "First name"/>
          </InputContainer> 
            <Btn type='submit'><BtnTitle>REGISTER</BtnTitle></Btn>
            <Link to='/login'><LinkTitle>LOG IN</LinkTitle></Link>
        </RegistrationForm>
      </FormContainer>
    
  );
}

export default Registration;
