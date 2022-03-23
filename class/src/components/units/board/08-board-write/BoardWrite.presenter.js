//프리젠터 컴포넌트

//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import SubmitButton, {WriterInput} from './BoardWrite.style'

export default function BoardWriteUI(props){

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
            작성자: <WriterInput type="text" onChange={props.onChangeWriter}/><br/>
            제목: <input type="text" onChange={props.onChangeTitle} /><br/>
            내용:  <input type="text" onChange={props.onChangeContents}/><br/>
            <SubmitButton onClick={props.isEdit? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
                {props.isEdit ? "수정" : "등록"}하기
            </SubmitButton>
            {/* <SubmitButton onClick={podo}></SubmitButton> */}
        </>
    )
}