import {
    Background,
    Wrapper,
    Title,
    InputWrapper,
    Email, EmailError,
    Name, NameError,
    Password, PasswordError,
    Password2, Password2Error,
    PhoneWrapper, PhoneNumber, Phone1, Phone2, Phone3,
    AuthWrapper, AuthNumber, SendButton, 
    Timer, CompleteButton,
    Location, LocationOption, LocationError,
    OptionWrapper, RadioButton, RadioLabel, OptionError,
    SubmitButton
} from '../../../styles/05-login'

import { useState } from 'react'

export default function SignupPage(){
    
    
    return (
        <Background>
        <Wrapper>
        <Title>잇츠로드</Title>
        <InputWrapper>
          <Email type="text"  placeholder="이메일을 입력해주세요." />
          <EmailError></EmailError>
        </InputWrapper>
        
        <InputWrapper>
          <Password type="password" placeholder="비밀번호를 입력해주세요." />
          <PasswordError></PasswordError>
        </InputWrapper>
        
        
          <SubmitButton >가입하기</SubmitButton>
      </Wrapper>
      </Background>
    )
}