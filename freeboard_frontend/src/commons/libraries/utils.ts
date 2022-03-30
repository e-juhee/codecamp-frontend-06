import { Modal } from "antd";

export const getDate = (date: any) => {
  const newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  const m1 = newDate.getMonth() + 1;
  const mm = m1.toString().padStart(2, "0");
  const dd = newDate.getDate();
  return `${yyyy}.${mm}.${dd}`;
};

export const successModal = (content: string) => {
  Modal.success({
    content: content,
  });
};
