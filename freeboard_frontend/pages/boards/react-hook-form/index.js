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
} from "../../../styles/createBoard"

import { useForm } from 'react-hook-form';

export default function createBoard() {
    
    //react-hook-form: 에러메세지 표시
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data); //input 안의 값
        alert("게시글이 등록되었습니다.");
    }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>게시물 등록</Title>
        
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자<Required>*</Required></Label>
                    <ShortInput {...register("writer", { required: true })}   type="text" placeholder="이름을 적어주세요."/>
                    {errors.writer && <Error>이름을 입력해주세요.</Error>}
                </InputWrapper>

                <InputWrapper>
                    <Label>비밀번호<Required>*</Required></Label>
                    <ShortInput {...register("password", { required: true })}  type="password" placeholder="비밀번호를 입력해주세요."/>
                    {errors.password && <Error>비밀번호를 입력해주세요.</Error>}
                </InputWrapper>
            </WriterWrapper>
    
            <InputWrapper>
                <Label>제목<Required>*</Required></Label>
                <Input {...register("contentTitle", { required: true })}   type="text" placeholder="제목을 작성해주세요."/>
                {errors.contentTitle && <Error>제목을 입력해주세요.</Error>}
                <Label>내용<Required>*</Required></Label>
                <ContentInput {...register("title", { required: true })}  type="text" placeholder="내용을 작성해주세요."/>
                {errors.title && <Error>내용을 입력해주세요.</Error>}
            </InputWrapper>
        
            <InputWrapper>
                <Label>주소</Label>
                <ZipCodeWrapper>
                    <ZipCode {...register("zipcode")} type="text" placeholder="00000"/>
                    <ZipCodeButton>우편번호 검색</ZipCodeButton>
                </ZipCodeWrapper>
                <Address {...register("address1")} type="text"/>
                <Address {...register("address2")} type="text"/>
            </InputWrapper>

            <InputWrapper>
                <Label>유튜브</Label>
                <Input {...register("link")} type="text" placeholder="링크를 복사해주세요."/>
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
                <Radio {...register("youtube")} type="radio" id="youtube" name="radio-button" checked/>
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <Radio {...register("image")} type="radio" id="image" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </SettingWrapper>

        <SubmitButton>등록하기</SubmitButton>
    </Wrapper>
  )
}
