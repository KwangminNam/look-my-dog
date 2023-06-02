'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {

  const router = useRouter();

  return (
    <Image
      alt='look my dog logo'
      src='/images/doglogo.png'
      className="cursor-pointer border-4 border-red-50 rounded-xl"
      width={100}
      height={100}
      onClick={() => router.push('/')}
    />
  )
}
