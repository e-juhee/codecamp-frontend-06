import {
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
} from "../../../styles/boards/detail"
import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            boardAddress{zipcode}
            boardAddress{address}
            boardAddress{addressDetail}
            createdAt
            updatedAt
            deletedAt
            __typename
        }
    }
`

export default function BoardsDetailPage(){
    const router = useRouter()
    console.log(router)
    console.log(router.query)
    console.log(router.query.boardid)

    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId : router.query.boardid}
    })


    const onClickToolTip = ()=>{
        let toolTipState = document.getElementById("toolTip");
        if(toolTipState.style.visibility === "visible"){
            toolTipState.style.visibility = "hidden";
        } else{
            toolTipState.style.visibility = "visible"
        }
    }

    return (
        
        <Wrapper>
            <HeaderWrapper>
                <ProfileImage></ProfileImage>
                <ProfileWrapper>
                    <Writer>{data?.fetchBoard.writer}</Writer>
                    <CreateDate>Date : {data?.fetchBoard.createdAt.substring(0,10).replaceAll('-','.')}</CreateDate>
                </ProfileWrapper>
                <InfoWrapper>
                    <LocationToolTip id="toolTip">{data?.fetchBoard.boardAddress.address}<br/>{data?.fetchBoard.boardAddress.addressDetail}</LocationToolTip>


                    <IconWrapper>
                        <LinkIcon></LinkIcon>
                        <LocationIcon onClick={onClickToolTip}>
                            <LocationIconInner></LocationIconInner>
                        </LocationIcon>
                    </IconWrapper>
                </InfoWrapper>
            </HeaderWrapper>
            

                <Title>{data? data.fetchBoard.title : 'loading...'}</Title>
                <Image></Image>
                <Contents>{data?.fetchBoard.contents }</Contents>
                <VideoWrapper>
                    <Video>
                        <PlayButton>
                            <PlayButtonInner></PlayButtonInner>
                        </PlayButton>
                    </Video>
                </VideoWrapper>
                <LikeWrapper>
                    <Like>
                        <LikeIcon></LikeIcon>
                        <LikeCount>{data?.fetchBoard.likeCount }</LikeCount>
                    </Like>
                    <Like>
                        <DisLikeIcon></DisLikeIcon>
                        <DisLikeCount>{data?.fetchBoard.dislikeCount }</DisLikeCount>
                    </Like>
                </LikeWrapper>

            <FooterWrapper>
                <Button>목록으로</Button>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </FooterWrapper>
        </Wrapper>

    )
}