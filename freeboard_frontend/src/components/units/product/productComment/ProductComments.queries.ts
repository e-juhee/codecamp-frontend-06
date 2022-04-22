import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      # useditem {
      #   _id
      #   # name
      #   remarks
      #   contents
      #   price
      # }
      user {
        name
        picture
      }
      createdAt
    }
  }
`;
