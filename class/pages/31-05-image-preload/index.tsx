import { useEffect, useRef, useState } from "react";

export default function ImagePreload() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 이미지 프리로드 버튼을 누르지 않아도, mount 되면 바로 이미지를 다운로드 받고 있다.
    // 체감속도가 훨씬 빠르다.
    // 모든 사진에 프리로드를 거는 것은 낭비이다. 필요한 부분에만 사용한다.
    const img = new Image();
    img.src =
      "https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg";
    img.onload = () => {
      setImgTag(img); // 이미지 태그 자체를 저장한다. <img src="~~~ />
    };
  }, []);
  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
    //   document.getElementById("aaa")?.appendChild(imgTag) // 같은 id가 여러개일 수도 있다. react에서는 useRef를 사용한다.
  };
  const onClickLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 프리 로드</button>
      =============================
      {isLoaded && (
        <img src="https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg"></img>
      )}
      <button onClick={onClickLoad}>이미지 일반 로드</button>
    </>
  );
}
