"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <h1 className="hidden md:block">
      <Image
        alt="look my dog logo"
        src="/images/dog-nose.png"
        className="border-[5px] border-black rounded-full p-2 cursor-pointer"
        width={100}
        height={100}
        onClick={() => router.push("/")}
      />
    </h1>
  );
}
