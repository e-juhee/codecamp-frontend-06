import { DataSource } from "typeorm";
import { Product } from "./Product";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }
  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }
  type Product {
    _id: String
    seller: String
    name: String
    detail: String
    price: Int
    createdAt: String
    deletedAt: String
    isDelete: Boolean
  }
  type Query {
    fetchProducts: [Product]
    fetchProduct(productId: String): [Product]
  }
  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): String
    updateProduct(
      productId: String
      updateProductInput: UpdateProductInput!
    ): String
    deleteProduct(productId: String): String
  }
`;

const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await Product.find({ where: { isDelete: false } });
      return result;
    },
    fetchProduct: async (_: any, args: any) => {
      const result = await Product.find({
        where: { _id: args.productId, isDelete: false },
      });
      return result;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      return "상품이 등록되었습니다.";
    },
    updateProduct: async (_: any, args: any) => {
      await Product.update(
        { _id: args.productId },
        { ...args.updateProductInput }
      );
      return "수정이 완료었습니다.";
    },
    deleteProduct: async (_: any, args: any) => {
      await Product.update(
        { _id: args.productId },
        { deletedAt: new Date(), isDelete: true }
      );
      return "삭제되었습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

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
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => console.log(error, "연결 실패ㅜ"));
