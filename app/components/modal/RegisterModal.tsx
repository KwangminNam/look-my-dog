'use client';

import useRegisterModal from "../../hooks/useRegisterModal";
import Button from "../Button";
import Input from "../Input/Input";
import Modal from "./Modal";
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc';


export default function RegisterModal() {

  const registerModal = useRegisterModal();

  const loginBodyContent = (
    <div className="flex flex-col gap-6">
      <Input id="id" label="아이디" />
      <Input id="password" label="비밀번호" />
    </div>
  );

  const loginFooterContent = (
    <div className="flex flex-col gap-6">
      <Button label="Github로 회원가입" bgColor onClick={()=>{}} icon={AiFillGithub}/>
      <Button label="Google로 회원가입" bgColor onClick={()=>{}} icon={FcGoogle} />
    </div>
  )
  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="회원가입"
      closeAction={registerModal.actionClose}
      actionLabel="회원가입"
      actionOnclick={()=>{}}
      bodyContent={loginBodyContent}
      footerContent={loginFooterContent}
    />
  )
}
