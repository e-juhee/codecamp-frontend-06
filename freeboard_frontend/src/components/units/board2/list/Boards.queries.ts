import {gql} from '@apollo/client'


export const FETCH_BOARDS = gql`
query fetchBoards{
    fetchBoards{
        _id
        writer
        title
        likeCount
        images
        createdAt
    }
}
`
// export const FETCH_BOARD = gql`
// query fetchBoard($boardId:ID!){
//     fetchBoard(boardId:$boardId){
//           _id
//           writer
//           title
//           contents
//           youtubeUrl
//           likeCount
//           dislikeCount
//           boardAddress{zipcode}
//           boardAddress{address}
//           boardAddress{addressDetail}
//           createdAt
//           updatedAt
//           deletedAt
//           __typename
//         }
// }
// `