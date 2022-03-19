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
            createdAt
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
                    <Writer>{data? data.fetchBoard.writer : 'loading...'}</Writer>
                    <CreateDate>Date : {data? data.fetchBoard.createdAt.substring(0,10).replaceAll('-','.') : 'loading...'}</CreateDate>
                </ProfileWrapper>
                <InfoWrapper>
                    <LocationToolTip id="toolTip">서울특별시 영등포구 양산로 200<br/>(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층</LocationToolTip>
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
                <Contents>{data? data.fetchBoard.contents : 'loading...'}</Contents>
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
                        <LikeCount>1920</LikeCount>
                    </Like>
                    <Like>
                        <DisLikeIcon></DisLikeIcon>
                        <DisLikeCount>1920</DisLikeCount>
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
