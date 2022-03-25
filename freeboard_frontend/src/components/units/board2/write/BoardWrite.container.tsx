import BoardWriteUI from "./BoardWrite.presenter" // ./: 현위치에서
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import {useState} from 'react'
import {ChangeEvent} from 'react' //ChangeEvent 필요행
import { IBoardWriteProps, IVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps){
    /*화면 이동 시 사용되는 라우터 */
    const router = useRouter()
    /* 인풋창 state */
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    /* 에러 메세지 state */
    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    /* true가 들어가면 버튼을 활성화하는 state : presenter로 넘어가서 style로 전달된다. */
    const [isActive, setIsActive] = useState<boolean>(false); //isActive가 true이면 버튼 활성화

    /* 인풋창에 값이 입력되면 실행되는 함수 */
    const onChangeWriter = (e: ChangeEvent<HTMLInputElement>)=>{ //ts: 리액트의 ChangeEvent import하기 (HTML태그타입Element: 태그 타입 주의하기)
        setWriter(e.target.value) //입력값을 스테이트에 넣기
        e.target.value &&  password &&  title &&  contents ? setIsActive(true) : setIsActive(false) // 4개의 필수값이 입력되면 isActive = true
        if(e.target.value !== ""){setWriterError("")} //값이 입력되면 에러메세지 제거
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        e.target.value &&  writer &&  title &&  contents ? setIsActive(true) : setIsActive(false)
        if(e.target.value !== ""){setPasswordError("")}
    }
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
        e.target.value &&  writer &&  password &&  contents ? setIsActive(true) : setIsActive(false)
        if(e.target.value !== ""){setTitleError("")}
    }
    const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setContents(e.target.value)
        e.target.value &&  writer &&  password &&  title ? setIsActive(true) : setIsActive(false)
        if(e.target.value !== ""){setContentsError("")}
    }
    const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>)=>{
        setYoutubeUrl(e.target.value)
    }
    const onChangeZipcode= (e: ChangeEvent<HTMLInputElement>)=>{
        setZipcode(e.target.value)
    }
    const onChangeAddress = (e: ChangeEvent<HTMLInputElement>)=>{
        setAddress(e.target.value)
    }
    const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>)=>{
        setAddressDetail(e.target.value)
    }

    /* CREATE_BOARD */
    const [createBoard] = useMutation(CREATE_BOARD); //queries에 작성한 쿼리를 가져와서 createBoard에 저장한다.
    const onClickCreate = async () => { //async를 붙여야 await를 붙일 수 있다.
        if (writer === "") {
            setWriterError("작성자를 입력해주세요.");
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (title === "") {
            setTitleError("제목을 입력해주세요.");
        }
        if (contents === "") {
            setContentsError("내용을 입력해주세요.");
        }
        try{ //에러처리: create 실패 시 catch절을 수행한다.
            const result = await createBoard({ //createBoard를 실행하고 리턴값을 result에 받아온다. //input창을 만들고 onChange & state 이용하면 입력값을 받을 수 있다
                variables: {
                    createBoardInput: {
                    writer: writer, password: password, title: title, contents: contents, youtubeUrl: youtubeUrl, 
                    boardAddress:{zipcode: zipcode, address: address, addressDetail: addressDetail}
                    }
                } 
            })
            console.log("<<CREATE_BOARD의 result>>")
            console.log(result) //createBoard의 리턴값 확인
            alert('게시글이 등록되었습니다.')
            /* Detail 화면으로 라우팅*/
            //BoardWrite.container가 실행되는 경로는 pages/boards/new/index.js이다. router에 그에 맞게 경로를 정해줘야 한다.
            //이름이 일치하는 폴더가 없을 경우 [대괄호 폴더명]으로 이동한다.
            router.push(`/boards2/${result.data.createBoard._id}`) //리턴값으로 받은 아이디로 이동
        }catch(error:any){
            alert(error.message) //실패 시 alert
        }  
    }

    /* UPDATE_BOARD */
    const [updateBoard] = useMutation(UPDATE_BOARD)
    const onClickUpdate = async ()=>{
        if(!title && !contents){
            alert('수정한 내용이 없습니다.')
            return
        }
        if(!password){
            alert('비밀번호를 입력해주세요.')
            return
        }
        //variables : 값이 들어가 있는(사용자가 수정한) state만 넣는 객체 생성 (수정하지 않은 state는 제외하고 수정한 state만 쿼리에 전달)
        const myVariables : IVariables = { //boardId와 password는 꼭 필요하니까 먼저 넣어둠
            boardId: String(router.query.boardId), password: password, //boardId: router가 가지고 있는 boardId(경로의 아이디)를 입력해준다. (boardId는 사용자가 입력하는 값이 아니라, 리턴값으로 주어지는 값이기 때문)
            updateBoardInput: {boardAddress: {}}} //이거 이러케하는게 맞는지 모르겟음 ㅠ,ㅠ
        if(title !== "") myVariables.updateBoardInput.title = title //입력값이 있는 경우에만 myVariables에 title을 key로 하는 'title의 입력값'을 value로 넣어줘
        if(contents !== "") myVariables.updateBoardInput.contents = contents 
        if(youtubeUrl !== "") myVariables.updateBoardInput.youtubeUrl = youtubeUrl 
        if(zipcode !== "") myVariables.updateBoardInput.boardAddress.zipcode = zipcode
        if(address !== "") myVariables.updateBoardInput.boardAddress.address = address
        if(addressDetail !== "") myVariables.updateBoardInput.boardAddress.addressDetail = addressDetail
        try{
        await updateBoard({
            variables: myVariables //위에서 만든 (변경이 일어난 state만 들어있는) 객체를 updateBoard에 입력값으로 전달
        })
        alert('수정이 완료되었습니다.')
        /* Detail 화면으로 라우팅*/
        router.push(`/boards2/${router.query.boardId}`) //CREATE에서 쓴 ${result.data.updateBoard._id}를 써도 된다. //boardId는 내가 생성한 [대괄호 폴더명] (참고: UPDATE가 아닌 CREATE 화면에는 경로에 boardId가 없기 때문에 리턴 받는 아이디로 라우팅 해야만 한다!)
        }catch(error:any){
            alert(error.message)
        }
    }

    return(
        <BoardWriteUI // 자동완성으로 뜰 때 엔터를 쳐서 선택하면 자동으로 Import가 된다.
            /* 자식에게 보낼 데이터*/
            // 아래처럼 함수나 변수를 작성하면, props라는 객체가 생성되어 여기에 작성한 함수나 변수가 value로 들어가고, return의 페이지에 props를 통해 전달되어서 전달 받은 페이지에서 사용할 수 있다.
            // 키는 자유롭게 지정이 가능하나, 가급적 함수/변수명과 통일한다.
            isEdit={props.isEdit}
            isActive={isActive}
            setIsActive={setIsActive}

            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}

            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onChangeYoutubeUrl={onChangeYoutubeUrl}
            onChangeZipcode={onChangeZipcode}
            onChangeAddress={onChangeAddress}
            onChangeAddressDetail={onChangeAddressDetail}

            onClickCreate={onClickCreate}
            onClickUpdate={onClickUpdate}

            data={props.data}//edit/index.js 수정하기 페이지에서 보내준 fetchBoard 결과
        />
    )
}

