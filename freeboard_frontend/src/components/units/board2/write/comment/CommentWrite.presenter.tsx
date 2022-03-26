//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import { ICommentWriteProps } from "./CommentWrite.types";
import * as S from "./CommentWrite.style";

export default function CommentWriteUI(props: ICommentWriteProps) {
  return (
    <>
      <S.CWrapper>
        {props.isEdit || (
          <S.CHeader>
            <S.CTitleIcon></S.CTitleIcon>
            <S.CTitle>댓글</S.CTitle>
          </S.CHeader>
        )}

        <S.CInputHeader>
          <S.CInputShort
            onChange={(e) => props.onChangeWriter(e)}
            value={props.writer}
            type="text"
            readOnly={props.isEdit}
            placeholder="작성자"
          ></S.CInputShort>
          <S.CInputShort
            onChange={(e) => props.onChangePassword(e)}
            value={props.password}
            type="password"
            placeholder="비밀번호"
          ></S.CInputShort>
          <S.CStarWrapper>
            {/* value={props.rating} */}
            <S.CStar
              id="1"
              isStar={props.rating >= 1}
              onClick={props.onClickStar}
            ></S.CStar>
            <S.CStar
              id="2"
              isStar={props.rating >= 2}
              onClick={props.onClickStar}
            ></S.CStar>
            <S.CStar
              id="3"
              isStar={props.rating >= 3}
              onClick={props.onClickStar}
            ></S.CStar>
            <S.CStar
              id="4"
              isStar={props.rating >= 4}
              onClick={props.onClickStar}
            ></S.CStar>
            <S.CStar
              id="5"
              isStar={props.rating >= 5}
              onClick={props.onClickStar}
            ></S.CStar>
          </S.CStarWrapper>
        </S.CInputHeader>

        <S.CInputBody>
          <S.CTextArea
            onChange={(e) => props.onChangeContents(e)}
            value={props.contents}
            defaultValue={props?.data?.fetchBoardComments.contents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.CTextArea>
          <S.CInputFooter>
            <S.CTextCount>0/100</S.CTextCount>
            <S.CCreateButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.CCreateButton>
          </S.CInputFooter>
        </S.CInputBody>
      </S.CWrapper>
    </>
  );
}
