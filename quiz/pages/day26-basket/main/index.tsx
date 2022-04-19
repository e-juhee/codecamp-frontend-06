import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
interface IData {
  email: string;
  password: string;
}

export default function MainPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const onClickSubmit = async (data: IData) => {
    try {
      const result = await loginUser({
        variables: { ...data },
      });
      // console.log(result.data.loginUser.accessToken);
      // confirm으로 ㅂㅏ꾸기
      const basket = JSON.parse(localStorage.getItem("basket") || "[]");
      if (basket.length) {
        confirm(
          "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?"
        );
        router.push("./boards");
      } else {
        alert("로그인되었습니다. 장바구니에 담긴 게시물이 없습니다.");
      }
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      아이디
      <input type="text" {...register("email")} />
      비밀번호
      <input type="password" {...register("password")} />
      <button>login</button>
    </form>
  );
}
