import axios from "axios";
import { resolve } from "node:path/win32";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles";

export default function CallbackPromiseAsyncawaitPage() {
  const [callback, setCallback] = useState([""]);
  const [promise, setPromise] = useState([""]);
  const [async, setAsync] = useState([""]);
  const onClickCallback = () => {
    const xml1 = new XMLHttpRequest();
    xml1.open("get", "http://numbersapi.com/random?min=1&max=200");
    xml1.send();
    xml1.addEventListener("load", (res) => {
      const num = (res.target as XMLHttpRequest).response.split("")[0];

      const xml2 = new XMLHttpRequest();
      xml2.open("get", `http://koreanjson.com/posts/${num}`);
      xml2.send();
      xml2.addEventListener("load", (res) => {
        const postRes = (res.target as XMLHttpRequest).response;
        const userId = JSON.parse(postRes).UserId;

        const xml3 = new XMLHttpRequest();
        xml3.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        xml3.send();
        xml3.addEventListener("load", (res) => {
          const posts = JSON.parse((res.target as XMLHttpRequest).response);
          setCallback(posts);
        });
      });
    });
    setAsync([""]);
    setPromise([""]);
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split("")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res.data);
        setPromise(res.data);
      });
    setCallback([""]);
    setAsync([""]);
  };

  const onClickAsyncawait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split("")[0];
    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;
    const res3 = await axios.get(
      `http://koreanjson.com/posts?userId=${userId}`
    );
    const posts = res3.data;
    setAsync(posts);
    setCallback([""]);
    setPromise([""]);
  };
  return (
    <>
      결과: <button onClick={onClickCallback}>Callback</button>
      <br />
      결과: <button onClick={onClickPromise}>Promise</button>
      <br />
      결과: <button onClick={onClickAsyncawait}>Async/Await</button>
      {callback[0] && <h1>Callback</h1>}
      {callback[0] &&
        callback.map((el: any) => (
          <S.Wrapper key={uuidv4()}>
            <S.Title>{el.title}</S.Title>
            <S.Writer>작성자ID : {el.UserId}</S.Writer>
            <S.Content>{el.content}</S.Content>
          </S.Wrapper>
        ))}
      {promise[0] && <h1>Promise</h1>}
      {promise[0] &&
        promise.map((el: any) => (
          <S.Wrapper key={uuidv4()}>
            <S.Title>{el.title}</S.Title>
            <S.Writer>작성자ID : {el.UserId}</S.Writer>
            <S.Content>{el.content}</S.Content>
          </S.Wrapper>
        ))}
      {async[0] && <h1>Async/Await</h1>}
      {async[0] &&
        async.map((el: any) => (
          <S.Wrapper key={uuidv4()}>
            <S.Title>{el.title}</S.Title>
            <S.Writer>작성자ID : {el.UserId}</S.Writer>
            <S.Content>{el.content}</S.Content>
          </S.Wrapper>
        ))}
    </>
  );
}
