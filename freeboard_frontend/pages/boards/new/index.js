import {Wrapper,Title, Input, InputShort, InputshortWrapper,
    InputLabel, Star, InputInput,
    Writer, Password, ContentTitle, Content,
    InputLong, InputInputAddress,InputAddress, AddressDetail,
    Search, PictureWrapper, Picture, PictureIcon, PictureLabel, 
    RadioWrapper, Radio, RadioLabel, Create, Error
} from "../../../styles/createBoard"
import { useState } from 'react'

export default function createBoard() {

    const [writer, setWriter] = useState("")
    const [writerError, setWriterError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [contentTitle, setContentTitle] = useState("")
    const [contentTitleError, setContentTitleError] = useState("")
    const [content, setContent] = useState("")
    const [contentError, setContentError] = useState("")
    
    function onChangeWriter(event){
        setWriter(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }
    function onChangeContentTitle(event){
        setContentTitle(event.target.value)
    }
    function onChangeContent(event){
        setContent(event.target.value)
    }

    let isValid = true
    function onClickButton(){
        if(writer === ""){
            setWriterError("이름을 입력해주세요.")
            isValid = false
        } else {
            setWriterError("")
        }
        if(password === ""){
            setPasswordError("비밀번호를 입력해주세요.")
            isValid = false
        } else {
            setPasswordError("")
        }
        if(contentTitle === ""){
            setContentTitleError("제목을 입력해주세요.")
            isValid = false
        } else {
            setContentTitleError("")
        }
        if(content === ""){
            setContentError("내용을 입력해주세요.")
            isValid = false
        } else {
            setContentError("")
        }
        if(isValid === true){
            alert("게시글이 등록되었습니다.")
        }
    }


  return (
    <Wrapper>
        <Title>게시물 등록</Title>
        <Input>
            <InputShort>
                <InputshortWrapper>
                    <InputLabel>작성자<Star>*</Star></InputLabel>
                    <Writer onChange={onChangeWriter} type="text" placeholder="이름을 적어주세요."/>
                    <Error>{writerError}</Error>
                </InputshortWrapper>
           
                <InputshortWrapper>
                    <InputLabel>비밀번호<Star>*</Star></InputLabel>
                    <Password onChange={onChangePassword} type="text" placeholder="비밀번호를 입력해주세요."/>
                    <Error>{passwordError}</Error>
                </InputshortWrapper>
            </InputShort>
        </Input>

        <Input>
            <InputLong>
                <InputLabel>제목<Star>*</Star></InputLabel>
                <ContentTitle onChange={onChangeContentTitle}  type="text" placeholder="제목을 작성해주세요."/>
                <Error>{contentTitleError}</Error>
                <InputLabel>내용<Star>*</Star></InputLabel>
                <Content onChange={onChangeContent}  type="text" placeholder="내용을 작성해주세요."/>
                <Error>{contentError}</Error>
            </InputLong>
        </Input>

        <Input>
            <InputLong>
                <InputLabel>주소</InputLabel>
                <InputAddress>
                    <InputInputAddress type="text" placeholder="07250"/>
                    <Search>우편번호 검색</Search>
                </InputAddress>
                <AddressDetail type="text"/>
                <AddressDetail type="text"/>
            </InputLong>
        </Input>

        <Input>
            <InputLong>
                <InputLabel>유튜브</InputLabel>
                <InputInput type="text" placeholder="링크를 복사해주세요."/>
            </InputLong>
        </Input>

        <Input>
            <InputLong>
                <InputLabel>사진 첨부</InputLabel>
                <PictureWrapper>
                    <Picture>
                        <PictureIcon>+</PictureIcon>
                        <PictureLabel>Upload</PictureLabel>
                    </Picture>
                    <Picture>
                        <PictureIcon>+</PictureIcon>
                        <PictureLabel>Upload</PictureLabel>
                    </Picture>
                    <Picture>
                        <PictureIcon>+</PictureIcon>
                        <PictureLabel>Upload</PictureLabel>
                    </Picture>
                </PictureWrapper>
            </InputLong>
        </Input>

        <Input>
            <InputLong>
                <InputLabel>메인 설정</InputLabel>
                <RadioWrapper>
                    <RadioLabel>
                        <Radio type="radio" value="youtube" name="main" checked/>
                        유튜브
                    </RadioLabel>
                    <RadioLabel>
                        <Radio type="radio" value="picture" name="main" />
                        사진
                    </RadioLabel>
                </RadioWrapper>
            </InputLong>
        </Input>

        <Create onClick={onClickButton}>등록하기</Create>

    </Wrapper>
  )
}
