import { KeyboardEvent, MouseEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HashTagPage = () => {
  const [hashArr, setHashArr] = useState<string[]>([]);
  const onKeyUpHash = (event: KeyboardEvent) => {
    if (
      event.keyCode === 32 &&
      (event.target as HTMLInputElement).value !== " "
    ) {
      const str = "#" + (event.target as HTMLInputElement).value;
      let tempArr = [...hashArr];
      tempArr.push(str);
      tempArr = tempArr.filter(
        (el) => el !== "# " && el !== "#  " && el !== "#"
      );
      setHashArr(tempArr);
      console.log(tempArr);
      (event.target as HTMLInputElement).value = "";
    }
  };

  const onClickHash = (e: MouseEvent<HTMLButtonElement>) => {
    const prevArr = [...hashArr];
    prevArr.splice(Number((e.target as Element).id), 1);
    setHashArr(prevArr);
  };
  return (
    <>
      <div>
        <span>
          {hashArr.map((el, i) => (
            <button key={uuidv4()} onClick={onClickHash} id={String(i)}>
              {el}
            </button>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
};

export default HashTagPage;
