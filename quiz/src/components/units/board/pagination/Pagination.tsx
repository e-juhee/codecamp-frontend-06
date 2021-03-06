import { useState } from "react";
import * as S from "./Pagination.style";

export default function Pagination(props: any) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);

  const onClickPage = (e: any) => {
    props.refetch({ page: Number(e.target.id) });
    setCurrent(Number(e.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsPrevActive(false);
      return;
    }
    if (startPage === 11) {
      setIsPrevActive(false);
    }

    setIsNextActive(true);
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 1 }); // prev 버튼 눌렀을 때 이전 10개의 페이지 중 가장 마지막이 열리도록 변경
    setCurrent(startPage - 1);
  };
  const onClickNextPage = () => {
    if (props.lastPage < startPage + 10) {
      setIsNextActive(false);
      return;
    }
    if (props.lastPage < startPage + 20) {
      setIsNextActive(false);
    }
    setIsPrevActive(true);
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    setCurrent(startPage + 10);
  };

  return (
    <S.Wrapper>
      <S.Button
        disabled={!isPrevActive}
        onClick={onClickPrevPage}
        isActive={isPrevActive}
      >
        &lt;
      </S.Button>
      <S.PageNumberWrapper>
        {new Array(10)
          .fill(1)
          .filter((_, index) => index + startPage <= props.lastPage)
          .map((_, index) => (
            <S.PageNumber
              onClick={onClickPage}
              id={String(index + startPage)}
              key={index + startPage}
              isCurrent={current === index + startPage}
            >
              {index + startPage}
            </S.PageNumber>
          ))}
      </S.PageNumberWrapper>
      <S.Button
        disabled={!isNextActive}
        onClick={onClickNextPage}
        isActive={isNextActive}
      >
        &gt;
      </S.Button>
    </S.Wrapper>
  );
}
