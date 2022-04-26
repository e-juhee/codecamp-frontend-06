import { useMutation, useQuery } from "@apollo/client";
import MyUI from "./My.presenter";
import { FETCH_USEDITEMS_I_PICKED, LOGOUT_USER } from "./My.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { todayDate } from "../../../commons/libraries/utils";

export default function My() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: { search: "" },
  });
  console.log(data);
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
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogOut = () => {
    try {
      logoutUser();
      console.log("로그아웃성공");
    } catch (error) {
      console.log(error);
      console.log("로가웃실패");
    }
  };

  return (
    <MyUI
      onClickProduct={onClickProduct}
      data={data}
      onClickLogOut={onClickLogOut}
    />
  );
}
