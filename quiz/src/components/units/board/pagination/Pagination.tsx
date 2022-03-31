import { useState } from "react";
import styled from "@emotion/styled";

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
    props.refetch({ page: startPage - 1 });
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

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 400px;
    margin-top: 30px;
  `;

  const PageNumber = styled.div`
    color: ${(props: ICurrentProps) => (props.isCurrent ? "red" : "black")};
  `;

  const Button = styled.button`
    display: ${(props: IActiveProps) => (props.isActive ? "" : "none")};
  `;
  interface ICurrentProps {
    isCurrent: boolean;
  }
  interface IActiveProps {
    isActive: boolean;
  }
  return (
    <Wrapper>
      <Button onClick={onClickPrevPage} isActive={isPrevActive}>
        &lt;
      </Button>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <PageNumber
              onClick={onClickPage}
              id={String(index + startPage)}
              key={index + startPage}
              isCurrent={current === index + startPage}
            >
              {`  `} {index + startPage}
            </PageNumber>
          )
      )}
      {`  `}
      <Button onClick={onClickNextPage} isActive={isNextActive}>
        &gt;
      </Button>
    </Wrapper>
  );
}
