"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import usePostModal from "../../hooks/usePostModal";
import { signOut } from "next-auth/react";
import Avator from "../Avator";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface HambergerMenuProps {
  loggedInUser?: SafeUser | null;
}

export default function Hamberger({ loggedInUser }: HambergerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const postModal = usePostModal();
  const router = useRouter();

  const setToggleOpen = () => setIsOpen((prev) => !prev);

  const onOpenPostModal = () => {
    if (!loggedInUser) {
      return loginModal.actionOpen();
    }
    postModal.actionOpen();
  }

  return (
    <div className="relative flex items-center gap-10 text-2xl">
      <button
        className="
        border
        border-neutral-200
        rounded-xl
        shadow-md
        p-3"
        onClick={onOpenPostModal}
      >
        강아지 자랑하기
      </button>
      <Link
        href='/lost'
        className="
          border
          border-neutral-200
          rounded-xl
          shadow-md
          p-3"
        >
          유기견 강아지 보기     
      </Link>
      <button
        className="
          border
          border-neutral-200
          rounded-xl
          shadow-md
          p-3"
          onClick={() => router.push('/test')}>
          테스트
      </button>
      <div
        className="
          p-4
          border
          border-solid
          border-neutral-400
          cursor-pointer
          flex
          gap-2
          hover:shadow-md
          rounded-2xl"
        onClick={setToggleOpen}
      >
        <AiOutlineMenu size={30} />
        <Avator imgSrc={loggedInUser?.image} />
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 z-[100]">
          <div className="w-[120px] flex flex-col bg-white rounded-xl border border-solid border-black">
            {loggedInUser ? (
              <>
                <MenuItem label="로그아웃" onClick={() => { signOut() }} />
                <MenuItem label="이동" onClick={() => { router.push('/test') }} />
                <MenuItem label="내 정보" onClick={registerModal.actionOpen} />
                <MenuItem label="내 정보" onClick={registerModal.actionOpen} />
              </>
            ) : (
              <>
                <MenuItem label="로그인" onClick={loginModal.actionOpen} />
                <MenuItem label="회원가입" onClick={registerModal.actionOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
