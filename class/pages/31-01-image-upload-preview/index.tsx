import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 배열도 옵셔널체이닝을 쓸 수 있다.
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    const fileReader = new FileReader(); // JS의 내장기능이다.
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // file을 다 읽으면 읽어진 결과물이 data로 들어오고 이 함수가 실행된다.
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result); // file을 url 형태로 읽은 결과물이다.
        setImageUrl(data.target?.result);
      }
    };
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </div>
  );
}
