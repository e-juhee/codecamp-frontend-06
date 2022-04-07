import { LikeOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../commons/types/generated/types";
import { checkFileValidation } from "../../commons/libraries/utils";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function UploadImage(props: any) {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>(null);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 인덱스 떼서 리스트로 바꾸기
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

  return (
    <>
      <LikeOutlined style={{ fontSize: "40px" }} onClick={onClickImage} />
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />

      {imageUrl && <img src={`https://storage.googleapis.com/${imageUrl}`} />}
    </>
  );
}
