import {gql} from '@apollo/client'


export const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            boardAddress{zipcode}
            boardAddress{address}
            boardAddress{addressDetail}
            createdAt
            updatedAt
            deletedAt
            __typename
        }
    }
`
export  const LIKE_BOARD = gql`
    mutation likeBoard($boardId:ID!){
        likeBoard(boardId:$boardId)
    }
`
export    const DISLIKE_BOARD = gql`
    mutation dislikeBoard($boardId:ID!){
        dislikeBoard(boardId:$boardId)
    }
`