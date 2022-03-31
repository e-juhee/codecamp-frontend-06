import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { MouseEvent, useState } from "react";
import { ChangeEvent } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/Comments.queries";
import CommentWriteUI from "./CommentWrite.presenter";
import { ICommentWriteProps } from "./CommentWrite.types";
import { warningModal } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IUpdateBoardCommentInput,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contents, setContents] = useState<string>(" ");
  const [rating, setRating] = useState<number>(5);

  const [isActive, setIsActive] = useState<boolean>(false); //isActive가 true이면 버튼 활성화

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    e.target.value && password && contents
      ? setIsActive(true)
      : setIsActive(false);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(e);
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

  const onClickStar = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("onClickStar 실행");
    if (e.target instanceof Element) {
      setRating(Number(e.target.id));
    }
  };

  /* CREATE_BOARD_COMMENT */
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT); //queries에 작성한 쿼리를 가져와서 createBoard에 저장한다.
  const onClickCreate = async () => {
    if (!writer) {
      warningModal("작성자를 입력해주세요.");
      return;
    }
    if (!password) {
      warningModal("비밀번호를 입력해주세요.");
      return;
    }
    if (!contents) {
      warningModal("내용을 입력해주세요.");
      return;
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
        setWriter("");
        setContents("");
        setPassword("");
        setRating(5);
      } catch (error) {
        if (error instanceof Error) warningModal(error.message);
      }
    }
  };

  /*UPDATE_BOARD_COMMENT*/
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const onClickUpdate = async () => {
    if (!password) {
      warningModal("비밀번호를 입력해주세요.");
      return;
    }
    // if (!contents) {
    //   warningModal("내용을 입력해주세요.");
    //   return;
    // }

    const myUpdateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) {
      myUpdateBoardCommentInput.contents = contents;
    }
    if (rating) myUpdateBoardCommentInput.rating = rating;

    if (password && contents) {
      try {
        await updateBoardComment({
          variables: {
            updateBoardCommentInput: myUpdateBoardCommentInput,
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
      } catch (error) {
        if (error instanceof Error) warningModal(error.message);
      }
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
      data={props.data} // Comments.container에서 온 fetchBoardComments : 값이 안 온다.
      index={props.index}
    />
  );
}
