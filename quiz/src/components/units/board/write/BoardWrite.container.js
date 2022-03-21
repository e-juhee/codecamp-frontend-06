import BoardWriteUI from "./BoardWrite.presenter" // ./: 현위치에서
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {useState} from 'react'
import {CREATE_BOARD} from './BoardWrite.queries'


export default function BoardWrite(){

    const router = useRouter()

    //input  state
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")


    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {
    
    try{
        const result = await callApi({
            variables: {writer: myWriter, title: myTitle, contents: myContents} //input창을 만들고 onChange & state 이용하면 입력값을 받을 수 있다
        }) 
        console.log(result)
        console.log(result.data.createBoard.message)
        alert('게시글 등록에 성공했어요.')
        alert('상세 페이지로 이동해볼까요?')
        router.push(`/day6-2-routed-container-presenter/${result.data.createBoard.number}`)

    }catch(error){
        alert(error.message)

    } 
        
        
    }

    const [isActive, SetIsActive] = useState(false)

    const onChangeWriter = (event) => {
        setMyWriter(event.target.value)
        
        if(event.target.value !== '' && myTitle !== "" && myContents !== ""){
            SetIsActive(true)
        }else{
            SetIsActive(false)
        }
    }
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
        
        if(myWriter !== '' && event.target.value !== "" && myContents !== ""){
            SetIsActive(true)
        }else{
            SetIsActive(false)
        }
    }
    const onChangeContents = (event) => {
        setMyContents(event.target.value)
        
        if(myWriter !== '' && myTitle !== "" && event.target.value !== ""){
            SetIsActive(true)
        }else{
            SetIsActive(false)
        }
    }

    return(
        // 자동완성으로 엔터 치면 자동으로 Import가 된다.
        <BoardWriteUI 
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

