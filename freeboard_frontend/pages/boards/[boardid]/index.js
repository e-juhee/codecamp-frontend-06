/* FREEBOARD-DETAIL */

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
import {useQuery, useMutation, gql} from '@apollo/client'
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
    const LIKE_BOARD = gql`
    mutation likeBoard($boardId:ID!){
        likeBoard(boardId:$boardId)
    }
`
    const DISLIKE_BOARD = gql`
    mutation dislikeBoard($boardId:ID!){
        dislikeBoard(boardId:$boardId)
    }
`

export default function BoardsDetailPage(){

    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId : String(router.query.boardId)} //폴더명
    })

    /*ToolTip show & hide*/
    const onClickToolTip = ()=>{
        let toolTipState = document.getElementById("toolTip");
        if(toolTipState.style.visibility === "visible"){
            toolTipState.style.visibility = "hidden";
        } else{
            toolTipState.style.visibility = "visible"
        }
    }

    /*LIKE_BOARD*/
    const [likeBoard] = useMutation(LIKE_BOARD)  
    const onClickLike = async ()=>{
        try{
            const result = await likeBoard({ 
                variables: {boardId: router.query.boardId }} 
            )
            location.reload()
        }catch(error){
            alert(error.message)
        }  
    }
    
    /*DISLIKE_BOARD*/
    const [dislikeBoard] = useMutation(DISLIKE_BOARD)  
    const onClickDisLike = async ()=>{
        try{
            const result = await dislikeBoard({ 
                variables: {boardId: router.query.boardId }} 
            )
            location.reload()
        }catch(error){
            alert(error.message)
        }  
    }

    // console.log('router')
    // console.log(router)
    // console.log('router.query')
    // console.log(router.query)
    // console.log('router.pathname')
    // console.log(router.pathname)
    // console.log('router.asPath')
    // console.log(router.asPath)
    // console.log('router.isReady')
    // console.log(router.isReady)

    return (
        
        <Wrapper>
            <HeaderWrapper>
                <ProfileImage></ProfileImage>
                <ProfileWrapper>
                    {/* 옵셔널 체이닝: 데이터가 없으면(undefined) 일단 화면만 그려놓고, 데이터를 받아오면 데이터를 그려준다.*/}
                    <Writer>{data?.fetchBoard?.writer}</Writer> 
                    <CreateDate>Date : {data?.fetchBoard?.createdAt.substring(0,10).replaceAll('-','.')}</CreateDate>
                </ProfileWrapper>
                <InfoWrapper>
                    <LocationToolTip id="toolTip">{data?.fetchBoard?.boardAddress.address}<br/>{data?.fetchBoard.boardAddress.addressDetail}</LocationToolTip>


                    <IconWrapper>
                        <LinkIcon></LinkIcon>
                        <LocationIcon onClick={onClickToolTip}>
                            <LocationIconInner></LocationIconInner>
                        </LocationIcon>
                    </IconWrapper>
                </InfoWrapper>
            </HeaderWrapper>
            

                {/* 삼항 연산자: 데이터가 없을 때 나타낼 내용을 지정할 수 있다. 태그를 넣어도 된다. 가독성을 위해 한 줄 정도의 분량일 때만 사용하는 것이 좋다. */}
                <Title>{data? data.fetchBoard?.title : 'loading...'}</Title>
                <Image></Image>
                <Contents>{data?.fetchBoard?.contents }</Contents>
                <VideoWrapper>
                    <Video>
                        <PlayButton>
                            <PlayButtonInner></PlayButtonInner>
                        </PlayButton>
                    </Video>
                </VideoWrapper>

                <LikeWrapper>
                    <Like>
                        <LikeIcon onClick={onClickLike}></LikeIcon>
                        <LikeCount>{data?.fetchBoard?.likeCount }</LikeCount>
                    </Like>
                    <Like>
                        <DisLikeIcon onClick={onClickDisLike}></DisLikeIcon>
                        <DisLikeCount>{data?.fetchBoard?.dislikeCount }</DisLikeCount>
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