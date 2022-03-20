import {
  Background,
  Wrapper,
  LogoWrapper,
  Logo,
  LogoShadow,
  Title,
  LoginWrapper,
  InputWrapper,
  Input,
  Delete,
  Error,
  LoginButton,
  ButtonWrapper,
  Button,
  Split,
  KakaoWrapper,
  KakaoImg,
  KakaoText
} from '../../styles/itsload'

import { useState } from 'react'


export default function SignupPage(){
  
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [emailError, setEmailError] = useState("")
const [passwordError, setPasswordError] = useState("")

const [deleteEmail, setDeleteEmail] = useState("")
const [deletePassword, setDeletePassword] = useState("")

function onChangeEmail(event){
  setEmail(event.target.value)
  setDeleteEmail(<Delete onClick={onClickEmailDelete} t></Delete>)
  if(email !== ""){
    setEmailError("")
  }
}
function onChangePassword(event){
  setPassword(event.target.value)
  setDeletePassword(<Delete onClick={onClickPasswordDelete} t></Delete>)
  if(password !== ""){
    setPasswordError("")
  }
}

function onClickEmailDelete(){
  setEmail("")
}
function onClickPasswordDelete(){
  setPassword("")
}


//ERROR MESSAGE

let isValid = true
const onClickLogin = ()=>{
  if(email === ""){
    setEmailError("이메일 주소를 다시 확인해주세요.")
    isValid = false
  } else {
    setEmailError("")
  }
  if(password === ""){
    setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
    isValid = false
  }else {
    setPasswordError("")
  }
  if(isValid === true){
    alert("로그인 성공")
  }
}
  
  return (
    <>
      <Background>
          <Wrapper>
            
            <LogoWrapper>
              <LogoShadow>
                <Logo></Logo>
              </LogoShadow>
            </LogoWrapper>
            <Title>잇츠로드</Title>
            
            <LoginWrapper>
              <InputWrapper>
                <Input onChange={onChangeEmail} value={email} type="text"  placeholder="이메일을 입력해주세요." />
                {deleteEmail}
              </InputWrapper>
              <Error>{emailError}</Error>
              <InputWrapper>
                <Input onChange={onChangePassword} value={password} type="password" placeholder="비밀번호를 입력해주세요." />
                {deletePassword}
              </InputWrapper>
              <Error>{passwordError}</Error>
            </LoginWrapper>

            <LoginButton onClick={onClickLogin}>로그인</LoginButton>

            <ButtonWrapper>
              <Button>이메일 찾기</Button>
              <Split></Split>
              <Button>비밀번호 찾기</Button>
              <Split></Split>
              <Button>회원가입</Button>
            </ButtonWrapper>

            <KakaoWrapper >
              <KakaoImg></KakaoImg>
              <KakaoText>카카오톡으로 로그인</KakaoText>
            </KakaoWrapper>

        </Wrapper>
      </Background>
    </>
  )
}
