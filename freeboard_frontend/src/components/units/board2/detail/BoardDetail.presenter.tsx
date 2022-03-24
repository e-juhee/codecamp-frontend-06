
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import { IBoardDetailProps } from "./BoardDetail.types"
import { getDate } from "../../../../commons/libraries/utils"
import{
    Wrapper,
    HeaderWrapper,
    ProfileImage,
    ProfileWrapper,
    Writer,
    CreateDate,
    InfoWrapper,
    LocationToolTip,
    IconWrapper,
    LinkIcon,
    LocationIcon,
    LocationIconInner,
    Title, 
    Image,
    Contents,
    VideoWrapper,
    Video,
    PlayButton,
    PlayButtonInner,
    LikeWrapper,
    Like,
    LikeIcon,
    LikeCount,
    DisLikeIcon,
    DisLikeCount,
    FooterWrapper,
    Button
} from "./BoardDetail.style"

export default function BoardDetailUI(props: IBoardDetailProps){
    return(
        <Wrapper>
        <HeaderWrapper>
            <ProfileImage></ProfileImage>
            <ProfileWrapper>
                {/* 옵셔널 체이닝: 데이터가 없으면(undefined) 일단 화면만 그려놓고, 데이터를 받아오면 데이터를 그려준다.*/}
                <Writer>{props.data?.fetchBoard?.writer}</Writer> 
                {/* <CreateDate>Date : {props.data?.fetchBoard?.createdAt.substring(0,10).replaceAll('-','.')}</CreateDate> */}
                <CreateDate>Date : {getDate(props.data?.fetchBoard?.createdAt)}</CreateDate>
            </ProfileWrapper>
            <InfoWrapper>
                <LocationToolTip id="toolTip">{props.data?.fetchBoard?.boardAddress.address}
                <br/>
                {props.data?.fetchBoard?.boardAddress?.addressDetail}</LocationToolTip>


                <IconWrapper>
                    <LinkIcon></LinkIcon>
                    <LocationIcon onClick={props.onClickToolTip}>
                        <LocationIconInner></LocationIconInner>
                    </LocationIcon>
                </IconWrapper>
            </InfoWrapper>
        </HeaderWrapper>
        

            {/* 삼항 연산자: 데이터가 없을 때 나타낼 내용을 지정할 수 있다. 태그를 넣어도 된다. 가독성을 위해 한 줄 정도의 분량일 때만 사용하는 것이 좋다. */}
            <Title>{props.data? props.data.fetchBoard?.title : 'loading...'}</Title>
            <Image></Image>
            <Contents>{props.data?.fetchBoard?.contents }</Contents>
            <VideoWrapper>
                <Video>
                    <PlayButton>
                        <PlayButtonInner></PlayButtonInner>
                    </PlayButton>
                </Video>
            </VideoWrapper>

            <LikeWrapper>
                <Like>
                    <LikeIcon onClick={props.onClickLike}></LikeIcon>
                    <LikeCount>{props.data?.fetchBoard?.likeCount }</LikeCount>
                </Like>
                <Like>
                    <DisLikeIcon onClick={props.onClickDisLike}></DisLikeIcon>
                    <DisLikeCount>{props.data?.fetchBoard?.dislikeCount }</DisLikeCount>
                </Like>
            </LikeWrapper>

        <FooterWrapper>
            <Button onClick={props.onClickList}>목록으로</Button>
            <Button onClick={props.onClickUpdate}>수정하기</Button>
            <Button id={props.data?.fetchBoard?._id} onClick={props.onClickDelete}>삭제하기</Button>
        </FooterWrapper>
    </Wrapper>
    )
}