'use client';
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import usePostModal from "../../hooks/usePostModal";

export default function Hamberger() {

  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const postModal = usePostModal();

  const setToggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className="relative flex items-center gap-10 text-2xl">
      <button
        className="
        border
        border-neutral-200
        rounded-xl
        shadow-md
        p-3"
        onClick={postModal.actionOpen}>
        강아지 자랑하기
      </button>
      <div className="cursor-pointer hover:shadow-md" onClick={setToggleOpen}>
        <AiOutlineMenu size={30} />
      </div>
      {isOpen && (
        <div className="absolute top-12 right-0">
          <div className="w-[120px] flex flex-col bg-white rounded-xl border border-solid border-black">
            <MenuItem label="로그인" onClick={loginModal.actionOpen} />
            <MenuItem label="회원가입" onClick={registerModal.actionOpen} />
          </div>
        </div>
      )}
    </div>
  )
}
