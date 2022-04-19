import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <>
      <h1>장바구니</h1>
      {basketItems.map((el: IBoard) => (
        <div key={el._id}>
          <div>{el.writer}</div>
          <div>{el.title}</div>
        </div>
      ))}
    </>
  );
}
