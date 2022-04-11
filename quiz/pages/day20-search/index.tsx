import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import * as S from "./day20.style";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    // data: event.target.value
    // 0.2초 동안 재작업이 없으면 실행되는 부분
    setKeyword(data);
    refetch({ search: data, page: 1 }); // 바로 실행되지 않고, 0.2초 동안 재입력이 일어나지 않으면 그 때 리페치가 실행된다.
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickPage = (e: any) => {
    refetch({ page: Number(e.target.id) });
  };

  return (
    <>
      <S.Wrapper>
        <S.SearchWrapper>
          검색어 입력
          <S.Search type="text" onChange={onChangeSearch} />
        </S.SearchWrapper>
        {data?.fetchBoards.map(
          (
            el // 인자로 index를 써서 사용할 수 있음: 순서, 필요 없으면 안 써도 됨
          ) => (
            <S.Row key={el._id}>
              <S.Title>
                {el.title
                  .replaceAll(keyword, `#$%${keyword}#$%`)
                  .split("#$%")
                  .map((el) => (
                    <S.Word key={uuidv4()} isMatched={keyword === el}>
                      {el}
                    </S.Word>
                  ))}
              </S.Title>
              <S.Writer>{el.writer}</S.Writer>
            </S.Row>
          )
        )}
        <S.PageWrapper>
          {new Array(10).fill(1).map((_, index) => (
            <S.Page
              onClick={onClickPage}
              id={String(index + 1)}
              key={index + 1}
            >
              {index + 1}
            </S.Page>
          ))}
        </S.PageWrapper>
      </S.Wrapper>
    </>
  );
}
