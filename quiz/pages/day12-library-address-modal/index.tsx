import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");

  const onToggleModal = () => {
    setIsOpen((prev) => !prev); // false > true
  };

  const handleComplete = (data: any) => {
    setAddress(data.address);
    onToggleModal();
  };
  return (
    <>
      <Button onClick={onToggleModal}>모달 열기</Button>
      {isOpen && (
        <Modal
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal} // isOpen이 false가 되고 화면이 리렌더되면서 모달이 뜨지 않는다.
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>{address}</div>
    </>
  );
}
