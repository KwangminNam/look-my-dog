'use client';

import useRegisterModal from "../hooks/useRegisterModal";
import Modal from "./Modal";

export default function RegisterModal() {

  const registerModal = useRegisterModal();

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="회원가입"
      closeAction={registerModal.actionClose}
    />
  )
}
