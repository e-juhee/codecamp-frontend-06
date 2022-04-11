import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/store";
import WriteComponent from "../../../../src/components/units/example/write";

export default function ExampleEditPage() {
  const [isEdit, setIsEdit] = useRecoilState<boolean>(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <WriteComponent />;
}
