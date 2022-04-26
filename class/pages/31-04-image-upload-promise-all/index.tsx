import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

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
export default function ImageUploadPreviewPage() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    // 타입: File 또는 undefined가 들어있는 배열
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]; // 배열도 옵셔널체이닝을 쓸 수 있다.
      if (!file) {
        alert("파일이 없습니다.");
        return;
      }
      const fileReader = new FileReader(); // JS의 내장기능이다.
      fileReader.readAsDataURL(file); // file은 Blob(이진 형태의 큰 데이터)
      fileReader.onload = (data) => {
        // file을 다 읽으면 읽어진 결과물이 data로 들어오고 이 함수가 실행된다.
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles); // uploadFile API에 보내기 위한 *File*
        }
      };
    };

  const onClickSubmit = async () => {
    // undefined는 무시된다.
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultUrls = results.map((el) => {
      // el.data가 없으면 파일을 업로드 하지 않은 것이기 때문에 빈 문자열로 받는다.
      return el?.data ? el?.data.uploadFile.url : "";
    });

    // onChange에서 받은 url을 넣어도 되지만, 데이터 크기를 줄이기 위해서 uploadFile API를 이용한다.
    // const result1 = await uploadFile({ variables: { file: files } });
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "juhee",
          title: "Ttttttttitle",
          contents: "Connnnnntents",
          password: "1234",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };
  return (
    <div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
