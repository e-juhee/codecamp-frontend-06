import styled from "@emotion/styled";

export const CWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
`;
export const CHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
`;
export const CTitleIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 14px;
  background-image: url("/boards/detail/comment/CTitle.png");
`;
export const CTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const CInputHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 530px;
  height: 52px;
  margin-bottom: 20px;
`;
export const CInputShort = styled.input`
  width: 180px;
  height: 100%;
  padding: 14px;
`;
export const CStarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 116px;
  height: 100%;
`;
export const CStar = styled.button<{ isStar: boolean }>`
  width: 20px;
  height: 20px;
  background-image: ${(props) =>
    props.isStar
      ? "url('/boards/detail/comment/CYellowStar.png')"
      : "url('/boards/detail/comment/CGrayStar.png')"};
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const CInputBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 161px;
  margin-bottom: 20px;
  border: 1px solid #bdbdbd;
`;
export const CTextArea = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  font-size: 16px;
`;
export const CInputFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
`;
export const CTextCount = styled.div`
  padding: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;
export const CCreateButton = styled.button`
  width: 91px;
  height: 100%;
  background: #000000;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;
