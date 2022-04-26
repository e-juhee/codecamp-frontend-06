import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPage() {
  const { register, handleSubmit } = useForm();

  const [file1, setFile1] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("파일을 선택해주세요.");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };
  };
  interface IFormValues {
    writer?: string;
    password?: string;
    title?: string;
    contents?: string;
  }
  const onClickSubmit = async (data: IFormValues) => {
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1.data.uploadFile.url;
    const result2 = await createBoard({
      variables: { createBoardInput: { ...data, images: [imageUrl] } },
    });
    console.log(result2.data.createBoard._id);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 <input type="text" {...register("writer")}></input> <br />
        비밀번호 <input type="password" {...register("password")}></input>{" "}
        <br />
        제목 <input type="text" {...register("title")}></input> <br />
        내용 <input type="text" {...register("contents")}></input> <br />
        사진 <input type="file" onChange={onChangeFile} />
        <img src={imageUrl} />
        <br />
        <button>저장하기</button>
      </form>
    </div>
  );
}
