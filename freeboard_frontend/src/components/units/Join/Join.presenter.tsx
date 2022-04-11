import * as S from "./Join.style";
import { ILoginUIProps } from "./Join.types";

export default function JoinUI(props: ILoginUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.InputWrapper>
          <S.NameLabel nameValid={props.nameValid}>이름</S.NameLabel>
          <S.Name
            ref={props.inputRef}
            onChange={props.onChangeName}
            nameValid={props.nameValid}
          ></S.Name>
          <S.InputError>{props.nameErrorMessage}</S.InputError>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.EmailLabel emailValid={props.emailValid}>이메일 주소</S.EmailLabel>
          <S.Email
            onChange={props.onChangeEmail}
            emailValid={props.emailValid}
            placeholder="예) gboard@gboad.com"
          ></S.Email>
          <S.InputError>{props.emailErrorMessage}</S.InputError>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.PasswordLabel passwordValid={props.passwordValid}>
            비밀번호
          </S.PasswordLabel>
          <S.Password
            type="password"
            onChange={props.onChangePassword}
            passwordValid={props.passwordValid}
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
          ></S.Password>
          <S.InputError>{props.passwordErrorMessage}</S.InputError>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.CheckPasswordLabel checkPasswordValid={props.checkPasswordValid}>
            비밀번호 확인
          </S.CheckPasswordLabel>
          <S.CheckPassword
            type="password"
            onChange={props.onChangeCheckPassword}
            checkPasswordValid={props.checkPasswordValid}
            placeholder="비밀번호를 한 번 더 입력해주세요."
          ></S.CheckPassword>
          <S.InputError>{props.checkPasswordErrorMessage}</S.InputError>
        </S.InputWrapper>

        <S.LoginButton onClick={props.onClickLogin} isActive={props.isActive}>
          가입하기
        </S.LoginButton>
      </S.Wrapper>
    </>
  );
}
