import { useRouter } from "next/router";
import { MouseEvent } from "react";
import * as S from "./Login.style";
import { ILoginUIProps } from "./Login.types";
// const MENUS = [
//   { name: "이메일 가입", page: "/join" },
//   { name: "이메일 찾기", page: "/join" },
//   { name: "비밀번호 찾기", page: "/join" },
// ];
export default function LoginUI(props: ILoginUIProps) {
  const deleteAccessToken = () => {
    localStorage.removeItem("accessToken");
    router.reload();
  };
  const router = useRouter();

  const onClickLink = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) {
      router.push(e.target.id);
    }
  };
  return (
    <>
      <S.Wrapper>
        <S.Logo>로고자리</S.Logo>
        <button onClick={deleteAccessToken}>토큰지우기</button>
        <S.InputWrapper>
          <S.EmailLabel emailValid={props.emailValid}>이메일 주소</S.EmailLabel>
          <S.Email
            ref={props.inputRef}
            onChange={props.onChangeEmail}
            emailValid={props.emailValid}
            defaultValue="aa@a.com"
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
            defaultValue="ab12345!"
          ></S.Password>
          <S.InputError>{props.passwordErrorMessage}</S.InputError>
        </S.InputWrapper>
        <S.SaveID onClick={props.onClickSaveID}>
          {props.isChecked ? <S.FilledCheckIcon /> : <S.CheckIcon />}
          로그인 상태 유지
        </S.SaveID>
        <S.LoginButton onClick={props.onClickLogin} isActive={props.isActive}>
          로그인
        </S.LoginButton>
        <S.SubButtonWrapper>
          <S.SubButton id="/join" onClick={onClickLink}>
            이메일 가입
          </S.SubButton>
          <div>|</div>
          <S.SubButton id="/join" onClick={onClickLink}>
            이메일 찾기
          </S.SubButton>
          <div>|</div>
          <S.SubButton id="/join" onClick={onClickLink}>
            비밀번호 찾기
          </S.SubButton>
        </S.SubButtonWrapper>
      </S.Wrapper>
    </>
  );
}
