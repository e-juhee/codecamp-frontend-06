import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  flex-direction: row;
  margin: 20px auto;
  width: 100%;
  justify-content: space-evenly;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  /* margin: 100px auto; */
  padding: 60px 100px 100px 100px;
`;
export const TodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  border: 1px solid rgb(204, 204, 204);
  float: none;
  height: 500px;
  position: sticky;
  top: 200px;
  overflow: scroll;
  padding: 10px;
`;
export const TodayTitle = styled.div`
  color: #666666;
  font-size: 12px;
  font-family: "NanumSquareB";
`;
export const TodayCount = styled.div`
  color: #f70000;
  font-size: 12px;
  font-family: "NanumSquareB";
  padding-bottom: 10px;
`;
export const TodayItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;
export const TodayImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
export const TodayName = styled.div`
  width: 70px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TodayDefaultImg = styled.div`
  width: 70px;
  height: 70px;
  background-color: #f5f4f9;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 1200px;
`;
export const Title = styled.div`
  font-family: "NanumSquareEB";
  font-size: 20px;
`;
export const SubTitle = styled.div`
  font-size: 14px;
  margin-top: -5px;
  color: rgba(34, 34, 34, 0.5);
`;
export const SoldOutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 1200px;
`;
export const SoldOutLabel = styled.label``;
export const SoldOutCheckBox = styled.input`
  margin-right: 5px;
  margin-bottom: 28px;
`;
export const BestItemWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  padding-bottom: 80px;
`;
export const NewItemWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  overflow: auto;
  /* height: 800px; */
  padding-bottom: 80px;
`;
export const Item = styled.div`
  width: 282px;
  height: 400px;
  margin-bottom: 50px;
  cursor: pointer;
`;
export const ItemImg = styled.img`
  border-radius: 10px;

  width: 100%;
  height: 282px;
  object-fit: cover;
  :hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

export const DefaultImg = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 282px;
  background-color: #f5f4f9;
  :hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

export const Name = styled.div`
  font-size: 14px;
  padding-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "NanumSquareB";
  color: #333;
  text-decoration: underline;
  text-underline-position: under;
`;
export const Remarks = styled.div`
  padding-top: 8.5px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(34, 34, 34);
`;
export const Price = styled.div`
  font-size: 15px;
  padding-top: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "NanumSquareB";
  color: #333;
  margin-bottom: 5px;
`;

export const ItemFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const Span = styled.div`
  font-size: 12px;
  margin-left: 5px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "hotpink" : "none")};
`;

export const Writer = styled.div`
  padding-left: 6px;
  height: 24px;
`;
export const BestDate = styled.div`
  color: #828282;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
`;
export const BestRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 24px;
  height: 50px;
`;
export const LikeImg = styled.div`
  background-image: url("./boards/list/Like.png");
  width: 20px;
  height: 18px;
`;
export const BestLike = styled.div`
  height: 27px;
  font-size: 16px;
  line-height: 24px;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  height: 52px;
  margin-bottom: 40px;
`;
export const SearchTitle = styled.div`
  width: 776px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #f2f2f2;
  border-radius: 10px;
`;
export const SearchIcon = styled.div`
  width: 17.5px;
  height: 17.5px;
  margin: auto 19px;
  background-image: url("/boards/list/SearchIcon.png");
`;
export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
`;
export const SearchDate = styled.div`
  height: 100%;
  width: 244px;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  text-align: center;
  line-height: 52px;
`;
export const SearchButton = styled.button`
  height: 100%;
  width: 94px;
  background: #000000;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
`;
export const Table = styled.table`
  height: 100%;
  width: 1200px;
  border-top: 1.5px solid black;
  border-bottom: 1.5px solid black;
  border-collapse: collapse;
  margin-bottom: 40px;
  table-layout: fixed;
`;
export const TH = styled.th`
  height: 52px;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  &:first-of-type {
    border-left: none;
  }
`;
export const TRWrapper = styled.tr`
  background-color: white;
  cursor: pointer;
  :hover {
    color: #00008b;
    background-color: rgb(240, 248, 255, 0.7);
  }
`;

export const TD = styled.td`
  height: 52px;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
  font-size: 16px;
  &:first-of-type {
    border-left: none;
  }
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Footer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const NewButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: rgba(246, 236, 203, 0.3);
  }
`;
export const NewButtonIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("/boards/list/NewBoard.png");
  margin: 0 11px 0 19px;
`;
export const NewButtonText = styled.div`
  font-size: 16px;
`;
