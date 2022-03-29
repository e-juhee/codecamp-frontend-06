import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev); // false > true
  };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
  };
  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        Open Modal
      </Button>
      {isOpen && (
        <Modal
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal} // isOpen이 false가 되고 화면이 리렌더되면서 모달이 뜨지 않는다.
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
