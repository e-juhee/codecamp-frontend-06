import { getDate } from "../../../../commons/libraries/utils";
// import Pagination from "../../../commons/pagination/Pagination";
import * as S from "./Products.style";
import { IBoardsUIProps } from "./Products.types";
import { v4 as uuidv4 } from "uuid";
import LayoutBanner from "../../../commons/layout/banner";
import InfiniteScroll from "react-infinite-scroller";

// default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.

export default function ProductsUI(props: IBoardsUIProps) {
  return (
    <>
      <LayoutBanner />
      <S.Wrapper>
        <S.Title>인기 상품</S.Title>

        <S.BestBoardWrapper>
          {props.dataBest?.fetchUseditemsOfTheBest.map((el: any) => (
            <S.BestBoard
              key={uuidv4()}
              id={el._id}
              onClick={props.onClickProduct}
            >
              <S.BestImage src={"./boards/list/Best1.png"}></S.BestImage>
              <S.BestTitle>{el.name}</S.BestTitle>
              <S.BestBoardBody>
                <S.BestLeftWrapper>
                  <S.BestProfile>
                    <S.ProfileImg></S.ProfileImg>
                    <S.Writer>{el.remarks}</S.Writer>
                  </S.BestProfile>
                  <S.BestDate>Date : {getDate(el.createdAt)}</S.BestDate>
                </S.BestLeftWrapper>
                <S.BestRightWrapper>
                  <S.LikeImg></S.LikeImg>
                  <S.BestLike>{el.pickedCount}</S.BestLike>
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
        <h1>오늘 본 상품</h1>

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
            {props.todayView.map((el: any, index: any) => (
              <S.TRWrapper
                key={uuidv4()}
                id={el._id}
                onClick={props.onClickProduct(el)}
              >
                {/* 게시글 번호 */}
                <S.TD>{index}</S.TD>
                <S.TD>
                  {" "}
                  {el.name
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((el: any) => (
                      <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                        {el}
                      </S.Word>
                    ))}
                </S.TD>
                <S.TD>{el?.seller?.name}</S.TD>
                <S.TD>{getDate(el.createdAt)}</S.TD>
              </S.TRWrapper>
            ))}
          </tbody>
        </S.Table>

        <S.Footer>
          <div style={{ width: "80px" }}></div>

          <S.NewButton onClick={props.onClickWrite}>
            <S.NewButtonIcon></S.NewButtonIcon>
            <S.NewButtonText>내 상품 판매</S.NewButtonText>
          </S.NewButton>
        </S.Footer>
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
          <S.List>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore} // 스크롤 시 작동하는 함수
              hasMore={true}
              useWindow={false}
            >
              {props.data?.fetchUseditems.map((el: any, index: any) => (
                <S.TRWrapper
                  key={uuidv4()}
                  id={el._id}
                  onClick={props.onClickProduct(el)}
                >
                  {/* 게시글 번호 */}
                  <S.TD>{index}</S.TD>
                  <S.TD>
                    {" "}
                    {el.name
                      .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                      .split("#$%")
                      .map((el: any) => (
                        <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                          {el}
                        </S.Word>
                      ))}
                  </S.TD>
                  <S.TD>{el?.seller?.name}</S.TD>
                  <S.TD>{getDate(el.createdAt)}</S.TD>
                </S.TRWrapper>
              ))}
            </InfiniteScroll>
          </S.List>
        </S.Table>
      </S.Wrapper>
    </>
  );
}
