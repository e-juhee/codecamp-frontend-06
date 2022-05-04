import { useRouter } from "next/router";
// import Head from "next/head";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardDetailPage(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myBoardData?.title} />
        <meta property="og:description" content={props.myBoardData?.contents} />
        <meta property="og:image" content={props.myBoardData?.images[0]} />
      </Head>
      <div>
        안녕하세요. 게시글 상세페이지입니다. 게시글 ID는 {router.query.boardId}
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
    query fetchBoard($boardId : ID!)){
        fetchBoard(boardId:$boardId){
          title
          contents
          images

        }
    }

`;

// 이 페이지는 서버사이드 렌더링을 한다는 것을 알 수 있다.
// 함수 이름 맘대로 바꾸면 안된다.
// 페이지에서만 쓸 수 있다. (컴포넌트에서 쓸 수 없다.)
export const getServerSideProps = async (context) => {
  // 데이터를 요청할 것!!!
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    {
      boardId: context.query.boardId,
    }
  ); // 엔드포인트

  return {
    props: {
      data: {
        myBoardData: {
          title: result.fetchBoard.title,
          contents: result.fetchBoard.contents,
          images: result.fetchBoard.images,
        },
      },
    },
  };
};
