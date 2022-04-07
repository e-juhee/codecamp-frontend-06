import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickToolTip: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickDelete: () => void;
  onClickList: () => void;
  onClickUpdate: () => void;
  imageUrl?: string;
}
