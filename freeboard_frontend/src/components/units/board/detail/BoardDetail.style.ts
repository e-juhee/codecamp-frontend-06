import styled from "@emotion/styled";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 100px auto;
  padding: 80px 100px 80px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const ProfileImage = styled.div`
  width: 46.67px;
  height: 46.67px;
  background-image: url("/boards/detail/ProfileImage.png");
  background-size: cover;
`;
export const ProfileWrapper = styled.div`
  padding-left: 16.67px;
  font-family: "Noto Sans CJK KR";
  font-size: 36px;
  font-weight: 700;
`;

export const Writer = styled.div`
  height: 36px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
export const CreateDate = styled.div`
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: #828282;
  line-height: 24px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-left: 410px;
  padding-bottom: 36.67px;
`;
export const LocationToolTip = styled.div`
  width: 376px;
  height: 72px;
  margin-bottom: 4.67px;
  margin-right: 15px;
  padding: 8px 16px;
  background-image: url("/boards/detail/LocationToolTip.png");
  background-size: cover;
  font-weight: 400;
  font-size: 16px;
  color: white;
  line-height: 24px;
  text-align: right;
  visibility: hidden;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 74.67px;
  padding-right: 5px;
`;
export const LinkIcon = styled.div`
  width: 26.67px;
  height: 13.33px;
  background-image: url("/boards/detail/LinkIcon.png");
  background-size: cover;
  cursor: pointer;
`;
export const LocationIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 18.67px;
  height: 26.67px;
  background-image: url("/boards/detail/LocationIcon.png");
  background-size: cover;
  cursor: pointer;
`;
export const LocationIconInner = styled.div`
  width: 6.67px;
  height: 6.67px;
  padding-bottom: 14px;
  background-image: url("/boards/detail/LocationIconInner.png");
  background-size: auto;
  background-repeat: no-repeat;
`;
export const Title = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 40px;
  font-family: "Noto Sans CJK KR";
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
`;
export const Image = styled.img`
  width: 996px;
  /* height: 480px; */
  margin-bottom: 40px;
  /* background-image: url("/boards/detail/Image.png"); */
  /* background-size: auto; */
  /* background-repeat: no-repeat; */
`;
export const Contents = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 120px;
`;
export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 160px;
`;
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  height: 51px;
  margin: auto 20px;
`;
export const LikeIcon = styled(LikeOutlined)`
  color: #ffd600;
  font-size: 18px;
  cursor: pointer;
`;
export const DisLikeIcon = styled(DislikeOutlined)`
  font-size: 18px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #ffd600;
`;
export const DisLikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #828282;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 100px auto 0 auto;
  padding-bottom: 87px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Button = styled.button`
  width: 179px;
  height: 45px;
  margin: auto 12px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;
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
export const CStar = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/boards/detail/comment/CYellowStar.png");
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
export const CListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
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
export const CUpdate = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  background-image: url("/boards/detail/comment/CUpdate.png");
  background-size: cover;
`;
export const CDelete = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("/boards/detail/comment/CDelete.png");
  background-size: cover;
`;
