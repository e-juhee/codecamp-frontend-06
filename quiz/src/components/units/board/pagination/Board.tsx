import * as S from "./Board.style";

export default function Board(props: any) {
  return (
    <S.Wrapper>
      <S.TitleRow>
        <S.HeaderTitle>제목</S.HeaderTitle>
        <S.HeaderWriter>작성자</S.HeaderWriter>
      </S.TitleRow>
      {props.data?.fetchBoards.map((el: any) => (
        <S.Row key={el._id}>
          <S.Title>{el.title}</S.Title>
          <S.Writer>{el.writer}</S.Writer>
        </S.Row>
      ))}
    </S.Wrapper>
  );
}
