//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import { ICommentWriteProps, ICommentWriteUIProps } from "./CommentWrite.types";
import * as S from "./CommentWrite.style";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
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
            onChange={(e) => props.onChangeWriter(e)} //입력하면 onChange가 작동 -> event.target.value가 state에 들어감 -> props를 통해 변경된 state가 props.writer로 들어옴
            value={props.writer} // value와 defaultValue의 차이: defaultValue는 변경 가능, value는 변경 불가능
            // 제어 컴포넌트 controlled component: state에 값을 미리 넣어 놓으면, 바로 input box 안에 입력된 상태로 나옴
            // 따라서, state를 빈값으로 만들면 input box도 비워진다.
            // 제어 컴포넌트의 단점: 하나 입력할 때마다 props 내려가고 전달하고 ~~ 느리다 / 긴 장문의 글에는 부적합
            // 장점: 글 등록 후 초기화 할 때 유용하다. 이렇게 안하면 getElementById 이런거 써야되는데 좋은 방법이 아니다.
            // 안전, 성능 떨어짐: 현재 작성되어 있는 것이 state라는 것을 장담할 수 있다. (특정 버그 상황 등 정확도가 중요한 상황에는 제어 컴포넌트가 더 안전)
            // 위 같은 상황 아니면 비제어로 한다. 버벅임이 없도록!

            type="text"
            readOnly={props.isEdit}
            placeholder="작성자"
          ></S.CInputShort>
          <S.CInputShort
            onChange={props.onChangePassword}
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
            defaultValue={props?.data?.fetchBoardComments.contents} //실패 ㅜㅜ
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.CTextArea>
          <S.CInputFooter>
            <S.CTextCount>{props.contents.length}/100</S.CTextCount>
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
