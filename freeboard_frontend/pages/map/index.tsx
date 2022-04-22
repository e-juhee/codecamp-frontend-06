// import { ChangeEvent, useEffect, useState, useRef } from "react";

// declare const window: typeof globalThis & {
//   kakao: any;
// };

// // @ts-ignore
// export default function KakaoMapPage() {
//   const [inputKeyword, setInputKeyword] = useState("하갈동");

//   const onChangeInputKeyword = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputKeyword(e.target.value);
//   };
//   const placesList = useRef();
//   const menu_wrap = useRef();
//   useEffect(() => {
//     const script = document.createElement("script"); // <script></script>
//     script.src =
//       "//dapi.kakao.com/v2/maps/sdk.js?appkey=0f8eaab205858289af49e81c538882e4&autoload=false&libraries=services,clusterer,drawing"; // 카카오맵이 로드되면 실행
//     document.head.appendChild(script); // header에 script를 자식으로 추가한다.

//     script.onload = () => {
//       // script가 로드되면 실행
//       window.kakao.maps.load(function () {
//         // map이 만들어진 이후에 실행
//         let markers: any = [];

//         const mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
//         const mapOption = {
//           // 지도를 생성할 때 필요한 기본 옵션
//           center: new window.kakao.maps.LatLng(
//             37.484979002116,
//             126.89671615872463
//           ), // 지도의 중심좌표.
//           level: 3, // 지도의 레벨(확대, 축소 정도)
//         };
//         const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴 : 담아도 되고 안 담아도 된다.

//         /* 검색 추가 */
//         // 장소 검색 객체를 생성합니다
//         const ps = new window.kakao.maps.services.Places();
//         // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
//         const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

//         // 키워드로 장소를 검색합니다
//         // searchPlaces();

//         // 키워드 검색을 요청하는 함수입니다
//         const searchPlaces = () => {
//           // const keyword = inputKeyword;
//           console.log(inputKeyword);
//           if (!inputKeyword.replace(/^\s+|\s+$/g, "")) {
//             alert(inputKeyword);
//             return false;
//           }

//           // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
//           ps.keywordSearch(inputKeyword, placesSearchCB);
//         };

//         // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
//         function placesSearchCB(data, status, pagination) {
//           if (status === window.kakao.maps.services.Status.OK) {
//             // 정상적으로 검색이 완료됐으면
//             // 검색 목록과 마커를 표출합니다
//             displayPlaces(data);

//             // 페이지 번호를 표출합니다
//             displayPagination(pagination);
//           } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
//             alert("검색 결과가 존재하지 않습니다.");
//           } else if (status === window.kakao.maps.services.Status.ERROR) {
//             alert("검색 결과 중 오류가 발생했습니다.");
//           }
//         }

//         // 검색 결과 목록과 마커를 표출하는 함수입니다
//         function displayPlaces(places: any) {
//           const listEl = placesList;

//           const menuEl = menu_wrap;

//           const fragment = document.createDocumentFragment();
//           const bounds = new window.kakao.maps.LatLngBounds();
//           let listStr = "";

//           // 검색 결과 목록에 추가된 항목들을 제거합니다
//           removeAllChildNods(listEl);

//           // 지도에 표시되고 있는 마커를 제거합니다
//           removeMarker();

//           for (let i = 0; i < places.length; i++) {
//             // 마커를 생성하고 지도에 표시합니다
//             const placePosition = new window.kakao.maps.LatLng(
//               places[i].y,
//               places[i].x
//             );
//             const marker = addMarker(placePosition, i, "dd");
//             const itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

//             // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
//             // LatLngBounds 객체에 좌표를 추가합니다
//             bounds.extend(placePosition);

//             // 마커와 검색결과 항목에 mouseover 했을때
//             // 해당 장소에 인포윈도우에 장소명을 표시합니다
//             // mouseout 했을 때는 인포윈도우를 닫습니다
//             (function (marker, title) {
//               window.kakao.maps.event.addListener(
//                 marker,
//                 "mouseover",
//                 function () {
//                   displayInfowindow(marker, title);
//                 }
//               );

//               window.kakao.maps.event.addListener(
//                 marker,
//                 "mouseout",
//                 function () {
//                   infowindow.close();
//                 }
//               );

//               itemEl.onmouseover = function () {
//                 displayInfowindow(marker, title);
//               };

//               itemEl.onmouseout = function () {
//                 infowindow.close();
//               };
//             })(marker, places[i].place_name);

//             fragment.appendChild(itemEl);
//           }

//           // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
//           listEl.appendChild(fragment);
//           menuEl.scrollTop = 0;

//           // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
//           map.setBounds(bounds);
//         }

//         // 검색결과 항목을 Element로 반환하는 함수입니다
//         function getListItem(index, places) {
//           const el = document.createElement("li");
//           let itemStr =
//             '<span class="markerbg marker_' +
//             (index + 1) +
//             '"></span>' +
//             '<div class="info">' +
//             "   <h5>" +
//             places.place_name +
//             "</h5>";

//           if (places.road_address_name) {
//             itemStr +=
//               "    <span>" +
//               places.road_address_name +
//               "</span>" +
//               '   <span class="jibun gray">' +
//               places.address_name +
//               "</span>";
//           } else {
//             itemStr += "    <span>" + places.address_name + "</span>";
//           }

//           itemStr +=
//             '  <span class="tel">' + places.phone + "</span>" + "</div>";

//           el.innerHTML = itemStr;
//           el.className = "item";

//           return el;
//         }

//         // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
//         function addMarker(position, idx, title) {
//           const imageSrc =
//             "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png"; // 마커 이미지 url, 스프라이트 이미지를 씁니다
//           const imageSize = new window.kakao.maps.Size(36, 37); // 마커 이미지의 크기
//           const imgOptions = {
//             spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
//             spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
//             offset: new window.kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
//           };
//           const markerImage = new window.kakao.maps.MarkerImage(
//             imageSrc,
//             imageSize,
//             imgOptions
//           );
//           const marker = new window.kakao.maps.Marker({
//             position: position, // 마커의 위치
//             image: markerImage,
//           });

//           marker.setMap(map); // 지도 위에 마커를 표출합니다
//           markers.push(marker); // 배열에 생성된 마커를 추가합니다

//           return marker;
//         }

//         // 지도 위에 표시되고 있는 마커를 모두 제거합니다
//         function removeMarker() {
//           for (let i = 0; i < markers.length; i++) {
//             markers[i].setMap(null);
//           }
//           markers = [];
//         }

//         // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
//         function displayPagination(pagination: any) {
//           const paginationEl = document.getElementById("pagination");
//           const fragment = document.createDocumentFragment();
//           let i;

//           // 기존에 추가된 페이지번호를 삭제합니다
//           while (paginationEl.hasChildNodes()) {
//             paginationEl.removeChild(paginationEl.lastChild);
//           }

//           for (i = 1; i <= pagination.last; i++) {
//             const el = document.createElement("a");
//             el.href = "#";
//             el.innerHTML = i;

//             if (i === pagination.current) {
//               el.className = "on";
//             } else {
//               el.onclick = (function (i) {
//                 return function () {
//                   pagination.gotoPage(i);
//                 };
//               })(i);
//             }

//             fragment.appendChild(el);
//           }
//           paginationEl.appendChild(fragment);
//         }

//         // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
//         // 인포윈도우에 장소명을 표시합니다
//         function displayInfowindow(marker, title) {
//           const content =
//             '<div style="padding:5px;z-index:1;">' + title + "</div>";

//           infowindow.setContent(content);
//           infowindow.open(map, marker);
//         }

//         // 검색결과 목록의 자식 Element를 제거하는 함수입니다
//         function removeAllChildNods(el) {
//           while (el.hasChildNodes()) {
//             el.removeChild(el.lastChild);
//           }
//         }
//         /* 검색 추가 끝 */
//         const imageSrc = "/location.png"; // 마커이미지의 주소입니다
//         const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
//         const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

//         // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
//         const markerImage = new window.kakao.maps.MarkerImage(
//           imageSrc,
//           imageSize,
//           imageOption
//         );
//         const markerPosition = new window.kakao.maps.LatLng(
//           37.484979002116,
//           126.89671615872463
//         ); // 마커가 표시될 위치입니다

//         // 마커를 생성합니다
//         const marker = new window.kakao.maps.Marker({
//           position: markerPosition,
//           image: markerImage, // 마커이미지 설정
//         });
//         marker.setMap(map);
//         // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
//         // marker.setMap(null);
//         window.kakao.maps.event.addListener(map, "click", (mouseEvent: any) => {
//           // 클릭한 위도, 경도 정보를 가져옵니다
//           const latlng = mouseEvent.latLng;
//           // 마커 위치를 클릭한 위치로 옮깁니다
//           marker.setPosition(latlng);
//           console.log(
//             "위도: " + latlng.getLat() + " / 경도: " + latlng.getLng()
//           );
//         });
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div>
//         {typeof window !== "undefined" ? (
//           <>
//             {" "}
//             <div
//               id="map"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             ></div>
//             <div ref={menu_wrap} id="menu_wrap">
//               <div>
//                 <div>
//                   <form onSubmit={searchPlaces}>
//                     {/* <form> */}
//                     키워드 :{" "}
//                     <input
//                       type="text"
//                       ref={inputKeyword}
//                       id="keyword"
//                       value={inputKeyword}
//                       onChange={onChangeInputKeyword}
//                     />
//                     <button type="submit">검색하기</button>
//                   </form>
//                 </div>
//               </div>
//               <hr />
//               <ul ref={placesList} id="placesList"></ul>
//               <div ref={pagination} id="pagination"></div>
//             </div>
//           </>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </>
//   );
// }
