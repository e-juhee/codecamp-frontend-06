// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "juhee", title: "제목", contents: "내용") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get('https://koreanjson.com/posts/1') //rest-api 방식
    const result = await callApi(); // graphql-api 방식
    console.log(result);
    // console.log(result.data.title) //rest-api 방식
    setData(result.data.createBoard.message); // 결과로 찍힌 console을 확인해서 키값을 알맞게 적어줘야 한다.
  };

  return (
    <>
      <button onClick={callGraphqlApi}>GraphQL-API 요청하기</button>
      <div>{data}</div>
    </>
  );
}
