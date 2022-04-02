import { useState } from "react";
import { IPaginationProps } from "../../units/board/list/Boards.types";
import * as S from "./Pagination.style";

export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);

  const onClickPage = (e: any) => {
    // Query 확인하자! (variables에 page 추가)
    props.refetch({ page: Number(e.target.id) });
    props.setCurrent(Number(e.target.id));
    console.log("onClickPage");
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      // 첫 페이지 묶음이면 실행ㄴㄴ
      setIsPrevActive(false);
      return;
    }
    if (startPage === 11) {
      setIsPrevActive(false);
    }
    setIsNextActive(true);
    setStartPage((prev) => prev - 10); // 이전 페이지 묶음으로 이동
    props.refetch({ page: startPage - 1 }); // prev 버튼 눌렀을 때 이전 10개의 페이지 중 가장 마지막이 열리도록 변경
    props.setCurrent(startPage - 1);
  };

  const onClickNextPage = () => {
    if (props.lastPage < startPage + 10) {
      // 마지막 페이지 묶음이면 실행ㄴㄴ
      setIsNextActive(false);
      return;
    }
    if (props.lastPage < startPage + 20) {
      setIsNextActive(false);
    }
    setIsPrevActive(true);
    setStartPage((prev) => prev + 10); // 다음 페이지 묶음으로 이동
    props.refetch({ page: startPage + 10 });
    props.setCurrent(startPage + 10);
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
        {new Array(10) // 한 페이지에 보여줄 data 수
          .fill(1) // 아무거나 채움
          // 마지막 페이지 묶음에서 데이터가 없는 번호는 노출하지 않도록 filter
          .filter((_, index) => index + startPage <= props.lastPage) // el을 사용하지 않아서 _로 씀
          .map((_, index) => (
            <S.PageNumber
              onClick={onClickPage}
              id={String(index + startPage)}
              key={index + startPage}
              isCurrent={props.current === index + startPage}
            >
              {index + startPage}
            </S.PageNumber>
          ))}
      </S.PageNumberWrapper>
      <S.Button
        disabled={!isNextActive || props.lastPage < 11}
        onClick={onClickNextPage}
        isActive={isNextActive && props.lastPage >= 11}
      >
        &gt;
      </S.Button>
    </S.Wrapper>
  );
}
