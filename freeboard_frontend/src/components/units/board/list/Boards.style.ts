import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 100px auto;
  padding: 60px 100px 100px 100px;
`;
export const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 40px;
`;
export const BestBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  padding-bottom: 80px;
`;
export const BestBoard = styled.div`
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: rgba(246, 236, 203, 0.3);
  }
`;
export const BestImage = styled.img`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const BestTitle = styled.div`
  height: 50px;
  font-weight: 500;
  font-size: 18px;
  padding: 20px;
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

export const BestBoardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
export const BestLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BestProfile = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const ProfileImg = styled.div`
  background-image: url("./boards/list/Profile.png");
  width: 20px;
  height: 20px;
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
