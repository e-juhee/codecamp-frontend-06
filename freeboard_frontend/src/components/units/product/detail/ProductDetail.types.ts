import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailUIProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickDelete: () => void;
}
