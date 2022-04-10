import * as S from "../units/board/write/BoardWrite.style";

export default function UploadImageItem(props: any) {
  // const [deleteIndex, setDeleteIndex] = useState([]);

  const onClickUploadedImage = (e: any) => {
    const uploadedFile = [...props.fileList];
    uploadedFile.splice(Number(e.target.id), 1);
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
