import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import { MouseEvent, useState } from "react";
import { ChangeEvent } from "react"; //ChangeEvent 필요행
import { FETCH_BOARD_COMMENTS } from "../../list/comment/Comments.queries";
import CommentWriteUI from "./CommentWrite.presenter";

export default function CommentWrite() {
  /*화면 이동 시 사용되는 라우터 */
  const router = useRouter();
  /* 인풋창 state */
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(5);

  /* true가 들어가면 버튼을 활성화하는 state : presenter로 넘어가서 style로 전달된다. */
  const [isActive, setIsActive] = useState<boolean>(false); //isActive가 true이면 버튼 활성화

  /* 인풋창에 값이 입력되면 실행되는 함수 */
  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    //ts: 리액트의 ChangeEvent import하기 (HTML태그타입Element: 태그 타입 주의하기)
    setWriter(e.target.value); //입력값을 스테이트에 넣기
    e.target.value && password && contents
      ? setIsActive(true)
      : setIsActive(false); // 4개의 필수값이 입력되면 isActive = true
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    e.target.value && writer && contents
      ? setIsActive(true)
      : setIsActive(false);
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    e.target.value && writer && password
      ? setIsActive(true)
      : setIsActive(false);
  };
  const onChangeRating = (score: number) => {
    setRating(score);
  };

  /* CREATE_BOARD */
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT); //queries에 작성한 쿼리를 가져와서 createBoard에 저장한다.
  const onClickCreate = async () => {
    //async를 붙여야 await를 붙일 수 있다.
    if (!writer) {
      console.log("작성자를 입력해주세요.");
    } else if (!password) {
      console.log("비밀번호를 입력해주세요.");
    } else if (!contents) {
      console.log("내용을 입력해주세요.");
    }
    if (writer && password && contents) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: writer,
              password: password,
              contents: contents,
              rating: rating,
            },
            boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: String(router.query.boardId) },
            },
          ],
        });
        console.log("<<CREATE_BOARD_COMMENT의 result>>");
        console.log(result);
        setWriter("");
        setContents("");
        setPassword("");
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const [isStar1, setIsStar1] = useState(true);
  const [isStar2, setIsStar2] = useState(true);
  const [isStar3, setIsStar3] = useState(true);
  const [isStar4, setIsStar4] = useState(true);
  const [isStar5, setIsStar5] = useState(true);

  const onClickStar = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("onClickStar 실행");
    if (e.target instanceof Element) {
      console.log("별점" + e.target.id);
      setRating(Number(e.target.id));

      switch (e.target.id) {
        case "1":
          setIsStar1(true);
          setIsStar2(false);
          setIsStar3(false);
          setIsStar4(false);
          setIsStar5(false);
          break;
        case "2":
          setIsStar1(true);
          setIsStar2(true);
          setIsStar3(false);
          setIsStar4(false);
          setIsStar5(false);
          break;
        case "3":
          setIsStar1(true);
          setIsStar2(true);
          setIsStar3(true);
          setIsStar4(false);
          setIsStar5(false);
          break;

        case "4":
          setIsStar1(true);
          setIsStar2(true);
          setIsStar3(true);
          setIsStar4(true);
          setIsStar5(false);
          break;

        case "5":
          setIsStar1(true);
          setIsStar2(true);
          setIsStar3(true);
          setIsStar4(true);
          setIsStar5(true);
          break;
      }
      console.log(rating);
    }
  };
  // /* UPDATE_BOARD */
  // const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  // const onClickUpdate = async () => {
  //   //variables : 값이 들어가 있는(사용자가 수정한) state만 넣는 객체 생성 (수정하지 않은 state는 제외하고 수정한 state만 쿼리에 전달)

  //   const myUpdateBoardInput: IUpdateBoardInput = {};

  //   const myVariables: IVariables = {
  //     //boardId와 password는 꼭 필요하니까 먼저 넣어둠
  //     boardId: String(router.query.boardId),
  //     password: password, //boardId: router가 가지고 있는 boardId(경로의 아이디)를 입력해준다. (boardId는 사용자가 입력하는 값이 아니라, 리턴값으로 주어지는 값이기 때문)
  //     updateBoardInput: myUpdateBoardInput,
  //   };

  //   if (title) myUpdateBoardInput.title = title; //입력값이 있는 경우에만 myVariables에 title을 key로 하는 'title의 입력값'을 value로 넣어줘
  //   if (contents) myUpdateBoardInput.contents = contents;
  //   try {
  //     await updateBoard({
  //       variables: myVariables, //위에서 만든 (변경이 일어난 state만 들어있는) 객체를 updateBoard에 입력값으로 전달
  //     });
  //     alert("수정이 완료되었습니다.");
  //     /* Detail 화면으로 라우팅*/
  //     router.push(`/boards2/${router.query.boardId}`); //CREATE에서 쓴 ${result.data.updateBoard._id}를 써도 된다. //boardId는 내가 생성한 [대괄호 폴더명] (참고: UPDATE가 아닌 CREATE 화면에는 경로에 boardId가 없기 때문에 리턴 받는 아이디로 라우팅 해야만 한다!)
  //   } catch (error: any) {
  //     alert(error.message);
  //   }
  // };

  return (
    <CommentWriteUI // 자동완성으로 뜰 때 엔터를 쳐서 선택하면 자동으로 Import가 된다.
      /* 자식에게 보낼 데이터*/
      // 아래처럼 함수나 변수를 작성하면, props라는 객체가 생성되어 여기에 작성한 함수나 변수가 value로 들어가고, return의 페이지에 props를 통해 전달되어서 전달 받은 페이지에서 사용할 수 있다.
      // 키는 자유롭게 지정이 가능하나, 가급적 함수/변수명과 통일한다.
      isActive={isActive}
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickStar={onClickStar}
      // onChangeRating={onChangeRating}
      onClickCreate={onClickCreate}
      isStar1={isStar1}
      isStar2={isStar2}
      isStar3={isStar3}
      isStar4={isStar4}
      isStar5={isStar5}
      // onClickUpdate={onClickUpdate}
      // data={props.data} //edit/index.js 수정하기 페이지에서 보내준 fetchBoard 결과
    />
  );
}
