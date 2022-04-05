import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/Comments.queries";
import CommentWriteUI from "./CommentWrite.presenter";
import { ICommentWriteProps } from "./CommentWrite.types";
import { warningModal } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: props?.el?.contents || "",
  });
  // const [writer, setWriter] = useState<string>();
  // const [password, setPassword] = useState<string>();
  // const [contents, setContents] = useState<string>();
  const [rating, setRating] = useState<number>(props?.el?.rating || 5);

  const [isActive, setIsActive] = useState<boolean>(false); // isActive가 true이면 버튼 활성화 컬러로 변경

  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
    Object.values(inputs).filter((el) => el === "").length <= 1
      ? setIsActive(true)
      : setIsActive(false);

    // e.target.value && (inputs.contents || inputs.password || inputs.writer)
    //   ? setIsActive(true)
    //   : setIsActive(false);
  };

  // useEffect(() => { ref.current = state; }, [state]);

  const onClickStar = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof Element) {
      setRating(Number(e.target.id));
    }
  };
  /* CREATE_BOARD_COMMENT */
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT); // queries에 작성한 쿼리를 가져와서 createBoard에 저장한다.

  const onClickCreate = async () => {
    if (!inputs.writer) {
      warningModal("작성자를 입력해주세요.");
      return;
    }
    if (!inputs.password) {
      warningModal("비밀번호를 입력해주세요.");
      return;
    }
    if (!inputs.contents) {
      warningModal("내용을 입력해주세요.");
      return;
    }
    if (inputs.writer && inputs.password && inputs.contents) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: inputs.writer,
              password: inputs.password,
              contents: inputs.contents,
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
        setInputs({
          writer: "",
          password: "",
          contents: "",
        });
        setRating(props?.el?.rating || 5);
        // setWriter("");
        // setContents("");
        // setPassword("");
        // setRating(5);
        setIsActive(false);
      } catch (error) {
        if (error instanceof Error) warningModal(error.message);
      }
    }
  };

  /* UPDATE_BOARD_COMMENT */
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onClickUpdate = async () => {
    if (!inputs.password) {
      warningModal("비밀번호를 입력해주세요.");
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: inputs.contents,
            rating: rating,
          },
          password: inputs.password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      // if (props.setIsEdit) // TS 에러 방지: 옵셔널 체이닝을 이용한 아래 방법도 ㄱㅊ
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) warningModal(error.message);
    }
  };

  const onClickCancel = () => {
    props.setIsEdit?.(false);
  };
  return (
    <CommentWriteUI
      isActive={isActive}
      writer={inputs.writer}
      password={inputs.password}
      contents={inputs.contents}
      rating={rating}
      // onChangeWriter={onChangeWriter}
      // onChangePassword={onChangePassword}
      // onChangeContents={onChangeContents}
      // onClickStar={onClickStar}
      onClickCreate={onClickCreate}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data} // Comments.container에서 온 fetchBoardComments : 값이 안 온다.
      index={props.index}
      onClickCancel={onClickCancel}
      onChangeInputs={onChangeInputs}
      inputs={inputs}
      onClickStar={onClickStar}
      el={props.el}
    />
  );
}
