//프리젠터 컴포넌트

//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import SubmitButton, {WriterInput} from './BoardWrite.style'
import { IBoardWriteUIProps } from './BoardWrite.types'
 

//받는 쪽에서 타입을 지정한다?!
// interface IBoardWriteUIProps{ //container에서 props에 담아서 보낸 애들 전부 타입 지정해줘야 한다.
//     onChangeWriter: (event: ChangeEvent<HTMLInputElement>)=>void
//     onChangeTitle: (event: ChangeEvent<HTMLInputElement>)=>void
//     onChangeContents: (event: ChangeEvent<HTMLInputElement>)=>void
//     callGraphqlApi: ()=>void
//     onClickUpdate : ()=>void
//     isActive: boolean
//     isEdit: boolean
//     data?: any
// }


export default function BoardWriteUI(props: IBoardWriteUIProps){

    /*버튼이 세개로 나뉘어야 한다면*/
    // let qqq;
    // function apple(){      }
    // function banana(){    }
    // function podo(){    }
    // if(aaa==="사과"){
    //     qqq = apple
    // }else if(aaa==="바나나"){
    //     qqq = banana
    // }else if(aaa==="포도"){
    //     qqq = podo
    // }


    return(
        <>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            
            {/* {props.aaa === "사과" &&<div>나는 사과다</div>}
            {props.aaa === "바나나" &&<div>나는 바나나다</div>}
            {props.aaa === "포도" &&<div>나는 포도다</div>} */}

            {/* props 객체 안의 aaa를 키값으로 갖는 value인 함수 */}
            작성자: <WriterInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/><br/>
            제목: <input type="text" onChange={props.onChangeTitle}  defaultValue={props.data?.fetchBoard.title}/><br/>
            내용:  <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/><br/>
            <SubmitButton onClick={props.isEdit? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive} >
                {props.isEdit ? "수정" : "등록"}하기
            </SubmitButton>
            {/* <SubmitButton onClick={podo}></SubmitButton> */}
        </>
    )
}

//state는 빈값이고, onChange가 일어난 것만 값이 들어감
//방법1) state에 기존 값을 한번 강제로 넣어주고 시작한다. setState
//방법2) updateBoard API 요청할 때, 변경이 일어난 데이터만 백엔드에 보내준다. 값이 없는 애들은 아예 보내지 말자.