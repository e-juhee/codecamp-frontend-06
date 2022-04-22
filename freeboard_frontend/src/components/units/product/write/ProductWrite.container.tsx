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
  const [address, setAddress] = useState({});

  const onChangeContents = (value: string) => {
    // event가 들어오는 것이 아니다. html의 속성이 아닌 ReactQuill의 속성이기 때문이다. value가 바로 들어온다.
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value); // setValue를 사용하면 register로 등록하지 않고 강제로 값을 넣어줄 수 있다.
    // onChange가 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [imageUrl, setImageUrl] = useState<any[]>([]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files; // 인덱스 떼서 리스트로 바꾸기
    const fileList = [...file];
    fileList.map(async (el) => {
      try {
        const result = await uploadFile({ variables: { file: el } });
        setImageUrl((prev: any) => [...prev, result.data?.uploadFile.url]);
      } catch (error: any) {
        alert(error.message);
      }
    });
  };

  /* 선택한 이미지 삭제 */
  const onClickImage = (el: any) => () => {
    setImageUrl([...imageUrl].filter((image) => image !== el));
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: imageUrl,
            useditemAddress: address,
          },
        },
      });
      router.push(`/products/${result.data.createUseditem._id}`);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  });

  const onCompleteAddressSearch = (data: any) => {
    console.log(data);
  };

  return (
    <ProductWriteUI
      onSubmit={onSubmit}
      errors={formState.errors}
      isValid={formState.isValid}
      register={register}
      imageUrl={imageUrl}
      onChangeImage={onChangeImage}
      setValue={setValue}
      trigger={trigger}
      onChangeContents={onChangeContents}
      onClickImage={onClickImage}
      onCompleteAddressSearch={onCompleteAddressSearch}
      setAddress={setAddress}
    />
  );
}
