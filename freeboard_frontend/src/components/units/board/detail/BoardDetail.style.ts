import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin:100px auto;
  padding: 80px 100px 100px 100px;
  border: 1px solid gray;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-bottom: 20px;
  border-bottom: 1px solid #BDBDBD;
`
export const ProfileImage = styled.div`
  width: 46.67px;
  height: 46.67px;
  background-image: url("/boards/detail/ProfileImage.png");
  background-size: cover; 
`
export const ProfileWrapper = styled.div`
  padding-left: 16.67px;
  font-family: 'Noto Sans CJK KR';
  font-size: 36px;
  font-weight: 700;
`

export const Writer = styled.div`
  height: 36px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`
export const CreateDate = styled.div`
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: #828282;
  line-height: 24px;

`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-left: 410px;
  padding-bottom: 36.67px;
`
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
`
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 74.67px;
  padding-right: 5px;
`
export const LinkIcon = styled.div`
  width: 26.67px;
  height: 13.33px;
  background-image: url("/boards/detail/LinkIcon.png");
  background-size: cover; 
  cursor: pointer;
`
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
`
export const LocationIconInner = styled.div`
  width: 6.67px;
  height: 6.67px;
  padding-bottom: 14px;
  background-image: url("/boards/detail/LocationIconInner.png");
  background-size: auto; 
  background-repeat: no-repeat;
`
export const Title = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 40px;
  font-family: 'Noto Sans CJK KR';
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
`
export const Image = styled.div`
  width: 996px;
  height: 480px;
  margin-bottom: 40px;
  background-image: url("/boards/detail/Image.png");
  background-size: auto; 
  background-repeat: no-repeat;
`
export const Contents = styled.div`
font-size: 16px;
line-height: 24px;
margin-bottom: 120px;
`
export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 160px;
`
export const Video = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 486px;
  height: 240px;
  background-image: url("/boards/detail/Video.png");
  background-size: cover; 
  background-repeat: no-repeat;
`
export const PlayButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-image: url("/boards/detail/Eclipse.png");
  background-size: auto; 
  background-repeat: no-repeat;
  cursor: pointer;
`
export const PlayButtonInner = styled.div`
  width: 20px;
  height: 20px;
  margin-left:8px;
  background-image: url("/boards/detail/Play.png");
  background-size: auto;
  background-repeat: no-repeat;
`
export const LikeWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-bottom: 80px;
`
export const Like = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 40px;
height: 51px;
margin: auto 20px;
`
export const LikeIcon = styled.div`
  width: 20px;
  height: 18px;
  background-image: url("/boards/detail/Like.png");
  background-size: auto; 
  background-repeat: no-repeat;
  cursor: pointer;
`
export const DisLikeIcon = styled.div`
  width: 20px;
  height: 18px;
  background-image: url("/boards/detail/DisLike.png");
  background-size: auto; 
  background-repeat: no-repeat;
  cursor: pointer;
`
export const LikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #FFD600;

`
export const DisLikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #828282;
`
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 100px;
  border-top: 1px solid #BDBDBD;
`
export const Button = styled.button`
  width: 179px;
  height: 45px;
  margin: auto 12px;
  background: #FFFFFF;
  border: 1px solid #BDBDBD;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`
