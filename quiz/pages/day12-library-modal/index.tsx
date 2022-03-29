import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev); // false > true
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        모달 열기
      </Button>
      {isOpen && (
        <Modal
          title={"게시글 등록"}
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          게시글이 등록되었습니다.
        </Modal>
      )}
    </>
  );
}
