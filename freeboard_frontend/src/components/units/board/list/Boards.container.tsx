import BoardsUI from "./Boards.presenter" // ./: 현위치에서
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import {FETCH_BOARDS} from './Boards.queries'


export default function Boards(){

    /*FETCH_BOARDS*/
    const { data } = useQuery(FETCH_BOARDS)

    const router = useRouter()
    /*Routing to BoardWrite*/
    //event.target : 태그
    const onClickWrite = () => {

        // console.log(event.target.id)
            router.push(`/boards/new`) 
        
    }



/*Routing to BoardDetial*/
//routing 실패..
 const onClickBoard = (e:any) => { 
    console.log("onClickBoard 실행")
    console.log(e)   
    router.push(`/boards/${e.target.id}`)
    //event.targetㅣ 태그
    //event.target.value: 인풋창에 입력한 값

        }

    return(
        <BoardsUI 
            onClickWrite ={onClickWrite}
            data={data}
            onClickBoard={onClickBoard}
        />
    )
}
