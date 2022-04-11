import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
/* import 형태로 변경 */
// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from "apollo-server";

/* 1. 타입 */
// graphQL 타입을 적어준다.
const typeDefs = gql`
  type Query {
    # 리턴 타입을 적어준다.
    # !를 붙이면 필수값이 된다.
    # 값이 배열 안에 들어있으면 [] 안에 넣어준다.
    fetchBoards: [Board!]
  }
  # 타입을 만들어서 지정해 줄 수 있다.
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Mutation {
    # 받아올 데이터의 타입(요청시 입력값)과 리턴할 데이터의 타입을 적는다.
    createBoard(createBoardInput: CreateBoardInput!): String # (backend06)
  }
  # input데이터(프론트에서 전달 받는 데이터)는 type이 아닌 input으로 쓴다.
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }
`;

/* 2. API */
const resolvers = {
  /* 조회 */
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      return result;
    },
  },
  /* 등록 */
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // parent : API에서 다른 API를 요청한 경우, 넣어준 데이터
      // args : 받아온 데이터. 프론트를 통해서 받아온다.
      // context : header에 들어가는 요약 정보, http 요청에 대한 정보들
      // info : API에 대한 기타 정보들
      // Board가 BaseEntity를 상속받고 있어야 insert를 사용 가능하다.
      await Board.insert({
        ...args.createBoardInput,
      });

      /* 수정 */
      // 앞에 조건, 뒤에 변경 내용을 적어준다.
      Board.update({ writer: "철수" }, { title: "제목2" });

      /* 삭제 */
      Board.delete({ writer: "철수" });
      // Board.update({writer:"철수"}, {deletedAt: new Date()}); // soft-delete 방식

      return "게시물을 등록했습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  // true로 지정하면 주소가 다른 브라우저에서도 api 활용이 가능해짐
  // cors: {
  //   origin: 'http://naver.com' // 주소를 명시하면 적은 주소만 허용
  // },
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5022,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    // 연결에 성공하면 실행
    console.log("연결 성공!");
    // 백엔드 API를 오픈( = listen : 24시간 동안 접속 가능하게 대기상태로 만들어준다.)
    // listen() 안에는 접속할 포트번호를 지정할 수 있다.
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => console.log(error, "연결 실패ㅜ"));
