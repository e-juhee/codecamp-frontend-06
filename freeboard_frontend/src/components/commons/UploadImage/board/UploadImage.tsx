import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkFileValidation } from "../../../../commons/libraries/utils";
import * as S from "../../../units/board/write/BoardWrite.style";
import UploadImageItem from "./UploadImageItem";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function UploadImage(props: any) {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>(null);
  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0]; // 인덱스 떼서 리스트로 바꾸기
    console.log(event.target.files);
    console.log(file);
    const isValid = checkFileValidation(file);
    if (!isValid) return;
    try {
      console.log(file);
      const result = await uploadFile({ variables: { file } });
      props.setFileList((prev: any) => [...prev, result.data?.uploadFile.url]);
    } catch (error: any) {
      alert(error.message);
    }
  };
  console.log(props.data);

  return (
    <>
      <S.ImageButton onClick={onClickImage}>
        <S.ImageIcon>+</S.ImageIcon>
        <S.ImageLabel>Upload</S.ImageLabel>
      </S.ImageButton>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        multiple
      />

      {props.fileList &&
        props.fileList.map((el: any, i: string) => (
          <UploadImageItem
            key={i}
            src={`https://storage.googleapis.com/${el}`}
            id={i}
            fileList={props.fileList}
            setFileList={props.setFileList}
          />
        ))}
    </>
  );
}
