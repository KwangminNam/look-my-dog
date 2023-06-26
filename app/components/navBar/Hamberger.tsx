"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
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
  };

  return (
    <>
      <ul className="relative flex items-center gap-10 text-2xl">
        <li>
          <button
            className="
              lg:border-2
              border-neutral-300
              rounded-xl
              py-3
              pr-12
              pl-10
              relative
            "
            onClick={onOpenPostModal}
          >
            <BsPlusSquare className="absolute right-3 top-[50%] translate-y-[-50%]" />
            <span className="text-lg hidden lg:block">강아지 자랑하기</span>
          </button>
        </li>
        <li>
          <Link
            href="/doglist"
            className="
          p-3"
          >
            강아지 보기
          </Link>
        </li>
        <li>
          <Link
            href="/lost"
            className="
          p-3"
          >
            유기견 강아지
          </Link>
        </li>
      </ul>
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
        <div className="absolute top-20 right-[90px] z-[100]">
          <ul className="w-[190px] flex flex-col bg-white rounded-xl border border-solid border-black">
            {loggedInUser ? (
              <>
                <MenuItem
                  label="로그아웃"
                  onClick={() => {
                    signOut();
                  }}
                />
                <MenuItem
                  label="나의 강아지"
                  onClick={() => {
                    router.push("/mypost");
                  }}
                />
                <MenuItem
                  label="이동"
                  onClick={() => {
                    router.push("/test");
                  }}
                />
                <MenuItem
                  label="좋아요 한 게시판"
                  onClick={() => router.push("/favorite")}
                />
              </>
            ) : (
              <>
                <MenuItem label="로그인" onClick={loginModal.actionOpen} />
                <MenuItem label="회원가입" onClick={registerModal.actionOpen} />
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
