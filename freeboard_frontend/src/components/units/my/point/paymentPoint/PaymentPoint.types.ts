import { Maybe } from "../../../../../commons/types/generated/types";

export interface IPaymentProps {
  price: Maybe<number> | undefined;
  setIsOpen: any;
}
