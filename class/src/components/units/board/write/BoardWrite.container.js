import BoardWriteUI from "./BoardWrite.presenter" // ./: 현위치에서
import {useMutation} from '@apollo/client'
import {useState} from 'react'
import {CREATE_BOARD} from './BoardWrite.queries'


export default function BoardWrite(){

    const [isActive, SetIsActive] = useState(false)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [data, setData] = useState("")
    
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {
        const result = await callApi({
            variables: {writer: myWriter, title: myTitle, contents: myContents} 
        }) 
        console.log(result)
        setData(result.data.createBoard.message) 
    }


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

