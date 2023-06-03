"use client";

import useLoginModal from "../../hooks/useLoginModal";
import Button from "../Button";
import Input from "../Input/Input";
import Modal from "./Modal";
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc';

export default function LoginModal() {
  const loginModal = useLoginModal();

  const loginBodyContent = (
    <div className="flex flex-col gap-6">
      <Input id="id" label="아이디" />
      <Input id="password" label="비밀번호" />
    </div>
  );

  const loginFooterContent = (
    <div className="flex flex-col gap-6">
      <Button label="Github로 로그인하기" bgColor onClick={()=>{}} icon={AiFillGithub}/>
      <Button label="Google로 로그인하기" bgColor onClick={()=>{}} icon={FcGoogle} />
    </div>
  )

  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="로그인"
      closeAction={loginModal.actionClose}
      actionLabel="로그인"
      actionOnclick={() => {}}
      bodyContent={loginBodyContent}
      footerContent={loginFooterContent}
    />
  );
}
