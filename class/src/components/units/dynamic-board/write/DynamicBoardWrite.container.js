import BoardWriteUI from "./BoardWrite.presenter" // ./: 현위치에서
import {useMutation} from '@apollo/client'
import {useState} from 'react'
import {CREATE_BOARD} from './BoardWrite.queries'


export default function DynamicBoardWrite(){

    
    const router = useRouter()
    const onClickMove1 = () => {
        router.push("/05-06-dynamic-routed-board/83011") //마지막 / 뭐라고 입력하든 이동 가능 문자 써도 됨
    }
    const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/83012")
    }
    const onClickMove3 = () => {
        router.push("/05-06-dynamic-routed-board/83013")
    }



    return(
        // 자동완성으로 엔터 치면 자동으로 Import가 된다.
        <DynamicBoardUI 
            // props라는 객체가 생성되어 함수가 value로 들어가서 props를 통해 전달된다.
            // 키는 자유롭게 지정이 가능하나, 가급적 통일한다.
            // 자식에게 보낼 데이터를 적는다.
            onChangeWriter={onChangeWriter} 
            onChangeTitle={onChangeTitle} 
            onChangeContents={onChangeContents}
            callGraphqlApi={callGraphqlApi}
            isActive={isActive}
        />
    )
}

