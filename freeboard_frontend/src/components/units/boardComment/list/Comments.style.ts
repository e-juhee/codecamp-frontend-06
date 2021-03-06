import styled from "@emotion/styled";
export const CStarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 116px;
  height: 100%;
`;
interface ICStarProps {
  isStar: boolean;
}
export const CStar = styled.div<{ isStar: boolean }>`
  width: 20px;
  height: 20px;
  background-image: ${(props: ICStarProps) =>
    props.isStar
      ? "url('/boards/detail/comment/CYellowStar.png')"
      : "url('/boards/detail/comment/CGrayStar.png')"};
`;

interface ICommentsLengthProps {
  commentsLength: number;
}
export const CListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto 100px auto;
  border-top: ${(props: ICommentsLengthProps) =>
    props.commentsLength > 0 ? "3px solid lightgray;" : ""};
  border-bottom: ${(props: ICommentsLengthProps) =>
    props.commentsLength > 0 ? "3px solid lightgray;" : ""};
  overflow: auto;
  height: ${(props: ICommentsLengthProps) =>
    props.commentsLength > 4 ? "520px" : ""};
`;
export const CDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const CLeft = styled.div``;
export const CProfileImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  background-image: url("/boards/detail/ProfileImage.png");
  background-size: cover;
`;
export const CMiddle = styled.div`
  width: 1087px;
`;
export const CDetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 4px;
`;
export const CWriter = styled.div`
  padding-right: 18px;
  font-weight: 700;
  font-size: 16px;
`;
export const CBody = styled.div``;
export const CContents = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
  padding-bottom: 20px;
`;
export const CDate = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #bdbdbd;
`;
export const CRight = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CUpdate = styled.button`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  background-image: url("/boards/detail/comment/CUpdate.png");
  background-size: cover;
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const CDelete = styled.button`
  width: 18px;
  height: 18px;
  background-image: url("/boards/detail/comment/CDelete.png");
  background-size: cover;
  border: none;
  background-color: white;
  cursor: pointer;
`;
