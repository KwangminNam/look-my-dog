"use client";


import TypeDogBox from "./TypeDogBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Button from "./Button";

export const TYPE_OF_DOG = [
  {
    label: "말티즈",
    desc: "/images/puppy2/malti",
    src: "/images/puppy2/malti"
  },
  {
    label: "골든리트리버",
    desc: "골든리트리버 설명!",
    src: "/images/puppy2/golden-retriever"
  },
  {
    label: "비숑 프리제",
    desc: "비숑 설명!",
    src: "/images/puppy2/bichon-frise"
  },
  {
    label: "프렌치불독",
    desc: "비숑 설명!",
    src: "/images/puppy2/french-bulldog"
  },
  {
    label: "시츄",
    desc: "시츄",
    src: "/images/puppy2/sichew"
  },
  {
    label: "치와와",
    desc: "치와와 설명!",
    src: "/images/puppy2/chiwawa"
  },
  {
    label: "포메라이언",
    desc: "포메라이언 설명!",
    src: "/images/puppy2/pomeranian"
  },
  {
    label: "비글",
    desc: "비글 설명!",
    src: "/images/puppy2/beagle"
  },
  {
    label: "닥스훈트",
    desc: "닥스훈트 설명!",
    src: "/images/puppy2/dachshund"
  },
  {
    label: "푸들",
    desc: "푸들 설명!",
    src: "/images/puppy2/red-poodle"
  },
  {
    label: "코커스페니엘",
    desc: "푸들 설명!",
    src: "/images/puppy2/cocker-spaniel"
  },
  {
    label: "허스키",
    desc: "시베리안허스키 설명!",
    src: "/images/puppy2/husky"
  },
  {
    label: "달마시안",
    desc: "포메라이언 설명!",
    src: "/images/puppy2/dalmatian"
  }
];

export default function TypeDogs() {
  const params = useSearchParams();
  const dogTypeParams = params?.get("dogType");
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);
  const openToggle = () => setIsOpen((prev) => !prev);

  const [showAll, setShowAll] = useState(false);
  const [typeDogs, setTypeDogs] = useState(
    showAll ? TYPE_OF_DOG : TYPE_OF_DOG.slice(0, 10)
  );
  const onToggle = () => {
    setShowAll((prev) => !prev);
  };

  const toggleItems = () => {
    if (showAll) {
      setTypeDogs(TYPE_OF_DOG.slice(0, 10));
    } else {
      setTypeDogs(TYPE_OF_DOG);
    }
    onToggle();
  };

  const buttonLabel = useMemo(() => {
    if (showAll) return "축소하기";
    return "모든 강아지 보기";
  }, [showAll]);

  const isDogListPage = pathname === "/doglist";
  if (!isDogListPage) return null;

  return (
    <div className="relative flex flex-col items-center mb-10 sm:mb-20">
      <ul className="w-full pt-8 sm:pt-11 pb-4 sm:pb-5 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 h-0s translate-y-0">
        {typeDogs.map((item) => (
          <TypeDogBox
            src={item.src}
            label={item.label}
            desc={item.desc}
            selected={dogTypeParams === encodeURIComponent(item.label)}
            key={item.label}
          />
        ))}
      </ul>
      <Button label={buttonLabel} onClick={toggleItems} halfWidth />
    </div>
  );
}
