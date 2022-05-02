// 31-02로 보기 (등록 API 요청도 같이 있음)
import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // 파일이 없을 수도 있으니 옵셔널 체이닝 사용(배열도 옵셔널체이닝을 쓸 수 있다.)
    if (!file) {
      // 파일 검증
      alert("파일이 없습니다.");
      return;
    }

    const fileReader = new FileReader(); // JS의 내장기능이다.
    fileReader.readAsDataURL(file);
    // blob 타입의 file을 url 형태로 만든다. 이것을 DB에 바로 저장할 수 있지만 크기가 너무 크니까 ㄴㄴ..
    fileReader.onload = (data) => {
      // file을 다 읽으면 읽어진 결과물이 data로 들어오고 이 함수가 실행된다.
      if (typeof data.target?.result === "string") {
        // useState 초기값으로 string("")을 넣었기 때문에 이 if문을 넣지 않으면 undefined나 null일 경우 때문에 에러가 난다.
        console.log(data.target?.result); // file을 url 형태로 읽은 결과물이다.
        setImageUrl(data.target?.result);
      }
    };
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      {/* imageUrl에 미리보기 주소가 들어간다. */}
      <img src={imageUrl} />
    </div>
  );
}
