// import { useQuery, gql } from "@apollo/client";
// import styled from "@emotion/styled";

// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

// // const MyRow = styled.div`
// //   display: flex;
// // `;

// // const MyColumn = styled.div`
// //   /* width: 25%; */
// // `;

// export default function MapBoardPage() {
//   // const { data, refetch } = useQuery(FETCH_BOARDS);

//   return (
//     <>
//       {/* {data?.fetchBoards.map((el: any) => (
//         <MyRow key={el._id}>
//           <MyColumn>{el.number}</MyColumn>
//           <MyColumn>{el.title}</MyColumn>
//           <MyColumn>{el.writer}</MyColumn>
//         </MyRow>
//       ))} */}

//       {/* {[1, 2, 3].map((el) => (
//         <span onClick={onClickPage} id={String(el)} key={el}>
//           {el}
//         </span>
//       ))} */}

//       {/* <span onClick={onClickPage} id="2">
//         2
//       </span>
//       <span onClick={onClickPage} id="3">
//         3
//       </span> */}
//     </>
//   );
// }
