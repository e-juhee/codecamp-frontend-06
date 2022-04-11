import { useEffect } from "react";
import GlobalStateContainer from "../../src/components/units/board/21-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  console.log(isEdit);
  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <GlobalStateContainer />;
}
