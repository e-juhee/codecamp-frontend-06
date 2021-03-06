import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState(""); // 이미지 주소 초기값

  //   setDogUrl(result.data.message); // useEffect에 안 넣으면 실행되자마자 setState 요청이 가고 리렌더 되고 또 요청이 가고 리렌더되고 ~

  useEffect(() => {
    // 페이지에 접속하자마자 axios가 실행되도록 useEffect를 사용한다.
    // async는 여기는 안 붙는다. 그래서 아무 함수나 만들어주고 거기에 async 붙여서 함수 호출
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message); // 한번만 실행된다. 이렇게 해도 리렌더가 한번 더 실행되긴 한다.
    };
    aaa();
  }, []);

  return (
    <div>
      <div>오픈 API 연습</div>
      <img src={dogUrl} />
    </div>
  );
}
