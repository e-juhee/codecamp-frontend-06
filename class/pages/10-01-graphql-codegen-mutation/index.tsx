// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

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
  const [callApi] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents }, // input창을 만들고 onChange & state 이용하면 입력값을 받을 수 있다
    }); // graphql-api 방식

    // result.data?.createBoard?.message //타입을 추가하면 뭐가 있는지 자동완성으로 볼 수 있다.
    console.log(data);
    console.log(result);
    console.log(result.data?.createBoard?.message); // 결과로 찍힌 console을 확인해서 키값을 알맞게 적어줘야 한다.
    setData(result.data?.createBoard?.message || ""); // 형식이 string으로 자동 타입 지정 되었기 때문에 없을 수도 있어서 || "" 안하면 에러남.
    // if(result.data?.createBoard?.message) setData(result.data?.createBoard?.message) //위와 똑같은 기능
  };

  const onChangeWriter = (event: any) => {
    setMyWriter(event.target.value);
  };
  const onChangeTitle = (event: any) => {
    setMyTitle(event.target.value);
  };
  const onChangeContents = (event: any) => {
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
