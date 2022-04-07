import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { LikeOutlined } from "@ant-design/icons";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { CREATE_BOARD, UPLOAD_FILE } from "./image.query";
import { Button, Image, Input, Wrapper } from "./image.style";

export default function Day19QuizPage() {
  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          title: myTitle,
          contents: myContents,
          password: myPassword,
          images: [imageUrl],
        },
      },
    });
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onChangeFile = async (
    event: import("react").ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <Wrapper>
        <Input>
          작성자 <input type="text" onChange={onChangeWriter} />
        </Input>
        <Input>
          비밀번호 <input type="password" onChange={onChangePassword} />
        </Input>
        <Input>
          제목 <input type="text" onChange={onChangeTitle} />
        </Input>
        <Input>
          내용 <input type="text" onChange={onChangeContents} />
        </Input>

        <LikeOutlined style={{ fontSize: "40px" }} onClick={onClickImage} />
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />

        {imageUrl && (
          <Image src={`https://storage.googleapis.com/${imageUrl}`} />
        )}
        <Button onClick={onClickSubmit}>저장하기</Button>
      </Wrapper>
    </>
  );
}
