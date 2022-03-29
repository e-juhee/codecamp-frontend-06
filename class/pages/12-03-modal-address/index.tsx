import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setIsOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/* 모달 삭제하고 새로 만드는 방법 --> 비밀번호 */}
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel} // isOpen이 false가 되고 화면이 리렌더되면서 모달이 뜨지 않는다.
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}

      {/* 모달 숨겼다가 나타나게 하는 방법 --> 이력서 작성 등 */}
      {/* <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
    </>
  );
}
