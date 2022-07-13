import React from "react";
import AskModal from "../../components/common/AskModal";
const RemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      title="포스트 삭제"
      descript="이 포스트가 삭제 됩니다."
    ></AskModal>
  );
};

export default RemoveModal;
