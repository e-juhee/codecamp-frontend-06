import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  // handleSubmit : onClickSubmit 함수가 실행될 때 입력한 스테이트들의 데이터를 넣어주게 된다. data를 받아서 사용할 수 있다.
  // 버튼이 눌리면 실행된다.
  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <input type="text" {...register("contents")} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
