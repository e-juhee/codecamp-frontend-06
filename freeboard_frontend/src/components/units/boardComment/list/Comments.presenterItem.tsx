import * as S from "./Comments.style";
import { ICommentsItemUIProps } from "./Comments.types";
import CommentWrite from "../write/CommentWrite.container";
import { useState } from "react";
import { Modal } from "antd";
import { getDate } from "../../../../commons/libraries/utils";

export default function CommentsItemUI(props: ICommentsItemUIProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  /* delete, modal 여기로 옮기기 */

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <S.CDetail key={props.el._id} id={props.el.writer}>
          <S.CLeft>
            <S.CProfileImage></S.CProfileImage>
          </S.CLeft>
          <S.CMiddle>
            <S.CDetailHeader>
              <S.CWriter>{props.el.writer}</S.CWriter>
              <S.CStarWrapper>
                <S.CStar isStar={props.el.rating >= 1}></S.CStar>
                <S.CStar isStar={props.el.rating >= 2}></S.CStar>
                <S.CStar isStar={props.el.rating >= 3}></S.CStar>
                <S.CStar isStar={props.el.rating >= 4}></S.CStar>
                <S.CStar isStar={props.el.rating >= 5}></S.CStar>
              </S.CStarWrapper>
            </S.CDetailHeader>
            <S.CBody>
              <S.CContents>{props.el.contents}</S.CContents>
              <S.CDate>{getDate(props.el.createdAt)}</S.CDate>
            </S.CBody>
          </S.CMiddle>
          <S.CRight>
            <S.CUpdate id={props.el._id} onClick={onClickUpdate}></S.CUpdate>
            <S.CDelete
              id={props.el._id}
              onClick={props.onToggleModal}
            ></S.CDelete>
          </S.CRight>
          {props.isOpen && (
            <Modal
              visible={props.isOpen}
              onOk={props.onClickDelete}
              onCancel={props.onToggleModal}
              title="댓글의 비밀번호를 입력하세요."
            >
              비밀번호
              <input
                type="password"
                onChange={props.onChangePassword}
                style={{ fontFamily: "-apple-system" }}
              />
            </Modal>
          )}
        </S.CDetail>
      )}
      {isEdit && (
        <CommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
          index={props.index}
          data={props.data}
        />
      )}
    </>
  );
}
