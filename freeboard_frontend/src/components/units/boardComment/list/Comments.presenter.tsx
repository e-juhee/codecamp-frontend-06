import * as S from "./Comments.style";
import { ICommentsUIProps } from "./Comments.types";
import CommentsItemUI from "./Comments.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentsUI(props: ICommentsUIProps) {
  return (
    <>
      {/* 댓글 4개를 넘어갈 때만 height를 주기 위해서 속성 추가 */}
      <S.CListWrapper
        commentsLength={props?.data ? props.data.fetchBoardComments.length : 0}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore} // 스크롤 시 작동하는 함수
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchBoardComments.map((el: any, index: number) => (
            <CommentsItemUI
              key={el._id}
              el={el}
              data={props.data}
              onToggleModal={props.onToggleModal}
              onClickDelete={props.onClickDelete}
              isOpen={props.isOpen}
              onChangePassword={props.onChangePassword}
              index={index}
            />
          )) || <div></div>}
        </InfiniteScroll>
      </S.CListWrapper>
    </>
  );
}
