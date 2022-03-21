import BoardDetailUI from "./BoardDetail.presenter" // ./: 현위치에서
import {useQuery, useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD} from './BoardDetail.queries'


export default function BoardDetail(){


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
    
    



    return(
        // 자동완성으로 엔터 치면 자동으로 Import가 된다.
        <BoardDetailUI 
            // props라는 객체가 생성되어 함수가 value로 들어가서 props를 통해 전달된다.
            // 키는 자유롭게 지정이 가능하나, 가급적 통일한다.
            // 자식에게 보낼 데이터를 적는다.
            data ={data}
            onClickToolTip={onClickToolTip}
            onClickLike={onClickLike}
            onClickDisLike={onClickDisLike}
            // isActive={isActive}
        />
    )
}
