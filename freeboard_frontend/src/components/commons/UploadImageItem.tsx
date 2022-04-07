import * as S from "../units/board/write/BoardWrite.style";

export default function UploadImageItem(props: any) {
  // const [deleteIndex, setDeleteIndex] = useState([]);

  const onClickUploadedImage = (e: any) => {
    // console.log(e.target.id);
    // setDeleteIndex((prev: any) => [...prev, e.target.id]);
    // console.log(deleteIndex);
    console.log(e.target.id);
    const uploadedFile = [...props.fileList];
    console.log("업로디드파일" + uploadedFile);
    console.log(uploadedFile[e.target.id]);
    uploadedFile.splice(Number(e.target.id), 1);
    console.log(uploadedFile);
    props.setFileList([...uploadedFile]);
  };
  return (
    <>
      <S.Image
        key={props.i}
        src={props.src}
        id={props.id}
        onClick={onClickUploadedImage}
      />
    </>
  );
}
