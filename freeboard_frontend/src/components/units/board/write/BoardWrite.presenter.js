//default는 중괄호가 없어도 된다. import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
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

export default function BoardWriteUI(props){
    return(
        <>
        <Wrapper onSubmit={props.isEdit? props.handleSubmit(props.onClickUpdate) : props.handleSubmit(props.onSubmit)}>
        <Title>{props.isEdit? "게시물 수정" : "게시물 등록"}</Title>
        
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자<Required>*</Required></Label>
                    <ShortInput {...props.register("writer", { required: true })} onChange={e=>props.onChangeWriter(e)}  type="text" placeholder="이름을 적어주세요." />
                    {props.errors.writer && <Error>이름을 입력해주세요.</Error>}


                    
                </InputWrapper>

                <InputWrapper>
                    <Label>비밀번호<Required>*</Required></Label>
                    <ShortInput {...props.register("password", { required: true })} onChange={e=>props.onChangePassword(e)}  type="password" placeholder="비밀번호를 입력해주세요."/>
                    {props.errors.password && <Error>비밀번호를 입력해주세요.</Error>}
                </InputWrapper>
            </WriterWrapper>
    
            <InputWrapper>
                <Label>제목<Required>*</Required></Label>
                <Input {...props.register("title", { required: true })} onChange={e=>props.onChangeTitle(e)}   type="text" placeholder="제목을 작성해주세요."/>
                {props.errors.title && <Error>제목을 입력해주세요.</Error>}
                <Label>내용<Required>*</Required></Label>
                <ContentInput {...props.register("contents", { required: true })} onChange={e=>props.onChangeContent(e)}  type="text" placeholder="내용을 작성해주세요."/>
                {props.errors.contents && <Error>내용을 입력해주세요.</Error>}
            </InputWrapper>
        
            <InputWrapper>
                <Label>주소</Label>
                <ZipCodeWrapper>
                    <ZipCode {...props.register("zipcode")} type="text" placeholder="00000"/>
                    <ZipCodeButton>우편번호 검색</ZipCodeButton>
                </ZipCodeWrapper>
                <Address {...props.register("address")} type="text"/>
                <Address {...props.register("addressDetail")} type="text"/>
            </InputWrapper>

            <InputWrapper>
                <Label>유튜브</Label>
                <Input {...props.register("youtubeUrl")} type="text" placeholder="링크를 복사해주세요."/>
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
                <Radio {...props.register("youtube")} type="radio" id="youtube" name="radio-button" checked/>
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <Radio {...props.register("images")} type="radio" id="images" name="radio-button" />
                <RadioLabel htmlFor="images">사진</RadioLabel>
            </SettingWrapper>

            <SubmitButton isActive={props.isActive}>{props.isEdit? "수정하기" : "등록하기"}</SubmitButton>
        </Wrapper>
        </>
    )
}