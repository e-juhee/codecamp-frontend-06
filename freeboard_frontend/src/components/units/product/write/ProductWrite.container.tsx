import ProductWriteUI from "./ProductWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { gql, useMutation, useQuery } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USEDITEM } from "./ProductWrite.queries";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useEffect, useState } from "react";
import { IProductWriteProps } from "./ProductWrite.types";
import { FETCH_USEDITEM } from "../detail/ProductDetail.queries";

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

export default function ProductWrite(props: IProductWriteProps) {
  const [address, setAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });

  const onChangeContents = (value: string) => {
    // event가 들어오는 것이 아니다. html의 속성이 아닌 ReactQuill의 속성이기 때문이다. value가 바로 들어온다.
    setValue("contents", value === "<p><br></p>" ? "" : value); // setValue를 사용하면 register로 등록하지 않고 강제로 값을 넣어줄 수 있다.
    // onChange가 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  const router = useRouter();
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

  /* 수정화면에 기존 이미지 불러오기 */
  useEffect(() => {
    console.log(props.data?.fetchUseditem.images);
    if (props.data?.fetchUseditem.images?.length)
      setImageUrl([...props.data?.fetchUseditem.images]);
  }, [props.data]);

  /* 선택한 이미지 삭제 */
  const onClickImage = (el: any) => () => {
    setImageUrl([...imageUrl].filter((image) => image !== el));
  };

  const onCompleteAddressSearch = (data: any) => {
    console.log(data);
  };

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const onSubmit = handleSubmit(async (data) => {
    if (data.tags) {
      data.tags = data.tags
        .replaceAll(" ", "")
        .split("#")
        .filter((el: string) => el !== "");
    }
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

  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const { data: defaultData } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  console.log(defaultData);
  // const defaultAddress = {
  //   address: defaultData?.fetchUseditem?.useditemAddress?.address,
  //   addressDetail: defaultData?.fetchUseditem?.useditemAddress?.addressDetail,
  // };

  // const defaultDatas = {
  //   name: defaultData?.fetchUseditem?.name,
  //   price: defaultData?.fetchUseditem?.price,
  //   contents: defaultData?.fetchUseditem?.contents,
  //   remarks: defaultData?.fetchUseditem?.remarks,
  //   tags: defaultData?.fetchUseditem?.tags,
  //   useditemAddress: { ...defaultAddress },
  // };

  // const defaultData = data;
  const onClickUpdate = handleSubmit(async (data) => {
    if (!data.name) data.name = defaultData?.fetchUseditem?.name;
    if (!data.price) data.price = defaultData?.fetchUseditem?.price;
    if (!data.contents) data.contents = defaultData?.fetchUseditem?.contents;
    if (!data.remarks) data.remarks = defaultData?.fetchUseditem?.remarks;
    if (!data.tags) data.tags = [...defaultData?.fetchUseditem?.tags];
    if (!data.useditemAddress)
      data.useditemAddress = { ...defaultData?.fetchUseditem?.useditemAddress };
    if (data.tags) {
      data.tags = data.tags
        .toString()
        .replaceAll(" ", "")
        .split("#")
        .filter((el: string) => el !== "");
    }
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            images: imageUrl,
            useditemAddress: address,
          },
          useditemId: String(router.query.useditemId),
        },
      });
      router.push(`/products/${router.query.useditemId}`);
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
      setValue={setValue}
      trigger={trigger}
      onChangeContents={onChangeContents}
      onClickImage={onClickImage}
      onCompleteAddressSearch={onCompleteAddressSearch}
      setAddress={setAddress}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
