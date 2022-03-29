// 컨테이너 컴포넌트
import BoardWriteUI from "./BoardWrite.presenter"; // ./: 현위치에서
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react"; // ChangeEvent 필요행
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [isActive, SetIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  //   const [data, setData] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  /* 수정 버튼 클릭 */
  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.myNumber) }; // number는 꼭 필요하니까 일단 넣어두고 시작
    // 변경이 일어나지 않은 state는 빈 값, 변경이 일어났으면 값이 들어가있음
    // myVariables : 값이 들어가있는(변경이 일어난) state만 모은 객체 생성
    if (myWriter !== "") myVariables.writer = myWriter; // 입력값이 있는 경우에만 myVariables.의 writer에 myWriter를 넣어줘
    if (myTitle !== "") myVariables.title = myTitle;
    if (myContents !== "") myVariables.contents = myContents;
    await updateBoard({
      // variables: {number: Number(router.query.myNumber), writer: myWriter, title: myTitle, contents: myContents} //기존 방식
      variables: myVariables, // 변경이 일어난 state만 들어있는 객체
    });
    alert("게시글 수정에 성공하였습니다.");
    router.push(`/09-01-boards/${router.query.myNumber}`);
    // router.query.myNumber는수정화면에서 사용 가능 ! 등록 화면의 경로에는 myNumber가 없기 때문이다.
    // updateBoard를 result에 담아서 오른쪽처럼 쓸 수 있다. ${result.data.updateBoard.number}
  };

  /* 등록 버튼 클릭 */
  const callGraphqlApi = async () => {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    alert("게시글 등록에 성공하였습니다.");
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
    // console.log(result)
    // setData(result.data.createBoard.message)
  };

  /* onChange */
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      SetIsActive(true);
    } else {
      SetIsActive(false);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      SetIsActive(true);
    } else {
      SetIsActive(false);
    }
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      SetIsActive(true);
    } else {
      SetIsActive(false);
    }
  };

  return (
    // 자동완성으로 엔터 치면 자동으로 Import가 된다.
    <BoardWriteUI
      // props라는 객체가 생성되어 함수가 value로 들어가서 props를 통해 전달된다.
      // 키는 자유롭게 지정이 가능하나, 가급적 통일한다.
      // 자식에게 보낼 데이터를 적는다.
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      isActive={isActive}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data} // edit/index.js 수정하기 페이지에서 보내준 fetchBoard 결과
    />
  );
}
