'use client';

import useLoginModal from "../hooks/useLoginModal";
import Modal from "./Modal";

export default function LoginModal() {

  const loginModal = useLoginModal();

  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="로그인"
      closeAction={loginModal.actionClose}
    />
  )
}
