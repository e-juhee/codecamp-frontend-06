import BoardDetailUI from "./BoardDetail.presenter" // ./: 현위치에서
import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import {FETCH_BOARD} from './BoardDetail.queries'


export default function BoardDetail(){


        const router = useRouter()
        console.log(router)
    
        const { data } = useQuery(FETCH_BOARD, {
            variables: {number:Number(router.query.number)} //aaa = url에 입력된 값
        })
        
        console.log(data)
    
    



    return(
        // 자동완성으로 엔터 치면 자동으로 Import가 된다.
        <BoardDetailUI 
            // props라는 객체가 생성되어 함수가 value로 들어가서 props를 통해 전달된다.
            // 키는 자유롭게 지정이 가능하나, 가급적 통일한다.
            // 자식에게 보낼 데이터를 적는다.
            data ={data}
            // isActive={isActive}
        />
    )
}
