import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./Comments.queries";
import CommentsUI from "./Comments.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Comments() {
  /*FETCH_BOARD_COMMENTS*/
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log("<<COMMENTS>>");
  console.log(data);
  console.log(data?.fetchBoardComments);

  const isStar1 = true;
  const isStar2 = true;
  const isStar3 = true;
  const isStar4 = true;
  const isStar5 = true;

  return (
    <CommentsUI
      data={data}
      isStar1={isStar1}
      isStar2={isStar2}
      isStar3={isStar3}
      isStar4={isStar4}
      isStar5={isStar5}
    />
  );
}
