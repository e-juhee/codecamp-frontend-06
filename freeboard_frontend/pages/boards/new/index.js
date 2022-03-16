import {Wrapper,Title, Input, InputShort, InputshortWrapper,
    InputLabel, Star, InputInput,
    Writer, Password, ContentTitle, Content,
    InputLong, InputInputAddress,InputAddress, AddressDetail,
    Search, PictureWrapper, Picture, PictureIcon, PictureLabel, 
    RadioWrapper, Radio, RadioLabel, Create, Error
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
        <Input>
            <InputShort>
                <InputshortWrapper>
                    <InputLabel>작성자<Star>*</Star></InputLabel>
                    <Writer {...register("writer", { required: true })}   type="text" placeholder="이름을 적어주세요."/>
                    {errors.writer && <Error>이름을 입력해주세요.</Error>}
                </InputshortWrapper>
           
                <InputshortWrapper>
                    <InputLabel>비밀번호<Star>*</Star></InputLabel>
                    <Password {...register("password", { required: true })}  type="password" placeholder="비밀번호를 입력해주세요."/>
                    {errors.password && <Error>비밀번호를 입력해주세요.</Error>}
                </InputshortWrapper>
            </InputShort>
        </Input>

        <Input>
            <InputLong>
                <InputLabel>제목<Star>*</Star></InputLabel>
                <ContentTitle {...register("contentTitle", { required: true })}   type="text" placeholder="제목을 작성해주세요."/>
                {errors.contentTitle && <Error>제목을 입력해주세요.</Error>}
                <InputLabel>내용<Star>*</Star></InputLabel>
                <Content {...register("title", { required: true })}  type="text" placeholder="내용을 작성해주세요."/>
                {errors.title && <Error>내용을 입력해주세요.</Error>}
            </InputLong>
        </Input>

        <Input>
            <InputLong>
                <InputLabel>주소</InputLabel>
                <InputAddress>
                    <InputInputAddress {...register("zipcode")} type="text" placeholder="07250"/>
                    <Search>우편번호 검색</Search>
                </InputAddress>
                <AddressDetail {...register("address1")} type="text"/>
                <AddressDetail {...register("address2")} type="text"/>
            </InputLong>
        </Input>

        <Input>
            <InputLong>
                <InputLabel>유튜브</InputLabel>
                <InputInput {...register("link")} type="text" placeholder="링크를 복사해주세요."/>
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
                        <Radio {...register("youtube")} type="radio" value="youtube" name="main" checked/>
                        유튜브
                    </RadioLabel>
                    <RadioLabel>
                        <Radio {...register("image")} type="radio" value="picture" name="main" />
                        사진
                    </RadioLabel>
                </RadioWrapper>
            </InputLong>
        </Input>

        <Create>등록하기</Create>

    </Wrapper>
  )
}
