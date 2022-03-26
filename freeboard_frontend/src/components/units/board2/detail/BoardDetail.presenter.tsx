//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.style";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.ProfileImage></S.ProfileImage>
          <S.ProfileWrapper>
            {/* 옵셔널 체이닝: 데이터가 없으면(undefined) 일단 화면만 그려놓고, 데이터를 받아오면 데이터를 그려준다.*/}
            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
            {/* <S.CreateDate>Date : {props.data?.fetchBoard?.createdAt.substring(0,10).replaceAll('-','.')}</S.CreateDate> */}
            <S.CreateDate>
              Date : {getDate(props.data?.fetchBoard?.createdAt)}
            </S.CreateDate>
          </S.ProfileWrapper>
          <S.InfoWrapper>
            <S.LocationToolTip id="toolTip">
              {props.data?.fetchBoard?.boardAddress?.address}
              <br />
              {props.data?.fetchBoard?.boardAddress?.addressDetail}
            </S.LocationToolTip>

            <S.IconWrapper>
              <S.LinkIcon></S.LinkIcon>
              <S.LocationIcon onClick={props.onClickToolTip}>
                <S.LocationIconInner></S.LocationIconInner>
              </S.LocationIcon>
            </S.IconWrapper>
          </S.InfoWrapper>
        </S.HeaderWrapper>

        {/* 삼항 연산자: 데이터가 없을 때 나타낼 내용을 지정할 수 있다. 태그를 넣어도 된다. 가독성을 위해 한 줄 정도의 분량일 때만 사용하는 것이 좋다. */}
        <S.Title>
          {props.data ? props.data.fetchBoard?.title : "loading..."}
        </S.Title>
        <S.Image></S.Image>
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        <S.VideoWrapper>
          <S.Video>
            <S.PlayButton>
              <S.PlayButtonInner></S.PlayButtonInner>
            </S.PlayButton>
          </S.Video>
        </S.VideoWrapper>

        <S.LikeWrapper>
          <S.Like>
            <S.LikeIcon onClick={props.onClickLike}></S.LikeIcon>
            <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
          </S.Like>
          <S.Like>
            <S.DisLikeIcon onClick={props.onClickDisLike}></S.DisLikeIcon>
            <S.DisLikeCount>
              {props.data?.fetchBoard?.dislikeCount}
            </S.DisLikeCount>
          </S.Like>
        </S.LikeWrapper>
      </S.Wrapper>

      <S.ButtonWrapper>
        <S.Button onClick={props.onClickList}>목록으로</S.Button>
        <S.Button onClick={props.onClickUpdate}>수정하기</S.Button>
        <S.Button
          id={props.data?.fetchBoard?._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
}
