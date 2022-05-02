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
import { withAuth } from "../../../commons/hocs/withAuth";
// import useAuth from "../../../commons/hocs/withAuth";

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

function ProductWrite(props: IProductWriteProps) {
  const [hashArr, setHashArr] = useState<string[]>(
    props?.data?.fetchUseditem?.tags || []
  );
  // 수정화면에 기존 해시태그 불러오기
  useEffect(() => {
    setHashArr(props?.data?.fetchUseditem?.tags || []);
  }, [props?.data?.fetchUseditem?.tags]);

  // useAuth();
  const router = useRouter();

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

  // react-quill default value
  useEffect(() => {
    reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [imageUrl, setImageUrl] = useState<any[]>([]);
  const [imageFile, setImageFile] = useState<any[]>([]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files;
    const fileList = [...file];
    fileList.map(async (el) => {
      const fileReader = new FileReader(); // JS의 내장기능이다.
      fileReader.readAsDataURL(el);
      fileReader.onload = (data) => {
        // file을 다 읽으면 읽어진 결과물이 data로 들어오고 이 함수가 실행된다.
        if (typeof data.target?.result === "string") {
          const tempUrls = [data.target?.result];
          setImageUrl((prev) => [...prev, ...tempUrls]);
          // const tempFiles = [...imageFile, file];
          setImageFile((prev) => [...prev, el]); // uploadFile API에 보내기 위한 *File*
        }
      };
    });
  };

  /* 수정화면에 기존 이미지 불러오기 */
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setImageUrl(
        props.data?.fetchUseditem.images.map(
          (el: string) => `https://storage.googleapis.com/${el}`
        )
      );
      setImageFile(props.data?.fetchUseditem.images);
    }
    // setImageFile(...props.data?.fetchUseditem.images)
    // setImageUrl([...props.data?.fetchUseditem.images]);
  }, [props.data]);

  /* 선택한 이미지 삭제 */
  const onClickImage = (_: any, deleteNum: number) => () => {
    setImageUrl([...imageUrl].filter((_, i) => i !== deleteNum));
    if (props.isEdit) {
      setImageFile([...imageFile].filter((_, i) => i !== deleteNum));
    }
  };

  const onCompleteAddressSearch = (data: any) => {
    console.log(data);
  };

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const onSubmit = handleSubmit(async (data) => {
    const results = await Promise.all(
      imageFile.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    const resultUrls = results.map((el) => {
      // el.data가 없으면 파일을 업로드 하지 않은 것이기 때문에 빈 문자열로 받는다.
      return el ? el?.data.uploadFile.url : "";
    });
    // if (data.tags) {
    //   data.tags = data.tags
    //     .replaceAll(" ", "")
    //     .split("#")
    //     .filter((el: string) => el !== "");
    // }
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: resultUrls,
            useditemAddress: address,
            tags: hashArr,
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
  // console.log(defaultData);
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
    imageFile.map((el) => console.log(el));

    if (!data.name) data.name = defaultData?.fetchUseditem?.name;
    if (!data.price) data.price = defaultData?.fetchUseditem?.price;
    if (!data.contents) data.contents = defaultData?.fetchUseditem?.contents;
    if (!data.remarks) data.remarks = defaultData?.fetchUseditem?.remarks;
    if (!data.tags) data.tags = [...defaultData?.fetchUseditem?.tags];
    if (!address.address)
      setAddress((prev) => ({
        ...prev,
        address: defaultData?.fetchUseditem?.address,
      }));
    // if (data.tags) {
    //   data.tags = data.tags
    //     .toString()
    //     .replaceAll(" ", "")
    //     .split("#")
    //     .filter((el: string) => el !== "");
    // }
    try {
      const results = await Promise.all(
        imageFile.map((el) =>
          typeof el === "string" ? el : uploadFile({ variables: { file: el } })
        )
      );
      console.log(results);
      const resultUrls = results.map((el: any) =>
        typeof el === "string" ? el : el?.data.uploadFile.url
      );
      console.log(resultUrls);
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            images: resultUrls,
            useditemAddress: address,
            tags: hashArr,
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
      address={address}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      hashArr={hashArr}
      setHashArr={setHashArr}
      getValues={getValues}
    />
  );
}

export default withAuth(ProductWrite);
