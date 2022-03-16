import {
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
} from '../../../styles/signup'

import { useState } from 'react'

export default function SignupPage(){
    
    // 인증번호 생성
    const [auth, setAuth] = useState('000000')
    function onClickBtn(){
        let token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        setAuth(token)
    }

    //가입 버튼 클릭 시
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [password1, setPassword1] = useState("")
    const [password1Error, setPassword1Error] = useState("")
    const [password2, setPassword2] = useState("")
    const [password2Error, setPassword2Error] = useState("")
    const [location, setLocation] = useState("")
    const [locationError, setLocationError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }
    function onChangeName(event){
        setName(event.target.value)
    }
    function onChangePassword1(event){
        setPassword1(event.target.value)
    }
    function onChangePassword2(event){
        setPassword2(event.target.value)
    }
    function onChangeLocation(event){
        setLocation(event.target.value)
    }

    let isValid = true
    function onClickSignup(){
        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다.")
            isValid = false
        } else {
            setEmailError("")
        }
        if(name === ""){
            setNameError("이름을 입력해주세요.")
            isValid = false
        } else {
            setNameError("")
        }
        if(password1 === ""){
            setPassword1Error("비밀번호를 입력해주세요.")
            isValid = false
        } else {
            setPassword1Error("")
        }
        if(password2 === ""){
            setPassword2Error("비밀번호를 다시 입력해주세요.")
            isValid = false
        } else {
            setPassword2Error("")
        }
        if(password1 !== password2){
            setPassword2Error("비밀번호가 일치하지 않습니다.")
            isValid = false
        } else {
            setPassword2Error("")
        }        
        if(location !== "서울" && location !== "경기" && location !== "인천"){
            setLocationError( "지역을 선택해 주세요.")
            isValid = false
        } else {
            setLocationError("")
        } 
        if(isValid === true){
            alert("회원가입을 축하합니다.")
        }
    }

    
    return (
        <Wrapper>
        <Title>코드캠프 회원가입</Title>
        <InputWrapper>
          <Email type="text" onChange={onChangeEmail} placeholder="이메일을 입력해주세요." />
          <EmailError>{emailError}</EmailError>
        </InputWrapper>
        <InputWrapper>
          <Name type="text" onChange={onChangeName} placeholder="이름을 입력해주세요." />
          <NameError>{nameError}</NameError>
        </InputWrapper>
        <InputWrapper>
          <Password type="password" onChange={onChangePassword1} placeholder="비밀번호를 입력해주세요." />
          <PasswordError>{password1Error}</PasswordError>
        </InputWrapper>
        <InputWrapper>
          <Password2 type="password" onChange={onChangePassword2} placeholder="비밀번호를 다시 입력해주세요." />
          <Password2Error>{password2Error}</Password2Error>
        </InputWrapper>
        <PhoneWrapper>
            <PhoneNumber>
                <Phone1 type="text"/>-
                <Phone2 type="text"/>-
                <Phone3 type="text"/>
            </PhoneNumber>
            <AuthWrapper>
                <AuthNumber>{auth}</AuthNumber>
                <SendButton onClick={onClickBtn}>인증번호 전송</SendButton>
            </AuthWrapper>
            <AuthWrapper>
                <Timer>3:00</Timer>
                <CompleteButton>인증 완료</CompleteButton>
            </AuthWrapper>
        </PhoneWrapper>
        <InputWrapper>
          <Location onChange={onChangeLocation}>
              <LocationOption disabled selected>지역을 선택하세요</LocationOption>
              <LocationOption>서울</LocationOption>
              <LocationOption>경기</LocationOption>
              <LocationOption>인천</LocationOption>
          </Location>
          <LocationError>{locationError}</LocationError>
        </InputWrapper>
        <OptionWrapper>
          <RadioButton checked type="radio" id="woman" name="radio-button" />
          <RadioLabel>여성</RadioLabel>
          <RadioButton type="radio" id="man" name="radio-button" />
          <RadioLabel>남성</RadioLabel>
        </OptionWrapper>
        <OptionError></OptionError>
          <SubmitButton onClick={onClickSignup}>가입하기</SubmitButton>
      </Wrapper>
    )
}