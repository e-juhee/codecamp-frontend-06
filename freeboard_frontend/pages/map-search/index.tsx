import { ChangeEvent, useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap() {
  const [searchText, setSearchText] = useState("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0f8eaab205858289af49e81c538882e4&autoload=false&libraries=services,clusterer"; // 카카오맵이 로드되면 실행

    document.head.appendChild(script); // header에 script를 자식으로 추가한다.

    script.onload = () => {
      // script가 로드되면 실행
      window.kakao.maps.load(function () {
        // map이 만들어진 이후에 실행
        const mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.484979002116,
            126.89671615872463
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴 : 담아도 되고 안 담아도 된다.

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        const imageSrc = "/location.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(searchText, function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
              image: markerImage, // 마커이미지 설정
            });
            // // 결과값으로 받은 위치를 마커로 표시합니다
            // const marker = new window.kakao.maps.Marker({
            //   map: map,
            //   position: coords,
            // });
            marker.setMap(map);
            // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
            // marker.setMap(null);
            window.kakao.maps.event.addListener(
              map,
              "click",
              (mouseEvent: any) => {
                // 클릭한 위도, 경도 정보를 가져옵니다
                const latlng = mouseEvent.latLng;
                // 마커 위치를 클릭한 위치로 옮깁니다
                marker.setPosition(latlng);
                console.log(
                  "위도: " + latlng.getLat() + " / 경도: " + latlng.getLng()
                );
              }
            );
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            // const infowindow = new window.kakao.maps.InfoWindow({
            //   content:
            //     '<div style="width:150px;text-align:center;padding:6px 0;">어디지</div>',
            // });
            // infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [searchText]);

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>
      <input onChange={onChangeInput} />
    </>
  );
}
