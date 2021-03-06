import { IBoardDetailUIProps } from "./BoardDetail.types";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.style";
import ReactPlayer from "react-player";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  console.log(props.data);
  return (
    <>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.ProfileImage></S.ProfileImage>
          <S.ProfileWrapper>
            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
            <S.CreateDate>
              {props.data
                ? `Date : ${getDate(props.data?.fetchBoard?.createdAt)}`
                : ""}
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

        <S.Title>
          {props.data ? props.data.fetchBoard?.title : "loading..."}
        </S.Title>
        {props.data?.fetchBoard?.images &&
          props.data?.fetchBoard?.images.map((el, i) => (
            <S.Image key={i} src={`https://storage.googleapis.com/${el}`} />
          ))}
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
        {props.data?.fetchBoard?.youtubeUrl && (
          <S.VideoWrapper>
            <ReactPlayer
              url={props.data?.fetchBoard?.youtubeUrl}
              width="486px"
              height="240px"
            />
          </S.VideoWrapper>
        )}

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
        <S.Button onClick={props.onClickList}>????????????</S.Button>
        <S.Button onClick={props.onClickUpdate}>????????????</S.Button>
        <S.Button onClick={props.onClickDelete}>????????????</S.Button>
      </S.ButtonWrapper>
    </>
  );
}
