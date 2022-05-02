import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6269ecf7a8255b002988d65e" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: "6269ecf7a8255b002988d65e" },

      /* 방법 1: refetch - api가 LIKE_BOARD 한번, FETCH_BOARD 한번 해서 총 두번 요청된다. */
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6269ecf7a8255b002988d65e" },
      //   },
      // ],

      optimisticResponse: {
        // API 응답이 오기 전에 일단 이 값을 보여주고,
        // 응답이 오면 진짜 값으로 바꿔준다!
        // 좋아요가 실패하면 이전 값으로 들어오게 된다.
        likeBoard: (data.fetchBoard.likeCount || 0) + 1,
      },

      /* 방법 2: 직접 cache를 수정해서 globalState를 바꿔줌, optimisticResponse를 같이 사용할 수 있다. */
      update(cache, { data }) {
        // data: likeBoard의 결과값
        // data는 likeBoard API의 response로 받는 값이다.
        cache.writeQuery({
          // 기존의 데이터를 직접 바꾼다.
          query: FETCH_BOARD,
          variables: { boardId: "6269ecf7a8255b002988d65e" }, // 위에서 useQuery 선언할 때 쓴 쿼리명과 variables를 그대로 똑같이 써야 한다.
          data: {
            // 조작할 것을 적는다. 여기서는 data를 조작한다.
            fetchBoard: {
              _id: "6269ecf7a8255b002988d65e",
              __typename: "Board", // 조건: 이 두개를 가지고 globalState에 저장된 것에서 찾아내기 때문에 id와 typename은 둘 다 꼭~ 입력해야 한다.
              // likeCount:10, // 요로케 입력하면 기존에 fetch해온 값을 무시하고 여기에서 입력한 10이 된다. (백엔드의 값과는 상관 없이 조작만 하는 것이다.)
              likeCount: data.likeBoard, // data.likeBoard : likeBoard의 결과이다.
            },
          },
        });
      },
    });
  };

  return (
    <>
      <h1>옵티미스틱UI</h1>
      <div>현재카운트(좋아요) : {data?.fetchBoard?.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </>
  );
}
