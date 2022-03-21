import BoardWriteUI from "./BoardWrite.presenter" // ./: 현위치에서
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD} from './BoardWrite.queries'
import { useForm } from 'react-hook-form';
import {useState} from 'react'


export default function BoardWrite(){

    //react-hook-form: 에러메세지 표시
    const { register, handleSubmit, formState: { errors } , watch} = useForm();

    //입력값 보내기 & 라우팅
    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)
    const onSubmit = async (data) => { //async를 붙여야 await를 붙일 수 있다.
        reset(result);
        console.log("data");
        console.log(data); //input 안의 값
        try{
            const result = await createBoard({ //input창을 만들고 onChange & state 이용하면 입력값을 받을 수 있다
                variables: {createBoardInput: {writer: data.writer, password: data.password, title: data.title, contents: data.contents, youtubeUrl: data.youtubeUrl, boardAddress:{zipcode: data.zipcode, address: data.address, addressDetail: data.addressDetail}}} 
            })
            console.log("result")
            console.log(result)
            console.log("result.data")
            console.log(result.data)
            alert('게시글이 정상적으로 등록되었습니다.')
            router.push(`/boards/${result.data.createBoard._id}`) //[폴더명]은 뭐든지 다 받는 폴더이다. 해당되는 폴더가 없을 경우 [폴더명]이 실행된다. 해당되는 폴더가 있으면 해당하는 폴더로 이동한다.
        }catch(error){
            alert(error.message)
        }  
    }

    //4개의 필수값이 입력되면 버튼 색깔 바꾸기
    const [isActive, setIsActive] = useState(true);
    const onChangeWriter = (e)=>{
        e.target.value &&  watch("password") &&  watch("title") &&  watch("contents") ? setIsActive(false) : setIsActive(true)
    }
    const onChangePassword = (e)=>{
        e.target.value &&  watch("writer") &&  watch("title") &&  watch("contents") ? setIsActive(false) : setIsActive(true)
    }
    const onChangeTitle = (e)=>{
        e.target.value &&  watch("writer") &&  watch("password") &&  watch("contents") ? setIsActive(false) : setIsActive(true)
    }
    const onChangeContent = (e)=>{
        e.target.value &&  watch("writer") &&  watch("password") &&  watch("title") ? setIsActive(false) : setIsActive(true)
    }


    return(
        // 자동완성으로 엔터 치면 자동으로 Import가 된다.
        <BoardWriteUI 
            // props라는 객체가 생성되어 함수가 value로 들어가서 props를 통해 전달된다.
            // 키는 자유롭게 지정이 가능하나, 가급적 통일한다.
            // 자식에게 보낼 데이터를 적는다.
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            isActive={isActive}
            setIsActive={setIsActive}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
        />
    )
}

