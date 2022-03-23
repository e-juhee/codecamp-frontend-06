import {gql} from '@apollo/client'

export const CREATE_BOARD = gql`
mutation createBoard($createBoardInput:CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
        _id
        writer
        title
        contents
        youtubeUrl
        likeCount
        dislikeCount
        images
        boardAddress{zipcode, address, addressDetail}
        createdAt
        updatedAt  
    }
}
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput : UpdateBoardInput!,  $password: String, $boardId: ID! ) {
        updateBoard(updateBoardInput : $updateBoardInput, password: $password, boardId : $boardId){
                _id
        }
    }
`


// mutation {
//     updateBoard(updateBoardInput:{
//       title:"수정1",
//       contents:"수정2",
//       youtubeUrl:"수정3",
//       boardAddress:{zipcode:"수정4", address:"수정5", addressDetail:"수정6"}
//     }
//         password:"1234"
//       boardId:"623b036fa8255b0029883d5b"
//     ){
//       _id
//       writer
//       title
//       contents
//       youtubeUrl
//       likeCount
//       dislikeCount
//       images
//       boardAddress{zipcode address addressDetail}
      
//     }
//   }