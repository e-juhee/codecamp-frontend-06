console.log("타입스크립트를 실행했어요!");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// const { ApolloServer, gql } = require('apollo-server'); // (1) 아래 형태로 변경
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput { # input데이터(프론트에서 전달 받는 데이터)는 type 대신 input으로 쓴다.
    writer: String
    title: String
    contents: String
  }
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    fetchBoards: [Board!] # type을 만들어줘야 한다. # 느낌표를 붙이면 필수값이 된다.
  }
  type Mutation {
    # createBoard(writer:String, title: String, contents:String): String # 연습용(example)
    createBoard(createBoardInput: CreateBoardInput!): String # 실제 사용(backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기
      const result = await Board.find();
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // parent : API가 여러개 있으면, API에서 다른 API를 요청할 일이 생긴다. 다른 API를 요청할 때 넣어줄 데이터
      // args : http 요청에 대한 정보들, 프론트로 받아오는 것들
      // context : header에 들어가는 요약 정보
      // info : API에 대한 기타 정보들
      // 데이터베이스에 접속해서 게시물 등록하기
      // Board가 BaseEntity를 상속받고 있어야 insert를 사용 가능하다.
      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer
        // title: args.createBoardInput.title
        // contents: args.createBoardInput.contents
      });

      /* 수정 */
      Board.update({ writer: "철수" }, { title: "제목2" });

      /* 삭제 방법 두가지 */
      Board.delete({ writer: "철수" });
      // Board.update({writer:"철수"}, {deletedAt: new Date()}); // soft-delete 방식

      return "게시물을 등록했습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // true로 지정하면 주소가 다른 브라우저에서도 api 활용이 가능해짐
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
    console.log("연결 성공!");
    // 백엔드 API를 오픈(listen : 24시간 동안 접속 가능하게 대기상태로 만들어주기)
    server.listen(4000).then(({ url }) => {
      // listen() 안에는 접속할 포트번호를 지정할 수 있다.
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => console.log(error, "연결 실패ㅜ"));
