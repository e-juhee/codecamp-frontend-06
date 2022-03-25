import { IBoardWriteUIProps } from './BoardWrite.types' //참고: default로 내보낸 경우에는 import 받는 변수에 중괄호가 없어도 된다. 이름을 다르게 써도 받아서 그 다르게 쓴 이름으로 사용할 수 있다. 전체 다 가져오기: * as S
import { 
    Wrapper,
    Title, 
    WriterWrapper,
    InputWrapper,
    Label,
    Required, 
    ShortInput, 
    Error, 
    ContentInput,
    ZipCodeWrapper, 
    Input, 
    ZipCode,
    ZipCodeButton,
    Address,
    ImageWrapper,
    ImageButton, 
    ImageIcon, 
    ImageLabel, 
    SettingWrapper, 
    Radio, 
    RadioLabel,
    SubmitButton
} from './BoardWrite.style'

export default function BoardWriteUI(props : IBoardWriteUIProps){
    return(
        <>
        <Wrapper>
        <Title>{props.isEdit? "게시물 수정" : "게시물 등록"}</Title>
        
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자<Required>*</Required></Label>
                    <ShortInput 
                    onChange={e=>props.onChangeWriter(e)} 
                    type="text" 
                    placeholder="이름을 적어주세요." 
                    defaultValue={props.data?.fetchBoard.writer} //등록하기에서 왔으면 data가 없음
                    readOnly={props.data?.fetchBoard.writer} //클릭 안됨
                    // readOnly={!!props.data?.fetchBoard.writer} //부정연산자
                    // readOnly={Boolean(props.data?.fetchBoard.writer)} //boolean
                    // disabled={true} //readOnly 대신 disabled를 써도 되지만, 회색으로 변함
                    />
                    <Error>{props.writerError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호<Required>*</Required></Label>
                    <ShortInput onChange={e=>props.onChangePassword(e)}  
                    type="password" 
                    placeholder="비밀번호를 입력해주세요."
                    />
                    <Error>{props.passwordError}</Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목<Required>*</Required></Label>
                <Input onChange={e=>props.onChangeTitle(e)}   
                type="text" 
                placeholder="제목을 작성해주세요." 
                defaultValue={props.data?.fetchBoard?.title}/>
                <Error>{props.titleError}</Error>
                <Label>내용<Required>*</Required></Label>
                <ContentInput 
                onChange={e=>props.onChangeContents(e)}  
                placeholder="내용을 작성해주세요."  
                defaultValue={props.data?.fetchBoard?.contents}/>
                <Error>{props.contentsError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipCodeWrapper>
                    <ZipCode 
                    onChange={e=>props.onChangeZipcode(e)}  
                    type="text" 
                    placeholder="00000"  
                    defaultValue={props.data?.fetchBoard?.boardAddress?.zipcode}/>
                    <ZipCodeButton>우편번호 검색</ZipCodeButton>
                </ZipCodeWrapper>
                <Address 
                onChange={e=>props.onChangeAddress(e)}  
                type="text"  
                defaultValue={props.data?.fetchBoard?.boardAddress?.address}/>
                <Address
                onChange={e=>props.onChangeAddressDetail(e)}  
                type="text"  
                defaultValue={props.data?.fetchBoard?.boardAddress?.addressDetail}/>
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Input 
                onChange={e=>props.onChangeYoutubeUrl(e)}  
                type="text" 
                placeholder="링크를 복사해주세요."  
                defaultValue={props.data?.fetchBoard?.youtubeUrl}/>
            </InputWrapper>
            <InputWrapper>
                <Label>사진 첨부</Label>
                <ImageWrapper>
                    <ImageButton>
                        <ImageIcon>+</ImageIcon>
                        <ImageLabel>Upload</ImageLabel>
                    </ImageButton>
                    <ImageButton>
                        <ImageIcon>+</ImageIcon>
                        <ImageLabel>Upload</ImageLabel>
                    </ImageButton>
                    <ImageButton>
                        <ImageIcon>+</ImageIcon>
                        <ImageLabel>Upload</ImageLabel>
                    </ImageButton>
                </ImageWrapper>
            </InputWrapper>

            <SettingWrapper>
                <Label>메인 설정</Label>
                <Radio type="radio" id="youtube" name="radio-button" checked/>
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <Radio type="radio" id="images" name="radio-button" />
                <RadioLabel htmlFor="images">사진</RadioLabel>
            </SettingWrapper>

            <SubmitButton 
            isActive={props.isActive} onClick={props.isEdit? props.onClickUpdate : props.onClickCreate}>
            {props.isEdit? "수정하기" : "등록하기"}
            </SubmitButton>
        </Wrapper>
        </>
    )
}