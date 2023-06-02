'use client';
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModal";

export default function Hamberger() {

  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const setToggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className="relative flex items-center gap-10 text-2xl">
      <div>강아지 자랑하기</div>
      <div className="cursor-pointer hover:shadow-md" onClick={setToggleOpen}>
        <AiOutlineMenu size={30} />
      </div>
      {isOpen && (
        <div className="absolute top-12 right-0">
          <div className="flex flex-col bg-white rounded-xl border border-solid border-black">
            <MenuItem label="로그인" onClick={loginModal.actionOpen} />
            <MenuItem label="회원가입" onClick={registerModal.actionOpen} />
          </div>
        </div>
      )}
    </div>
  )
}
