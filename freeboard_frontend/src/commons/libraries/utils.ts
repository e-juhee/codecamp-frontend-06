import { Modal } from "antd";
import { useRouter } from "next/router";

/* 가입하기 버튼 모달 */
export function countDown() {
  const router = useRouter();

  let secondsToGo = 3;
  const modal = Modal.success({
    title: "회원가입을 축하합니다!",
    content: `${secondsToGo}초 뒤에 메인으로 이동합니다.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `${secondsToGo}초 뒤에 메인으로 이동합니다.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
    router.push("/boards");
  }, secondsToGo * 1000);
}
export const getDate = (date: any) => {
  const newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  const m1 = newDate.getMonth() + 1;
  const mm = m1.toString().padStart(2, "0");
  const dd = newDate.getDate().toString().padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export const successModal = (content: string) => {
  Modal.success({
    content: content,
  });
};
export const warningModal = (content: string) => {
  Modal.warning({
    content: content,
  });
};

export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (제한: 5MB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png 파일만 업로드가 가능합니다.");
    return false;
  }
  return true;
};
