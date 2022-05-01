import { useEffect, useState } from "react";
import styled from "@emotion/styled";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IMapProps {
  address: string;
}
const PositionXY = styled.div`
  border: none;
  box-shadow: 0px 3px 10px skyblue;
  height: 40px;
  border-radius: 20px;
  width: 200px;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
  position: relative;
  left: 550px;
  bottom: 280px;
`;
export default function KakaoMapPage(props: IMapProps) {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(true);
  }, [props.address]);

  useEffect(() => {
    if (!isLoad) return;
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=733d0a29ec73b8803266c00fc97055a5&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4906332, 126.9071741), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        const geocoder = new window.kakao.maps.services.Geocoder();
        const mapTypeControl = new window.kakao.maps.MapTypeControl();

        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
        geocoder.addressSearch(
          `${props.address}`,
          function (result: { x: any; y: any }[], status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              let message = `X:${result[0].y.slice(0, 9)}/`;
              message += `     Y:${result[0].x.slice(0, 9)}`;

              const resultDiv = document.getElementById("clickLatlng");

              if (resultDiv?.innerHTML) {
                resultDiv.innerHTML = message;
              }

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `위치 : ${props.address}`,
                // ,'<div style="width:150px;text-align:center;padding:6px 0;">Here!</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);
  return (
    <>
      <div>
        <div id="map" style={{ width: "470px", height: "370px" }}></div>
        <PositionXY id="clickLatlng"> </PositionXY>
      </div>
    </>
  );
}
