console.log("타입스크립트를 실행했어요!");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.63.124.189",
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
  })
  .catch((error) => console.log(error, "연결 실패ㅜ"));
