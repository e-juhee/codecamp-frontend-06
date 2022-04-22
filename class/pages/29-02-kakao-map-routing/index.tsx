// import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  // const router = useRouter();
  // const onClickMoveToMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  // };
  return (
    <>
      {/* <button onClick={onClickMoveToMap}>button: 맵으로 이동하기</button> */}
      {/* <a href="/29-03-kakao-map-routed">a: 맵으로 이동하기</a> <br /> */}
      <Link href="/29-03-kakao-map-routed">
        <a>Link: 맵으로 이동하기</a>
      </Link>
    </>
  );
}
