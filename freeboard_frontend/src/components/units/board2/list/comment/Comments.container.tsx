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

  return <CommentsUI data={data} />;
}
