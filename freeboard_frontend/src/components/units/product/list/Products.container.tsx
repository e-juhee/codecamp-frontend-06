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
  const { data, refetch } = useQuery<
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

  /* Routing to BoardWrite */
  const router = useRouter();
  const onClickWrite = () => {
    router.push(`/products/new`);
  };
  const [todayView, setTodayView] = useState([]);
  const [isChange, setChange] = useState(false);
  /* Routing to BoardDetail */
  const onClickProduct = (el: any) => (event: MouseEvent<HTMLDivElement>) => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    const temp = today.filter((todayEl: IBoard) => todayEl._id === el._id);
    if (!temp.length) {
      const { __typename, ...rest } = el;
      const withDateEl = { ...rest, date: todayDate() };
      today.push(withDateEl);
      localStorage.setItem("today", JSON.stringify(today));
      setChange((prev) => !prev);
    }
    // if (event.target instanceof Element)
    router.push(`/products/${event.currentTarget.id}`);
  };
  interface ITodayBoard {
    IBoard: IBoard;
    date: string;
  }
  useEffect(() => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    console.log(today);
    const temp = today.filter(
      (todayEl: ITodayBoard) => todayEl.date === todayDate()
    );
    setTodayView(temp);
  }, [isChange]);

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
    />
  );
}
