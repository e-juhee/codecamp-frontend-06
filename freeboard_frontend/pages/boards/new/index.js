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
} from "../../../styles/boards/new"

import { useForm } from 'react-hook-form';
import {useMutation, gql} from '@apollo/client'
import {useRouter} from 'next/router'


const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            images
            boardAddress{zipcode, address, addressDetail}
            createdAt
            updatedAt  
        }
    }
`

export default function BoardsNewPage() {

    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)  
    
    //react-hook-form: 에러메세지 표시
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => { //async를 붙여야 await를 붙일 수 있다.
        console.log("data");
        console.log(data); //input 안의 값

    //입력값 보내기
        try{
            const result = await createBoard({ //input창을 만들고 onChange & state 이용하면 입력값을 받을 수 있다
                variables: {createBoardInput: {writer: data.writer, password: data.password, title: data.title, contents: data.contents, youtubeUrl: data.youtubeUrl, boardAddress:{zipcode: data.zipcode, address: data.address, addressDetail: data.addressDetail}}} 
            })
            console.log("result")
            console.log(result)
            console.log("result.data")
            console.log(result.data)
            // alert('게시글이 정상적으로 등록되었습니다.')
            router.push(`/boards/${result.data.createBoard._id}`) //[폴더명]은 뭐든지 다 받는 폴더이다. 해당되는 폴더가 없을 경우 [폴더명]이 실행된다. 해당되는 폴더가 있으면 해당하는 폴더로 이동한다.
    
        }catch(error){
            alert(error.message)
        }  


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
                <Input {...register("title", { required: true })}   type="text" placeholder="제목을 작성해주세요."/>
                {errors.title && <Error>제목을 입력해주세요.</Error>}
                <Label>내용<Required>*</Required></Label>
                <ContentInput {...register("contents", { required: true })}  type="text" placeholder="내용을 작성해주세요."/>
                {errors.contents && <Error>내용을 입력해주세요.</Error>}
            </InputWrapper>
        
            <InputWrapper>
                <Label>주소</Label>
                <ZipCodeWrapper>
                    <ZipCode {...register("zipcode")} type="text" placeholder="00000"/>
                    <ZipCodeButton>우편번호 검색</ZipCodeButton>
                </ZipCodeWrapper>
                <Address {...register("address")} type="text"/>
                <Address {...register("addressDetail")} type="text"/>
            </InputWrapper>

            <InputWrapper>
                <Label>유튜브</Label>
                <Input {...register("youtubeUrl")} type="text" placeholder="링크를 복사해주세요."/>
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
                <Radio {...register("images")} type="radio" id="images" name="radio-button" />
                <RadioLabel htmlFor="images">사진</RadioLabel>
            </SettingWrapper>

        <SubmitButton>등록하기</SubmitButton>
    </Wrapper>
    )
}


