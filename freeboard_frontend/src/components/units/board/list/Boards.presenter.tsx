import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/pagination/Pagination";
import * as S from "./Boards.style";
import { IBoardsUIProps } from "./Boards.types";
import { v4 as uuidv4 } from "uuid";
import LayoutBanner from "../../../commons/layout/banner";

export default function BoardsUI(props: IBoardsUIProps) {
  return (
    <>
      <LayoutBanner />

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
              onChange={props.onChangeSearch}
            ></S.SearchInput>
          </S.SearchTitle>
          <S.SearchDate>YYYY. MM.DD ~ YYYY. MM.DD</S.SearchDate>
          <S.SearchButton>검색하기</S.SearchButton>
        </S.SearchWrapper>

        <S.Table>
          <thead>
            <tr>
              <S.TH
                style={{
                  width: "10%",
                }}
              >
                번호
              </S.TH>
              <S.TH
                style={{
                  width: "65%",
                }}
              >
                제목
              </S.TH>
              <S.TH
                style={{
                  width: "12.5%",
                }}
              >
                작성자
              </S.TH>
              <S.TH
                style={{
                  width: "12.5%",
                }}
              >
                날짜
              </S.TH>
            </tr>
          </thead>
          <tbody>
            {props.data?.fetchBoards.map((el: any, index: any) => (
              <S.TRWrapper
                key={el._id}
                id={el._id}
                onClick={props.onClickBoard}
              >
                {/* 게시글 번호 */}
                <S.TD>{props.current * 10 + index - 9}</S.TD>
                <S.TD>
                  {" "}
                  {el.title
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((el: any) => (
                      <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                        {el}
                      </S.Word>
                    ))}
                </S.TD>
                <S.TD>{el.writer}</S.TD>
                <S.TD>{getDate(el.createdAt)}</S.TD>
              </S.TRWrapper>
            ))}
          </tbody>
        </S.Table>

        <S.Footer>
          <div style={{ width: "80px" }}></div>
          <Pagination
            refetch={props.refetch}
            lastPage={props.lastPage}
            current={props.current}
            setCurrent={props.setCurrent}
          />
          <S.NewButton onClick={props.onClickWrite}>
            <S.NewButtonIcon></S.NewButtonIcon>
            <S.NewButtonText>게시물 등록하기</S.NewButtonText>
          </S.NewButton>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
