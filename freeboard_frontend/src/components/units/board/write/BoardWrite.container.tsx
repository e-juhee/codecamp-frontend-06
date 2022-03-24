import BoardWriteUI from "./BoardWrite.presenter" // ./: 현위치에서
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { useForm } from 'react-hook-form';
import {useState} from 'react'
import {ChangeEvent} from 'react' //ChangeEvent 필요행
import { IBoardWriteProps, IVariables } from "./BoardWrite.types";



export default function BoardWrite(props: IBoardWriteProps){

    /*react-hook-form: 에러메세지 표시*/
    const { register, handleSubmit, formState: { errors } , watch} = useForm();


    /*4개의 필수값이 입력되면 버튼 색깔 바꾸기*/
    const [isActive, setIsActive] = useState<boolean>(true);
    const onChangeWriter = (e: ChangeEvent<HTMLInputElement>)=>{ //리액트의 ChangeEvent import //태그 타입
        e.preventDefault()
        e.target.value &&  watch("password") &&  watch("title") &&  watch("contents") ? setIsActive(false) : setIsActive(true)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        e.target.value &&  watch("writer") &&  watch("title") &&  watch("contents") ? setIsActive(false) : setIsActive(true)
    }
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        e.target.value &&  watch("writer") &&  watch("password") &&  watch("contents") ? setIsActive(false) : setIsActive(true)
    }
    const onChangeContent = (e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        e.target.value &&  watch("writer") &&  watch("password") &&  watch("title") ? setIsActive(false) : setIsActive(true)
    }


    /* CREATE_BOARD : 입력값 보내기 & detail로 라우팅*/
    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)
    const onSubmit = async (data: any) => { //async를 붙여야 await를 붙일 수 있다.
        // reset(result);
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
            //실행되는 곳은 pages/boards/new/index.js이다. 그에 맞게 경로를 정해줘야 한다.
            router.push(`/boards/${result.data.createBoard._id}`) //[폴더명]은 뭐든지 다 받는 폴더이다. 해당되는 폴더가 없을 경우 [폴더명]이 실행된다. 해당되는 폴더가 있으면([대괄호 폴더명]이 아니라 그냥 폴더명인 경우) 해당하는 폴더로 이동한다.
        }catch(error:any){
            alert(error.message)
        }  
    }

    
    const [updateBoard] = useMutation(UPDATE_BOARD)
    /* 수정 버튼 클릭*/

    const onClickUpdate = async (data: any)=>{
        console.log('router')
        console.log(router.query.boardId)
        console.log('data')
        console.log(data)
        const myVariables : IVariables = {boardId: String(router.query.boardId), password: data.password, updateBoardInput:{boardAddress:{}}} //boardId, password는 꼭 필요하니까 일단 넣어두고 시작
        //변경이 일어나지 않은 state는 빈 값, 변경이 일어났으면 값이 들어가있음
        //variables : 값이 들어가있는(변경이 일어난) state만 모은 객체 생성
        if(data.title !== "") myVariables.updateBoardInput.title = data.title //입력값이 있는 경우에만 myVariables.의 writer에 myWriter를 넣어줘
        if(data.contents !== "") myVariables.updateBoardInput.contents = data.contents 
        if(data.youtubeUrl !== "") myVariables.updateBoardInput.youtubeUrl = data.youtubeUrl 
        if(data.zipcode !== "") myVariables.updateBoardInput.boardAddress.zipcode = data.zipcode
        if(data.address !== "") myVariables.updateBoardInput.boardAddress.address = data.address
        if(data.addressDetail !== "") myVariables.updateBoardInput.boardAddress.addressDetail = data.addressDetail
        console.log(myVariables.updateBoardInput)
        await updateBoard({
            // variables: {number: Number(router.query.myNumber), writer: myWriter, title: myTitle, contents: myContents} //기존 방식
            variables: myVariables //변경이 일어난 state만 들어있는 객체 
        })
        alert('수정이 완료되었습니다.')
        router.push(`/boards/${router.query.boardId}`) 

    }

    // const onClickUpdate = async (data: any)=>{
    //     console.log('router')
    //     console.log(router.query.boardId)
    //     await updateBoard({
    //         variables: {boardId: router.query.boardId, 
    //                     password: data.password,
    //                     updateBoardInput: {title: data.title, contents: data.contents, youtubeUrl: data.youtubeUrl, 
    //                                         boardAddress:{zipcode: data.zipcode, address: data.address, addressDetail: data.addressDetail}}} 
    //     })
    //     alert('수정이 완료되었습니다.')
    //     router.push(`//boards/${router.query.boardId}`) 
        //myNumber는 경로에서 가져온 것이다.
        //router.query.myNumber는수정화면에서 사용 가능 ! 등록 화면의 경로에는 myNumber가 없기 때문이다.
        // updateBoard를 result에 담아서 오른쪽처럼 써도 된다. ${result.data.updateBoard.number}
    // }






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
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
            data={props.data}
        />
    )
}

