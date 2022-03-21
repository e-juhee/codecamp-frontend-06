
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import SubmitButton, {WriterInput} from './BoardWrite.style'

export default function BoardWriteUI(props){
    return(
        <>
            {/* props 객체 안의 aaa를 키값으로 갖는 value인 함수 */}
            작성자: <WriterInput type="text" onChange={props.onChangeWriter}/><br/>
            제목: <input type="text" onChange={props.onChangeTitle}/><br/>
            내용:  <input type="text" onChange={props.onChangeContents}/><br/>
            <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>GraphQL-API 요청하기</SubmitButton>
        </>
    )
}