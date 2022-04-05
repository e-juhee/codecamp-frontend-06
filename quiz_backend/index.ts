import { DataSource } from "typeorm";
import { Product } from "./Product";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5022,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Product],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결 성공!");
  })
  .catch((error) => console.log(error, "연결 실패ㅜ"));
