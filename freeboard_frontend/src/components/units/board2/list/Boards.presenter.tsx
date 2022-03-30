import Image from "next/image";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./Boards.style";
import { IBoardsUIProps } from "./Boards.types";
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.

export default function BoardsUI(props: IBoardsUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>베스트 게시물</S.Title>

        <S.BestBoardWrapper>
          <S.BestBoard>
            <S.BestImage src={"./boards/list/Best1.png"}></S.BestImage>
            <S.BestTitle>게시물 제목입니다.</S.BestTitle>
            <S.BestBoardBody>
              <S.BestLeftWrapper>
                <S.BestProfile>
                  <S.ProfileImg></S.ProfileImg>
                  <S.Writer>이주희</S.Writer>
                </S.BestProfile>
                <S.BestDate>Date : 2021.02.18</S.BestDate>
              </S.BestLeftWrapper>
              <S.BestRightWrapper>
                <S.LikeImg></S.LikeImg>
                <S.BestLike>356</S.BestLike>
              </S.BestRightWrapper>
            </S.BestBoardBody>
          </S.BestBoard>
          <S.BestBoard>
            <S.BestImage src={"./boards/list/Best2.png"}></S.BestImage>
            <S.BestTitle>게시물 제목입니다.</S.BestTitle>
            <S.BestBoardBody>
              <S.BestLeftWrapper>
                <S.BestProfile>
                  <S.ProfileImg></S.ProfileImg>
                  <S.Writer>이주희</S.Writer>
                </S.BestProfile>
                <S.BestDate>Date : 2021.02.18</S.BestDate>
              </S.BestLeftWrapper>
              <S.BestRightWrapper>
                <S.LikeImg></S.LikeImg>
                <S.BestLike>356</S.BestLike>
              </S.BestRightWrapper>
            </S.BestBoardBody>
          </S.BestBoard>
          <S.BestBoard>
            <S.BestImage src={"./boards/list/Best3.png"}></S.BestImage>
            <S.BestTitle>게시물 제목입니다.</S.BestTitle>
            <S.BestBoardBody>
              <S.BestLeftWrapper>
                <S.BestProfile>
                  <S.ProfileImg></S.ProfileImg>
                  <S.Writer>이주희</S.Writer>
                </S.BestProfile>
                <S.BestDate>Date : 2021.02.18</S.BestDate>
              </S.BestLeftWrapper>
              <S.BestRightWrapper>
                <S.LikeImg></S.LikeImg>
                <S.BestLike>356</S.BestLike>
              </S.BestRightWrapper>
            </S.BestBoardBody>
          </S.BestBoard>
          <S.BestBoard>
            <S.BestImage src={"./boards/list/Best4.png"}></S.BestImage>
            <S.BestTitle>게시물 제목입니다.</S.BestTitle>
            <S.BestBoardBody>
              <S.BestLeftWrapper>
                <S.BestProfile>
                  <S.ProfileImg></S.ProfileImg>
                  <S.Writer>이주희</S.Writer>
                </S.BestProfile>
                <S.BestDate>Date : 2021.02.18</S.BestDate>
              </S.BestLeftWrapper>
              <S.BestRightWrapper>
                <S.LikeImg></S.LikeImg>
                <S.BestLike>356</S.BestLike>
              </S.BestRightWrapper>
            </S.BestBoardBody>
          </S.BestBoard>
        </S.BestBoardWrapper>

        <S.SearchWrapper>
          <S.SearchTitle>
            <S.SearchIcon></S.SearchIcon>
            <S.SearchInput
              type="text"
              placeholder="제목을 검색해주세요."
            ></S.SearchInput>
          </S.SearchTitle>
          <S.SearchDate>YYYY. MM.DD ~ YYYY. MM.DD</S.SearchDate>
          <S.SearchButton>검색하기</S.SearchButton>
        </S.SearchWrapper>

        <S.Table>
          <thead>
            <tr>
              <S.TH>번호</S.TH>
              <S.TH>제목</S.TH>
              <S.TH>작성자</S.TH>
              <S.TH>날짜</S.TH>
            </tr>
          </thead>
          <tbody>
            {props.data?.fetchBoards.map((el: any, index: any) => (
              <tr key={el._id}>
                <S.TD style={{ width: "100px" }}>
                  {props.data?.fetchBoards.length - index}
                </S.TD>
                <S.TD
                  id={el._id}
                  onClick={props.onClickBoard}
                  style={{ width: "800px", cursor: "pointer" }}
                >
                  {el.title}
                </S.TD>
                <S.TD>{el.writer}</S.TD>
                <S.TD>{getDate(el.createdAt)}</S.TD>
              </tr>
            ))}
          </tbody>
        </S.Table>

        <S.Footer>
          <div style={{ width: "171px" }}></div>
          <S.Pagination>
            <S.Next src={"./boards/list/Gt.png"}></S.Next>
            <S.PageNumber>1</S.PageNumber>
            <S.CurrentPageNumber>2</S.CurrentPageNumber>
            <S.Next src={"./boards/list/Lt.png"}></S.Next>
          </S.Pagination>
          <S.NewButton>
            <S.NewButtonIcon></S.NewButtonIcon>
            <S.NewButtonText onClick={props.onClickWrite}>
              게시물 등록하기
            </S.NewButtonText>
          </S.NewButton>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
