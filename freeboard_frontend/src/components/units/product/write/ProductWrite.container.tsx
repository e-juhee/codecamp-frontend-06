import ProductWriteUI from "./ProductWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  price: yup.number().required("가격을 입력해주세요."),
  contents: yup.string().required("상품 설명을 입력해주세요."),
});
export default function ProductWrite() {
  const [, setFileList] = useState();
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const imageUrl: any[] = [];
  const [imageUrl, setImageUrl] = useState<any[]>([]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0]; // 인덱스 떼서 리스트로 바꾸기
    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImageUrl((prev: any) => [...prev, result.data?.uploadFile.url]);
      setFileList(file);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (data.images[0]) {
      const result = await uploadFile({
        variables: { file: data.images[0] },
      });
      console.log("이거다");
      console.log(data.images);
      data.images = result.data?.uploadFile.url;
      setImageUrl((prev: any) => [...prev, result.data?.uploadFile.url]);
    }
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data, images: data.images },
        },
      });
      router.push(`/products/${result.data.createUseditem._id}`);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  });

  return (
    <ProductWriteUI
      onSubmit={onSubmit}
      errors={formState.errors}
      isValid={formState.isValid}
      register={register}
      imageUrl={imageUrl}
      onChangeImage={onChangeImage}
    />
  );
}
