import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./Products.queries";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import {
  IBoard,
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";
import ProductsUI from "./Products.presenter";
import { todayDate } from "../../../../commons/libraries/utils";

export default function Products() {
  /* FETCH_BOARDS */
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS); // data는 state와 동일한 역할을 한다. 값이 바뀌면 리렌더된다.

  const [, setSearch] = useState<string>("");

  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((search) => {
    // data: event.target.value
    // 0.2초 동안 재작업이 없으면 실행되는 부분
    setKeyword(search);
    setSearch(search);
    refetch({ search, page: 1 }); // 바로 실행되지 않고, 0.2초 동안 재입력이 일어나지 않으면 그 때 리페치가 실행된다.
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  /* FETCH_BOARDS_BEST */
  const { data: dataBest } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);

  /* 무한 스크롤 */
  const onLoadMore = () => {
    if (!data) return; // 데이터가 없으면 실행하지 않는다. (처음에는 데이터가 undefined인데, 무한 스크롤이 실행이 되어버린다.)

    fetchMore({
      variables: {
        // 다음 페이지(불러올 페이지) : 기존에 받아온 data에서  길이를 가져와서 활용한다.
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },

      // useQuery로 받아온 data를 update한다.
      updateQuery: (prev, { fetchMoreResult }) => {
        // prev: 기존의 data
        // {fetchMoreResult} : 추가로 요청해서 받아온 내용

        // 새로 조회해온 값이 없으면 기존 것으로 그냥 업데이트한다.
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: prev.fetchUseditems };

        // 가져온 내용으로 return (update한다.)
        return {
          // 기존의 것과 추가로 받은 것을 합친다.
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  /* Routing to BoardWrite */
  const router = useRouter();
  const onClickWrite = () => {
    router.push(`/products/new`);
  };

  const [todayView, setTodayView] = useState([]);
  // const [isChange, setChange] = useState(false);
  /* Routing to BoardDetail */
  const onClickProduct = (now: any) => (event: MouseEvent<HTMLDivElement>) => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    // temp : 같은 글을 같은 날짜에 누른 경우
    const temp = today.filter(
      (todayEl: any) => todayEl._id === now._id && todayEl.date === todayDate()
    );
    // console.log(today[0]._id, now._id);
    // console.log(today[0].date, now.date);

    // 같은 글이 아니거나 같은 날짜가 아닐 경우에만 실행
    if (temp.length === 0) {
      const { __typename, ...rest } = now;
      const withDateEl = { ...rest, date: todayDate() };
      today.push(withDateEl);
      localStorage.setItem("today", JSON.stringify(today));
      // setChange((prev) => !prev);
    }
    // if (event.target instanceof Element)
    router.push(`/products/${event.currentTarget.id}`);
    console.log(event.currentTarget.id);
  };
  interface ITodayBoard {
    IBoard: IBoard;
    date: string;
  }
  useEffect(() => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    const temp = today.filter(
      (todayEl: ITodayBoard) => todayEl.date === todayDate()
    );
    setTodayView(temp);
  }, []);

  const [isChecked, setIsChecked] = useState(true);
  const onChangeCheck = () => {
    setIsChecked((prev) => !prev);
    if (!data) return;
    refetch({ isSoldout: isChecked });
  };

  return (
    <ProductsUI
      onClickWrite={onClickWrite}
      data={data}
      onClickProduct={onClickProduct}
      refetch={refetch}
      // lastPage={lastPage}
      dataBest={dataBest}
      // current={current}
      // setCurrent={setCurrent}
      onChangeSearch={onChangeSearch}
      // onClickSearch={onClickSearch}
      keyword={keyword}
      todayView={todayView}
      onLoadMore={onLoadMore}
      onChangeCheck={onChangeCheck}
      isChecked={isChecked}
    />
  );
}
