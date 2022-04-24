// default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import { ICommentWriteUIProps } from "./ProductAnswerWrite.types";
import * as S from "./ProductAnswerWrite.style";

export default function ProductAnswerWriteUI(props: ICommentWriteUIProps) {
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
          {props.isEdit && (
            <S.CCancel onClick={props.onClickCancel}>취소</S.CCancel>
          )}
        </S.CInputHeader>

        <S.CInputBody>
          <S.CTextArea
            id="contents"
            onChange={props.onChangeContents}
            value={props.contents}
            defaultValue={props?.el?.contents}
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.CTextArea>
          <S.CInputFooter>
            <S.CTextCount>{String(props.contents).length}/100</S.CTextCount>
            <S.CCreateButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
              isDisabled={!props.isActive}
              isEdit={props.isEdit}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.CCreateButton>
          </S.CInputFooter>
        </S.CInputBody>
      </S.CWrapper>
    </>
  );
}
