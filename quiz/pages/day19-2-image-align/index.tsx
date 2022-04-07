import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { LikeOutlined } from "@ant-design/icons";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { UPLOAD_FILE } from "./image.query";
import { Image, Wrapper } from "./image.style";

export default function Day19HighPage() {
  const fileRef1 = useRef<HTMLInputElement>(null);
  const fileRef2 = useRef<HTMLInputElement>(null);
  const fileRef3 = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

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
    fileRef1.current?.click();
    fileRef2.current?.click();
    fileRef3.current?.click();
  };

  return (
    <>
      <Wrapper>
        <LikeOutlined style={{ fontSize: "40px" }} onClick={onClickImage} />
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef1}
        />
        <LikeOutlined style={{ fontSize: "40px" }} onClick={onClickImage} />
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef2}
        />
        <LikeOutlined style={{ fontSize: "40px" }} onClick={onClickImage} />
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef3}
        />

        {imageUrl && (
          <Image src={`https://storage.googleapis.com/${imageUrl}`} />
        )}
      </Wrapper>
    </>
  );
}
