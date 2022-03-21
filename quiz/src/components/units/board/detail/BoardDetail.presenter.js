
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
//import SubmitButton, {WriterInput} from './BoardWrite.style'

export default function BoardDetailUI(props){
    return(
        <>
             <div>{props.data?.fetchBoard?.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>제목: {props.data?.fetchBoard?.title}</div>
            <div>작성자: {props.data?.fetchBoard?.writer}</div>
            <div>내용: {props.data?.fetchBoard?.contents}</div>
      </>
    )
}