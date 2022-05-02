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
  const [file1, setFile1] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 파일이 없을 수도 있으니 옵셔널 체이닝 사용(배열도 옵셔널체이닝을 쓸 수 있다.)
    if (!file) {
      // 파일 검증
      alert("파일이 없습니다.");
      return;
    }
    const fileReader = new FileReader(); // JS의 내장기능이다.
    fileReader.readAsDataURL(file); // file은 Blob(이진 형태의 큰 데이터)
    // blob 타입의 file을 url 형태로 만든다. 이 url을 DB에 바로 저장할 수 있지만 크기가 너무 크니까 ㄴㄴ..

    fileReader.onload = (data) => {
      // file을 다 읽으면 읽어진 결과물이 data로 들어오고 이 함수가 실행된다.

      if (typeof data.target?.result === "string") {
        // useState 초기값으로 string("")을 넣었기 때문에 이 if문을 넣지 않으면 undefined나 null일 경우 때문에 에러가 난다.

        console.log(data.target?.result); // file을 url 형태로 읽은 결과물이다.
        setImageUrl(data.target?.result); // 미리보기를 위한 *임시 url* (Blob 형태)
        setFile1(file); // uploadFile API에 보내기 위한 *File*
      }
    };
  };

  const onClickSubmit = async () => {
    // 1) uploadFile에 *file*을 보내서 업로드용 url을 얻어낸다.
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1.data.uploadFile.url;

    // 2) 게시글을 등록한다.
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "juhee",
          title: "Ttttttttitle",
          contents: "Connnnnntents",
          password: "1234",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      {/* 미리보기 주소가 들어간다. */}
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
