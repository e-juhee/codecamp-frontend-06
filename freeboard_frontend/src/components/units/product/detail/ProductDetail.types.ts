import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailUIProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickDelete: () => void;
  onClickBuy: () => void;
  onClickUpdate: () => void;
  onClickPick: () => void;
}
