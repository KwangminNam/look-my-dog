"use client";

import Image from "next/image";

interface AvatorPropsType {
  imgSrc: string | null | undefined;
}

export default function Avator({ imgSrc }: AvatorPropsType) {
  return (
    <Image
      className="hidden md:block rounded-full"
      src={imgSrc || "/images/userPlaceholder.jpg"}
      alt="사용자 placeholder"
      width={30}
      height={30}
    />
  );
}
