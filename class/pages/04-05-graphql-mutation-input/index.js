// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // input  state
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);
  console.log(data);
  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents }, // input창을 만들고 onChange & state 이용하면 입력값을 받을 수 있다
    }); // graphql-api 방식
    console.log(result);
    setData(result.data.createBoard.message); // 결과로 찍힌 console을 확인해서 키값을 알맞게 적어줘야 한다.
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <>
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={callGraphqlApi}>GraphQL-API 요청하기</button>
    </>
  );
}
