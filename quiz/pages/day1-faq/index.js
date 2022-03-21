import { Profiler } from "react"
import {  Wrapper, Wrapper__Header, Header, Search, Title, Header__Title, Header__Nav, Nav__Selected__Line, Profile, Profile__Image, Profile__Name, Profile__NameIcon, Nav, Nav__Selected, 
  Split, 
  Wrapper__Question, Question, Question__Number, Question__Title, Question__text, Quetion__Image,
  Wrapper__Footer, Footer, Footer__Image, Footer__Text, Footer__Text__My } from "../../styles/myPage"

export default function myPage() {
  return (
    <Wrapper>
      <Wrapper__Header>
        <Header>
          <Search src={'/myPage/search.png'}></Search>
          <Header__Title>
            <Title>마이</Title>
            <Profile>
              <Profile__Image src={'/myPage/profile.png'}></Profile__Image>
              <Profile__Name>임정아</Profile__Name>
              <Profile__NameIcon src={'/myPage/right-arrow.png'}></Profile__NameIcon>
            </Profile>
          </Header__Title>
          <Header__Nav>
            <Nav>공지사항</Nav>
            <Nav>이벤트</Nav>
            <Nav__Selected>
              FAQ
              <Nav__Selected__Line></Nav__Selected__Line>
            </Nav__Selected>
            <Nav>Q&A</Nav>
          </Header__Nav>
        </Header>
      </Wrapper__Header>

      <Split></Split>
        
      <Wrapper__Question>        
        <Question>
          <Question__text>
            <Question__Number>Q. 01</Question__Number>
            <Question__Title>리뷰 작성은 어떻게 하나요?</Question__Title>
          </Question__text>
          <Quetion__Image src={'/myPage/down-arrow.png'}></Quetion__Image>
        </Question>
        <Question>
          <Question__text>
            <Question__Number>Q. 02</Question__Number>
            <Question__Title>리뷰 수정/삭제는 어떻게 하나요?</Question__Title>
          </Question__text>
          <Quetion__Image src={'/myPage/down-arrow.png'}></Quetion__Image>
        </Question>
        <Question>
          <Question__text>
            <Question__Number>Q. 03</Question__Number>
            <Question__Title>아이디/비밀번호를 잊어버렸어요.</Question__Title>
          </Question__text>
          <Quetion__Image src={'/myPage/down-arrow.png'}></Quetion__Image>
        </Question>
        <Question>
          <Question__text>
            <Question__Number>Q. 04</Question__Number>
            <Question__Title>회원탈퇴를 하고싶어요.</Question__Title>
          </Question__text>
          <Quetion__Image src={'/myPage/down-arrow.png'}></Quetion__Image>
        </Question>
        <Question>
          <Question__text>
            <Question__Number>Q. 05</Question__Number>
            <Question__Title>출발지 설정은 어떻게 하나요?</Question__Title>
          </Question__text>
          <Quetion__Image src={'/myPage/down-arrow.png'}></Quetion__Image>
        </Question>
        <Question>
          <Question__text>
            <Question__Number>Q. 06</Question__Number>
            <Question__Title>비밀번호를 변경하고 싶어요.</Question__Title>
          </Question__text>
          <Quetion__Image src={'/myPage/down-arrow.png'}></Quetion__Image>
        </Question>
      </Wrapper__Question>

      <Split></Split>

      <Wrapper__Footer>
        <Footer>
          <Footer__Image src={'/myPage/home.png'}></Footer__Image>
          <Footer__Text>홈</Footer__Text>
        </Footer>
        <Footer>
          <Footer__Image src={'/myPage/itsload.png'}></Footer__Image>
          <Footer__Text>잇츠로드</Footer__Text>
        </Footer>
        <Footer>
          <Footer__Image src={'/myPage/heart.png'}></Footer__Image>
          <Footer__Text>마이찜</Footer__Text>
        </Footer>
        <Footer>
          <Footer__Image src={'/myPage/my.png'}></Footer__Image>
          <Footer__Text__My>마이</Footer__Text__My>
        </Footer>
      </Wrapper__Footer>
    </Wrapper>
  )
}
