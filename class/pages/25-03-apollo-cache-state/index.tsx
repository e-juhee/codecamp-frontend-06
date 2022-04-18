import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(useMutation(DELETE_BOARD));
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  /* 무한 스크롤 형태의 페이지에서 등록, 삭제를 이렇게 많이 사용한다. 페이지네이션 형태의 화면에는 적합하지 않다. */
  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        // 요청하고 와서 cache를 직접 업데이트해줘 (update 아니고 refetch하면 refetch가 다시 가는 것이다.) / data: delete한 결과
        const deletedId = data.deleteBoard;
        // cache를 직접 수정한다.
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // id를 가져오려면 readField를 사용해야 한다.
              // prev: 삭제 전 현재 fetchBoards 객체의 상태
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId // el._id로는 사용이 안된다. readField에서 꺼내와야 한다.
              ); // 삭제된 것만 제외하기
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        // useQuery 결과를 구조분해할당 해서 받았던 것과 마찬가지로 {data}로 적는다.
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // create 전, 현재 상태
              return [data.createBoard, ...prev]; // 최신 글이 앞으로 온다. // 리턴한 내용으로 global state에 있는 fetchBoards가 수정된다.
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// function onClickAAA(aaa){

// }
// onClickAAA("철수")

// // const {name, age} = {name:"철수", age:13}
// function onClickAAA({name, age}){

// }
// onClickAAA({name: "철수", age: 13})

//  1. 구조분해 할당으로 함수 파라미터 받기
//   function onClickAAA({ name, age, school }){
//     console.log(name)
//   }

//   const child = {
//     name: "철수",
//     age: 13,
//     school: "다람쥐초등학교"
//   }
//   onClickAAA(child)

// const name = "철수";
// const age = 13;
// const school = "다람쥐초등학교";
// onClickAAA({
//   name: name,
//   age: age,
//   school: school,
// });

//   2. 안좋은 옛날 방식
//   function onClickAAA(name, age, school){
//     console.log(name)
//   }

//   const name: "철수"
//   const age: 13
//   const school: "다람쥐초등학교"
//   onClickAAA(name, school)
