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
  // const [myWriter, setMyWriter] = useState("");
  // const [myTitle, setMyTitle] = useState("");
  // const [myContents, setMyContents] = useState("");

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);
  console.log(data);
  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { ...inputs },
      // variables: {
      //   writer: inputs.writer,
      //   title: inputs.title,
      //   contents: inputs.contents,
      // },
    }); // graphql-api 방식
    console.log(result);
    setData(result.data.createBoard.message); // 결과로 찍힌 console을 확인해서 키값을 알맞게 적어줘야 한다.
  };

  const onChangeInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value, // event.target.id 형태는 키로 쓸 수 없다. '.'으로 연결되면 객체의 키를 의미하기 때문이다.
    });
  };

  return (
    <>
      {/* <div>{data}</div> */}
      작성자: <input type="text" id="writer" onChange={onChangeInput} />
      <br />
      제목: <input type="text" id="title" onChange={onChangeInput} />
      <br />
      내용: <input type="text" id="contents" onChange={onChangeInput} />
      <br />
      <button onClick={callGraphqlApi}>GraphQL-API 요청하기</button>
    </>
  );
}
