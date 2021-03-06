import Head from "next/head";
export default function OpenGraphHeadPage() {
  // 제공해주는 입장
  return (
    <div>
      <Head>
        {/* meta 태그는 내 사이트를 알릴 때 사용된다. */}
        {/* og는 존재하는 것이 아니다. */}
        <meta property="og:title" content="나만의 사이트" />
        <meta
          property="og:description"
          content="나만의 사이트에 오신 것을 환영합니다"
        />
        <meta property="og:image" content="http://" />
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
    </div>
  );
}
