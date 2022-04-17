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
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const imageUrl: any[] = [];
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    if (data.images) {
      console.log("데이터이미지");
      console.log(data.images[0]);
      Object.values(data.images).map(async (el: any) => {
        console.log("이에렐레");
        console.log(el);
        const result = await uploadFile({ variables: { file: el } });
        imageUrl.push(result.data?.uploadFile.url);
        console.log(imageUrl);
      });
    }
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data, images: imageUrl },
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
    />
  );
}
