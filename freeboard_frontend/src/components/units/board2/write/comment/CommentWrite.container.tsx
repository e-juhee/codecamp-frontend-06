import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { MouseEvent, useState } from "react";
import { ChangeEvent } from "react"; //ChangeEvent 필요행
import { FETCH_BOARD_COMMENTS } from "../../list/comment/Comments.queries";
import CommentWriteUI from "./CommentWrite.presenter";

export default function CommentWrite(props: any) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(5);

  const [isActive, setIsActive] = useState<boolean>(false); //isActive가 true이면 버튼 활성화

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    e.target.value && password && contents
      ? setIsActive(true)
      : setIsActive(false);
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

  /* CREATE_BOARD_COMMENT */
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT); //queries에 작성한 쿼리를 가져와서 createBoard에 저장한다.
  const onClickCreate = async () => {
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
        setRating(5);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickStar = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("onClickStar 실행");
    if (e.target instanceof Element) {
      console.log("별점" + e.target.id);
      setRating(Number(e.target.id));
      console.log(rating);
    }
  };

  /*UPDATE_BOARD_COMMENT*/
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const onClickUpdate = async () => {
    try {
      console.log("boardCommentId" + props?.el?._id);
      updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: contents,
            rating: rating,
          },
          password: password,
          boardCommentId: props?.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error: any) {
      console.log(error.message);
      console.log("에러발생!!");
    }
  };

  return (
    <CommentWriteUI
      isActive={isActive}
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickStar={onClickStar}
      onClickCreate={onClickCreate}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data}
    />
  );
}
