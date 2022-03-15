import {Wrapper,Title, Input, Input__Short, Input__Short__Wrapper,
    Input__Label, Star, Input__Input,
    Input__Long, Input__Input__Content, Input__Input__Address,Input__Address, Address__Detail,
    Search, Picture__Wrapper, Picture, Picture__Icon, Picture__Label, 
    Radio__Wrapper, Radio, Radio__Label, Create
} from "../../../styles/createBoard"

export default function createBoard() {
  return (
    <Wrapper>
        <Title>게시물 등록</Title>
        <Input>
            <Input__Short>
                <Input__Short__Wrapper>
                    <Input__Label>작성자<Star>*</Star></Input__Label>
                    <Input__Input type="text" placeholder="이름을 적어주세요."/>
                </Input__Short__Wrapper>
           
                <Input__Short__Wrapper>
                    <Input__Label>비밀번호</Input__Label>
                    <Input__Input type="text" placeholder="비밀번호를 입력해주세요."/>
                </Input__Short__Wrapper>
            </Input__Short>
        </Input>

        <Input>
            <Input__Long>
                <Input__Label>제목</Input__Label>
                <Input__Input type="text" placeholder="제목을 작성해주세요."/>
                <Input__Label>내용</Input__Label>
                <Input__Input__Content type="text" placeholder="내용을 작성해주세요."/>
            </Input__Long>
        </Input>

        <Input>
            <Input__Long>
                <Input__Label>주소</Input__Label>
                <Input__Address>
                    <Input__Input__Address type="text" placeholder="07250"/>
                    <Search>우편번호 검색</Search>
                </Input__Address>
                <Address__Detail type="text"/>
                <Address__Detail type="text"/>
            </Input__Long>
        </Input>

        <Input>
            <Input__Long>
                <Input__Label>유튜브</Input__Label>
                <Input__Input type="text" placeholder="링크를 복사해주세요."/>
            </Input__Long>
        </Input>

        <Input>
            <Input__Long>
                <Input__Label>사진 첨부</Input__Label>
                <Picture__Wrapper>
                    <Picture>
                        <Picture__Icon>+</Picture__Icon>
                        <Picture__Label>Upload</Picture__Label>
                    </Picture>
                    <Picture>
                        <Picture__Icon>+</Picture__Icon>
                        <Picture__Label>Upload</Picture__Label>
                    </Picture>
                    <Picture>
                        <Picture__Icon>+</Picture__Icon>
                        <Picture__Label>Upload</Picture__Label>
                    </Picture>
                </Picture__Wrapper>
            </Input__Long>
        </Input>

        <Input>
            <Input__Long>
                <Input__Label>메인 설정</Input__Label>
                <Radio__Wrapper>
                    <Radio__Label>
                        <Radio type="radio" value="youtube" name="main" checked/>
                        유튜브
                    </Radio__Label>
                    <Radio__Label>
                        <Radio type="radio" value="picture" name="main" />
                        사진
                    </Radio__Label>
                </Radio__Wrapper>
            </Input__Long>
        </Input>

        <Create>등록하기</Create>
        
    </Wrapper>
  )
}
