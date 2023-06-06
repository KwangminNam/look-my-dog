"use client";

import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp
} from "react-icons/md";
import Container from "./Container";
import TypeDogBox from "./TypeDogBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const TYPE_OF_DOG = [
  {
    label: "말티즈",
    desc: "/images/puppy/malti",
    src: "/images/puppy/malti",
    urlString: "malt"
  },
  {
    label: "골든리트리버",
    desc: "골든리트리버 설명!",
    src: "/images/puppy/golden",
    urlString: "golden"
  },
  {
    label: "비숑",
    desc: "비숑 설명!",
    src: "/images/puppy/bichon",
    urlString: "bichont"
  },
  {
    label: "시츄",
    desc: "시츄",
    src: "/images/puppy/pome",
    urlString: "sichew"
  },
  {
    label: "치와와",
    desc: "치와와 설명!",
    src: "/images/puppy/chiwawa",
    urlString: "chiwawa"
  },
  {
    label: "포메라이언",
    desc: "포메라이언 설명!",
    src: "/images/puppy/malti",
    urlString: "pome"
  },
  {
    label: "비글",
    desc: "비글 설명!",
    src: "/images/puppy/malti",
    urlString: "biggle"
  },
  {
    label: "닥스훈트",
    desc: "닥스훈트 설명!",
    src: "/images/puppy/malti",
    urlString: "docs"
  },
  {
    label: "푸들",
    desc: "푸들 설명!",
    src: "/images/puppy/malti",
    urlString: "poddle"
  },
  {
    label: "시베리안허스키",
    desc: "시베리안허스키 설명!",
    src: "/images/puppy/malti",
    urlString: "husky"
  },
  {
    label: "코커 스패니",
    desc: "포메라이언 설명!",
    src: "/images/puppy/malti",
    urlString: "koker"
  },
  {
    label: "퍼그",
    desc: "포메라이언 설명!",
    src: "/images/puppy/malti",
    urlString: "fug"
  }
];

export default function TypeDogs() {
  const params = useSearchParams();
  const category = params?.get("puppy");
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);
  const openToggle = () => setIsOpen((prev) => !prev);

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <Container>
      <div className="relative">
        <button
          className="absolute right-1/2 top-[-20px] translate-x-1/2 bg-red-400 rounded-full"
          onClick={openToggle}
        >
          {isOpen ? (
            <MdOutlineKeyboardDoubleArrowUp size={50} color="#fff" />
          ) : (
            <MdOutlineKeyboardDoubleArrowDown size={50} />
          )}
        </button>
        <ul className="py-11 grid grid-cols-5 gap-3 h-0s translate-y-0">
          {TYPE_OF_DOG.map((item) => (
            <TypeDogBox
              src={item.src}
              label={item.label}
              desc={item.desc}
              selected={category === item.urlString}
              key={item.label}
              urlString={item.urlString}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
}
