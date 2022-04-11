import * as S from "./Join.style";
import { ILoginUIProps } from "./Join.types";

export default function JoinUI(props: ILoginUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.InputWrapper>
          <S.NameLabel nameError={props.nameError}>이름</S.NameLabel>
          <S.Name
            ref={props.inputRef}
            onChange={props.onChangeName}
            nameError={props.nameError}
          ></S.Name>
          <S.InputError>{props.nameError}</S.InputError>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.EmailLabel emailError={props.emailError}>이메일 주소</S.EmailLabel>
          <S.Email
            onChange={props.onChangeEmail}
            emailError={props.emailError}
            placeholder="예) gboard@gboad.com"
          ></S.Email>
          <S.InputError>{props.emailError}</S.InputError>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.PasswordLabel passwordError={props.passwordError}>
            비밀번호
          </S.PasswordLabel>
          <S.Password
            type="password"
            onChange={props.onChangePassword}
            passwordError={props.passwordError}
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
          ></S.Password>
          <S.InputError>{props.passwordError}</S.InputError>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.CheckPasswordLabel checkPasswordError={props.checkPasswordError}>
            비밀번호 확인
          </S.CheckPasswordLabel>
          <S.CheckPassword
            type="password"
            onChange={props.onChangeCheckPassword}
            checkPasswordError={props.checkPasswordError}
            placeholder="비밀번호를 한 번 더 입력해주세요."
          ></S.CheckPassword>
          <S.InputError>{props.checkPasswordError}</S.InputError>
        </S.InputWrapper>

        <S.JoinButton onClick={props.onClickJoin} isActive={props.isActive}>
          가입하기
        </S.JoinButton>
      </S.Wrapper>
    </>
  );
}
