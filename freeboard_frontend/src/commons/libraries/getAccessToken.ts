import { GraphQLClient, gql } from "graphql-request";

// accessToken을 재발급해주는 쿼리
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  /* 2-1. refreshToken으로 accessToken을 재발급 받는다. */
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend06.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    ); // endpoint를 넣어준다. https로 넣어줘야 한다!!!

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN); // 쿼리를 넣어준다.
    // console.log(result);
    const newAccessToken = result.restoreAccessToken.accessToken;
    // console.log(newAccessToken);
    // console.log(newAccessToken + " dddddddd");
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }

  // else랑 elseif로 해서 리턴값 변경하기
}
