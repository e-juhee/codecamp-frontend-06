import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  // const router = useRouter();
  // const onClickMoveToMap = () => {
  //   router.push("./map1");
  // };
  return (
    <>
      <button>
        <Link href="./map1">
          <a>이동하기</a>
        </Link>
      </button>
      {/* <button onClick={onClickMoveToMap}>라우터로이동</button> */}
    </>
  );
}
