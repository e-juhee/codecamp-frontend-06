import { priceToString } from "../../../../commons/libraries/utils";
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
        <S.Body>
          <S.TitleWrapper>
            <S.Title>Most Popular</S.Title>
            <S.SubTitle>인기 상품</S.SubTitle>
          </S.TitleWrapper>

          <S.BestItemWrapper>
            {props.dataBest?.fetchUseditemsOfTheBest.map((el: any) => (
              <S.Item
                key={uuidv4()}
                id={el._id}
                onClick={props.onClickProduct(el)}
              >
                {el.images[0] ? (
                  <S.ItemImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></S.ItemImg>
                ) : (
                  <S.DefaultImg></S.DefaultImg>
                )}

                <S.Name>{el.name}</S.Name>
                <S.Remarks>{el.remarks}</S.Remarks>
                <S.Price>{priceToString(el.price)}</S.Price>
                <S.ItemFooter>
                  <S.Img src="/products/list/pick.png"></S.Img>
                  <S.Span>{el.pickedCount}</S.Span>
                  <S.Img src="/products/list/user.png"></S.Img>
                  <S.Span>{el.seller.name}</S.Span>
                </S.ItemFooter>
              </S.Item>
            ))}
          </S.BestItemWrapper>

          <S.SearchWrapper>
            <S.SearchTitle>
              <S.SearchIcon></S.SearchIcon>
              <S.SearchInput
                type="text"
                placeholder="제품을 검색해주세요."
                onChange={props.onChangeSearch}
              ></S.SearchInput>
            </S.SearchTitle>
            <S.SearchDate>YYYY. MM.DD ~ YYYY. MM.DD</S.SearchDate>
            <S.SearchButton>검색하기</S.SearchButton>
          </S.SearchWrapper>

          <S.Footer>
            <div style={{ width: "80px" }}></div>
            <S.NewButton onClick={props.onClickWrite}>
              <S.NewButtonIcon></S.NewButtonIcon>
              <S.NewButtonText>내 상품 판매</S.NewButtonText>
            </S.NewButton>
          </S.Footer>

          <S.TitleWrapper>
            <S.Title>New In</S.Title>
            <S.SubTitle>신규 등록 상품</S.SubTitle>
          </S.TitleWrapper>
          <S.SoldOutWrapper>
            <S.SoldOutLabel>
              <S.SoldOutCheckBox
                type="checkbox"
                onChange={props.onChangeCheck}
                checked={!props.isChecked}
              />
              품절 상품 보기
            </S.SoldOutLabel>
          </S.SoldOutWrapper>

          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore} // 스크롤 시 작동하는 함수
            hasMore={true}
            useWindow={true}
          >
            <S.NewItemWrapper>
              {props.data?.fetchUseditems.map((el: any, index: any) => (
                <S.Item
                  key={uuidv4()}
                  id={el._id}
                  onClick={props.onClickProduct(el)}
                >
                  {el.images[0] ? (
                    <S.ItemImg
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    ></S.ItemImg>
                  ) : (
                    <S.DefaultImg></S.DefaultImg>
                  )}

                  <S.Name>{el.name}</S.Name>
                  <S.Remarks>{el.remarks}</S.Remarks>
                  <S.Price>{priceToString(el.price)}</S.Price>
                  <S.ItemFooter>
                    <S.Img src="/products/list/pick.png"></S.Img>
                    <S.Span>{el.pickedCount}</S.Span>
                    <S.Img src="/products/list/user.png"></S.Img>
                    <S.Span>{el.seller.name}</S.Span>
                  </S.ItemFooter>
                </S.Item>
              ))}
            </S.NewItemWrapper>
          </InfiniteScroll>
        </S.Body>
        <S.TodayWrapper>
          <S.TodayTitle>오늘 본 상품</S.TodayTitle>
          <S.TodayCount>{props.todayView.length}</S.TodayCount>
          {props.todayView.map((el: any, index: any) => (
            <S.TodayItem
              key={uuidv4()}
              id={el._id}
              onClick={props.onClickProduct(el)}
            >
              {el.images[0] ? (
                <S.TodayImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                ></S.TodayImg>
              ) : (
                <S.TodayDefaultImg></S.TodayDefaultImg>
              )}
              <S.TodayName>{el.name}</S.TodayName>
            </S.TodayItem>
          ))}
        </S.TodayWrapper>
      </S.Wrapper>
    </>
  );
}
