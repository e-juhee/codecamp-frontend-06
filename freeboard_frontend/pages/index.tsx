import Head from "next/head";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 700px;
  width: 100%;
  padding: 350px;
  margin: 0px auto;
  background-color: #f68eb2;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 620px;
  width: 50%;
  padding-bottom: 30px;
  background-color: #f68eb2;
`;

const Title = styled.div`
  font-size: 120px;
  font-family: "GmarketSansTTFBold";
  color: white;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 50px;
  margin: 10px 0;
  border: 3px solid white;
  border-radius: 10px;
  font-size: 25px;
  font-family: "GmarketSansTTFMedium";
  cursor: pointer;
  color: white;
  background-color: #f68eb2;
  &:hover {
    color: #f68eb2;
    background-color: white;
  }
`;

const Table = styled.table`
  width: 500px;
  height: 400px;
  background-image: url("/boards/mac-mokup.png");
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 100px;
`;
const Video = styled.video`
  width: 460px;
`;
const Footer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Blog = styled.div`
  color: #f68eb2;
`;

export default function Home() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/boards");
  };

  return (
    <>
      <Head>
        <title>쥐보드</title>
        <meta name="description" content="자유게시판 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <TitleWrapper>
          <Title>G보드</Title>
          <Button onClick={onClickMove}>FREEBOARD</Button>
          <Button onClick={onClickMove}>MARKET</Button>
        </TitleWrapper>
        <Table>
          <tr>
            <td height={"35px"}></td>
          </tr>
          <tr>
            <Video autoPlay muted loop>
              <source
                src="/boards/board-main-video.mov"
                type="video/mp4"
              ></source>
            </Video>
          </tr>
          <tr>
            <td height={"60px"}></td>
          </tr>
        </Table>
      </Wrapper>
      <Footer>
        <Blog>
          <a style={{ color: "#f68eb2" }} href="https://velog.io/@e_juhee">
            velog @e_jugee
          </a>
        </Blog>
      </Footer>
    </>
  );
}
