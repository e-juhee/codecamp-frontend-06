import Image from "next/image";
import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../pagination/Pagination";
import * as S from "./Boards.style";
import { IBoardsUIProps } from "./Boards.types";
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.

export default function BoardsUI(props: IBoardsUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>베스트 게시물</S.Title>

        <S.BestBoardWrapper>
          {props.dataBest?.fetchBoardsOfTheBest.map((el: any) => (
            <S.BestBoard key={el._id} id={el._id} onClick={props.onClickBoard}>
              <S.BestImage src={"./boards/list/Best1.png"}></S.BestImage>
              <S.BestTitle>{el.title}</S.BestTitle>
              <S.BestBoardBody>
                <S.BestLeftWrapper>
                  <S.BestProfile>
                    <S.ProfileImg></S.ProfileImg>
                    <S.Writer>{el.writer}</S.Writer>
                  </S.BestProfile>
                  <S.BestDate>Date : {getDate(el.createdAt)}</S.BestDate>
                </S.BestLeftWrapper>
                <S.BestRightWrapper>
                  <S.LikeImg></S.LikeImg>
                  <S.BestLike>{el.likeCount}</S.BestLike>
                </S.BestRightWrapper>
              </S.BestBoardBody>
            </S.BestBoard>
          ))}
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
              <S.TRWrapper
                key={el._id}
                id={el._id}
                onClick={props.onClickBoard}
              >
                <S.TD style={{ width: "100px" }}>
                  {props.data?.fetchBoards.length - index}
                </S.TD>
                <S.TD style={{ width: "800px", cursor: "pointer" }}>
                  {el.title}
                </S.TD>
                <S.TD>{el.writer}</S.TD>
                <S.TD>{getDate(el.createdAt)}</S.TD>
              </S.TRWrapper>
            ))}
          </tbody>
        </S.Table>

        <S.Footer>
          <div style={{ width: "80px" }}></div>
          <Pagination refetch={props.refetch} lastPage={props.lastPage} />
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
