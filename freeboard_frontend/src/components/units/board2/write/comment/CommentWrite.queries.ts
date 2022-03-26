import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;
//   createBoardCommentInput:{
//   writer: "주히"
//     password: "1234"
//     contents:"댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다"
//     rating: 3
// }
// boardId: "623ea339a8255b00298841eb"

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      createdAt
      updatedAt
    }
  }
`;

//   updateBoardCommentInput:{
//   contents:"수정댓글입니다. 수정댓글입니다. 수정댓글입니다."
//     rating: 4
// }
// password:"1234"
// boardCommentId: "623ebeb5a8255b0029884224"){
