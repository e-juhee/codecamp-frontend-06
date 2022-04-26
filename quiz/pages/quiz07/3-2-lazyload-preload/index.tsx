import { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazy-load";
import { v4 as uuidv4 } from "uuid";

export default function LazyLoadPreLoadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/lazyLoad/image0.png";
    img.onload = () => {
      setImgTag(img); //
    };
  }, []);
  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <>
      <h1>PreLoad</h1>
      <button onClick={onClickPreload}>이미지 보여주기</button>
      <div ref={divRef}></div>
      <hr />
      <h1>LazyLoad</h1>
      <div>
        {new Array(10).fill(0).map((_, i) => (
          <div key={uuidv4()}>
            <div className="filler" />
            <LazyLoad height={500}>
              <img src={`/lazyLoad/image${i}.png`} />
            </LazyLoad>
            <div className="filler" />
          </div>
        ))}
      </div>
    </>
  );
}
