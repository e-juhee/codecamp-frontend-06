import { KeyboardEvent, useState } from "react";

const HashTagPage = () => {
  //   const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState<string[]>([]);
  const onKeyUpHash = (event: KeyboardEvent) => {
    if (
      event.keyCode === 32 &&
      (event.target as HTMLInputElement).value !== " "
    ) {
      // 32: 스페이스바
      setHashArr([...hashArr, "#" + (event.target as HTMLInputElement).value]);
      (event.target as HTMLInputElement).value = "";
    }
  };
  return (
    <>
      <div>
        <span>
          {hashArr.map((el, idx) => (
            <span key={idx}>el</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
};

export default HashTagPage;
