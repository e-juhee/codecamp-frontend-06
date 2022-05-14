import CommentList from "../../src/components/commons/comment/list/CommentList.container";

export default function commentPage() {
  // 1. 댓글 배열 (아래는 가데이터)
  const commentList = [
    {
      _id: "627b9d6ba8255b002989034e",
      contents: "댓글입니다. 3",
      user: {
        name: "code.camp2023",
      },
      createdAt: "2022-05-11T11:26:35.883Z",
      likeCounts: 5,
      replyCounts: 0,
    },
    {
      _id: "627b9d67a8255b002989034d",
      contents: "댓글입니다. 2",
      user: {
        name: "주희",
      },
      createdAt: "2022-05-07T11:26:31.361Z",
      likeCounts: 4,
      replyCounts: 1,
    },
    {
      _id: "627b9d63a8255b002989034c",
      contents: "댓글입니다. 1",
      user: {
        name: "주희",
      },
      createdAt: "2022-05-01T11:26:27.637Z",
      likeCounts: 7,
      replyCounts: 2,
    },
  ];

  // 2. 대댓글을 조회하는 함수 (아래 return값은 가데이터)
  const fetchReply = (commentId: string) => {
    if (commentId === "627b9d63a8255b002989034c")
      return [
        {
          _id: "627b9d74a8255b002989034a",
          contents: "대댓글입니다. 1-2",
          user: {
            name: "주희",
          },
          createdAt: "2022-05-03T11:26:44.941Z",
          likeCounts: 23,
        },
        {
          _id: "627b9d7ca8255b0029890350",
          contents: "대댓글입니다. 1-1",
          user: {
            name: "주희",
          },
          createdAt: "2022-05-01T11:26:52.532Z",
          likeCounts: 1,
        },
      ];
    if (commentId === "627b9d67a8255b002989034d")
      return [
        {
          _id: "627b9d74a8255b002989034f",
          contents: "대댓글입니다. 2-1",
          user: {
            name: "주희",
          },
          createdAt: "2022-05-08T11:26:44.941Z",
          likeCounts: 70,
        },
      ];
    else return "none";
  };

  // 3. 댓글을 삭제하는 함수
  const deleteComment = (commentId: string) => {
    console.log("삭제할 댓글 아이디: " + commentId);
  };

  // 4. 대댓글을 삭제하는 함수
  const deleteReply = (replyId: string) => {
    console.log("삭제할 대댓글 아이디: " + replyId);
  };

  return (
    <CommentList
      commentList={commentList}
      fetchReply={fetchReply}
      deleteComment={deleteComment}
      deleteReply={deleteReply}
    />
  );
}
