
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import SubmitButton, {InputWrapper, WriterInput} from './BoardWrite.style'

export default function BoardWriteUI(props){
    return(
        <>
        <InputWrapper>
            작성자 <WriterInput type="text" onChange={props.onChangeWriter}/><br/>
            제목 <WriterInput type="text" onChange={props.onChangeTitle}/><br/>
            내용  <WriterInput type="text" onChange={props.onChangeContents}/><br/>
        </InputWrapper>
            <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>게시글 작성</SubmitButton>
        </>
    )
}