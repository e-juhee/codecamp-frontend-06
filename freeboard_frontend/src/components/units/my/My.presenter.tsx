import Point from "./point/Point";
import * as S from "./My.styles";
import { v4 as uuidv4 } from "uuid";
import { priceToString } from "../../../commons/libraries/utils";

export default function MyUI(props: any) {
  return (
    <>
      <h1>마이페이지</h1>
      {/* <div onClick={props.onClickLogOut}>로그아웃</div> */}
      <Point />
      <S.TitleWrapper>
        <S.Title>Like It</S.Title>
        <S.SubTitle>찜 목록</S.SubTitle>
      </S.TitleWrapper>

      <S.NewItemWrapper>
        {props.data?.fetchUseditemsIPicked.map((el: any, index: any) => (
          <S.Item key={uuidv4()} id={el._id} onClick={props.onClickProduct(el)}>
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
    </>
  );
}
