import BoardWriteUI from "./BoardWrite.presenter"; // ./: 현위치에서
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import {
  IAddressData,
  IBoardWriteProps,
  IUpdateBoardInput,
} from "./BoardWrite.types";
import {
  successModal,
  warningModal,
} from "../../../../commons/libraries/utils";
import { ChangeEvent, useState } from "react";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  /* 인풋창 state */
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
  });
  const [boardAddressInputs, setBoardAddressInputs] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });

  /* 에러 메세지 state */
  const [errors, setErrors] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  /* true가 들어가면 버튼을 활성화하는 state : presenter로 넘어가서 style로 전달된다. */
  const [isActive, setIsActive] = useState<boolean>(false); // isActive가 true이면 버튼 활성화

  /* 인풋창에 값이 입력되면 실행되는 함수 */
  const onChangeInputs = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // ts: 리액트의 ChangeEvent import하기 (HTML태그타입Element: 태그 타입 주의하기)
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    }); // 입력값을 스테이트에 넣기

    e.target.value &&
    Object.values(inputs).filter((el) => el === "").length <= 2
      ? setIsActive(true)
      : setIsActive(false); // 4개의 필수값이 입력되면 isActive = true
    if (e.target.value) {
      setErrors({ ...errors, [e.target.id]: "" });
    } // 값이 입력되면 에러메세지 제거
    // if (
    //   e.target.value !== "" &&
    //   Object.values(inputs).filter((el) => el === "").length === 2
    // ) {
    //   console.log(Object.values(inputs));
    // } // 값이 입력되면 에러메세지 제거
  };
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: IAddressData) => {
    setBoardAddressInputs((prev) => ({
      ...prev,
      address: data.address,
      zipcode: data.zonecode,
    }));
    setIsOpen(false);
  };
  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setBoardAddressInputs((prev) => ({
      ...prev,
      addressDetail: e.target.value,
    }));
  };

  /* CREATE_BOARD */
  const [createBoard] = useMutation(CREATE_BOARD); // queries에 작성한 쿼리를 가져와서 createBoard에 저장한다.
  const onClickCreate = async () => {
    // async를 붙여야 await를 붙일 수 있다.
    if (!inputs.writer) {
      setErrors((prev) => ({ ...prev, writer: "작성자를 입력해주세요." }));
    }
    if (!inputs.password) {
      setErrors((prev) => ({ ...prev, password: "비밀번호를 입력해주세요." }));
    }
    if (!inputs.title) {
      setErrors((prev) => ({ ...prev, title: "제목을 입력해주세요." }));
    }
    if (!inputs.contents) {
      setErrors((prev) => ({ ...prev, contents: "내용을 입력해주세요." }));
      return;
    }

    if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
      try {
        // 에러처리: create 실패 시 catch절을 수행한다.
        const result = await createBoard({
          // createBoard를 실행하고 리턴값을 result에 받아온다. //input창을 만들고 onChange & state 이용하면 입력값을 받을 수 있다
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: { ...boardAddressInputs },
            },
          },
        });
        successModal("게시글이 등록되었습니다.");

        /* Detail 화면으로 라우팅 */
        // BoardWrite.container가 실행되는 경로는 pages/boards/new/index.js이다. router에 그에 맞게 경로를 정해줘야 한다.
        // 이름이 일치하는 폴더가 없을 경우 [대괄호 폴더명]으로 이동한다.
        router.push(`/boards/${result.data.createBoard._id}`); // 리턴값으로 받은 아이디로 이동
      } catch (error) {
        if (error instanceof Error) warningModal(error.message);
      }
    }
  };

  /* UPDATE_BOARD */
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const onClickUpdate = async () => {
    if (!inputs.password) {
      warningModal("비밀번호를 입력해주세요.");
      return;
    }
    if (
      !inputs.title &&
      !inputs.contents &&
      !inputs.youtubeUrl &&
      !boardAddressInputs.address &&
      !boardAddressInputs.addressDetail &&
      !boardAddressInputs.zipcode
    ) {
      warningModal("변경된 내용이 없습니다.");
      return;
    }

    // variables : 값이 들어가 있는(사용자가 수정한) state만 넣는 객체 생성 (수정하지 않은 state는 제외하고 수정한 state만 쿼리에 전달)

    const myUpdateBoardInput: IUpdateBoardInput = {};
    if (inputs.title) myUpdateBoardInput.title = inputs.title; // 입력값이 있는 경우에만 myVariables에 title을 key로 하는 'title의 입력값'을 value로 넣어줘
    if (inputs.contents) myUpdateBoardInput.contents = inputs.contents;
    if (inputs.youtubeUrl) myUpdateBoardInput.youtubeUrl = inputs.youtubeUrl;
    if (
      boardAddressInputs.zipcode ||
      boardAddressInputs.address ||
      boardAddressInputs.addressDetail
    ) {
      myUpdateBoardInput.boardAddress = {};
      if (boardAddressInputs.zipcode)
        myUpdateBoardInput.boardAddress.zipcode = boardAddressInputs.zipcode;
      if (boardAddressInputs.address)
        myUpdateBoardInput.boardAddress.address = boardAddressInputs.address;
      if (boardAddressInputs.addressDetail)
        myUpdateBoardInput.boardAddress.addressDetail =
          boardAddressInputs.addressDetail;
    }

    try {
      await updateBoard(
        {
          variables: {
            boardId: String(router.query.boardId),
            password: inputs.password,
            updateBoardInput: myUpdateBoardInput,
          },
        } // 위에서 만든 (변경이 일어난 state만 들어있는) 객체를 updateBoard에 입력값으로 전달
      );
      successModal("수정이 완료되었습니다.");
      /* Detail 화면으로 라우팅 */
      router.push(`/boards/${router.query.boardId}`); // CREATE에서 쓴 ${result.data.updateBoard._id}를 써도 된다. //boardId는 내가 생성한 [대괄호 폴더명] (참고: UPDATE가 아닌 CREATE 화면에는 경로에 boardId가 없기 때문에 리턴 받는 아이디로 라우팅 해야만 한다!)
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <BoardWriteUI // 자동완성으로 뜰 때 엔터를 쳐서 선택하면 자동으로 Import가 된다.
      /* 자식에게 보낼 데이터 */
      // 아래처럼 함수나 변수를 작성하면, props라는 객체가 생성되어 여기에 작성한 함수나 변수가 value로 들어가고, return의 페이지에 props를 통해 전달되어서 전달 받은 페이지에서 사용할 수 있다.
      // 키는 자유롭게 지정이 가능하나, 가급적 함수/변수명과 통일한다.
      isEdit={props.isEdit}
      isActive={isActive}
      setIsActive={setIsActive}
      // writerError={writerError}
      // passwordError={passwordError}
      // titleError={titleError}
      // contentsError={contentsError}
      onToggleModal={onToggleModal}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      data={props.data} // edit/index.js 수정하기 페이지에서 보내준 fetchBoard 결과
      onCompleteAddressSearch={onCompleteAddressSearch}
      isOpen={isOpen}
      boardAddressInputs={boardAddressInputs}
      onChangeInputs={onChangeInputs}
      errors={errors}
    />
  );
}
