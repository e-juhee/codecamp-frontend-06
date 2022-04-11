import * as S from "./Join.style";
import { ILoginUIProps } from "./Join.types";

export default function JoinUI(props: ILoginUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.InputWrapper>
          <S.NameLabel nameError={props.errors.name}>이름</S.NameLabel>
          <S.Name
            ref={props.inputRef}
            onChange={props.onChangeName}
            nameError={props.errors.name}
          ></S.Name>
          <S.InputError>{props.errors.name}</S.InputError>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.EmailLabel emailError={props.errors.email}>
            이메일 주소
          </S.EmailLabel>
          <S.Email
            onChange={props.onChangeEmail}
            emailError={props.errors.email}
            placeholder="예) gboard@gboad.com"
          ></S.Email>
          <S.InputError>{props.errors.email}</S.InputError>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.PasswordLabel passwordError={props.errors.password}>
            비밀번호
          </S.PasswordLabel>
          <S.Password
            type="password"
            onChange={props.onChangePassword}
            passwordError={props.errors.password}
            placeholder="영문, 숫자, 특수문자 조합 8-16자"
          ></S.Password>
          <S.InputError>{props.errors.password}</S.InputError>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.CheckPasswordLabel checkPasswordError={props.errors.checkPassword}>
            비밀번호 확인
          </S.CheckPasswordLabel>
          <S.CheckPassword
            type="password"
            onChange={props.onChangeCheckPassword}
            checkPasswordError={props.errors.checkPassword}
            placeholder="비밀번호를 한 번 더 입력해주세요."
          ></S.CheckPassword>
          <S.InputError>{props.errors.checkPassword}</S.InputError>
        </S.InputWrapper>

        <S.JoinButton onClick={props.onClickJoin} isActive={props.isActive}>
          가입하기
        </S.JoinButton>
      </S.Wrapper>
    </>
  );
}
