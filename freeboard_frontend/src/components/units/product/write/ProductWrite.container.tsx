import ProductWriteUI from "./ProductWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  price: yup.number().required("가격을 입력해주세요."),
  contents: yup.string().required("상품 설명을 입력해주세요."),
});
export default function ProductWrite() {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    if (data.images) {
      console.log(...data.images);
    }
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data, images: data.images[0].name },
        },
      });
      console.log(result);
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
    />
  );
}
