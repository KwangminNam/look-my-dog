"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";

interface TypeDogBoxProps {
  label: string;
  desc: string;
  src: string;
  selected: boolean;
}

export default function TypeDogBox({
  label,
  desc,
  src,
  selected
}: TypeDogBoxProps) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      dogType: encodeURIComponent(label)
    };

    if (params?.get("dogType") === label) {
      delete updatedQuery.puppy;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery
      },
      { skipNull: true }
    );

    router.push(url);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior:'smooth'
    })

  }, [label, params, router]);

  return (
    <li
      onClick={handleClick}
      className={`
      bg-white
      border
      rounded-xl
      border-neutral-200
      cursor-pointer
      flex
      py-6
      justify-center
      items-center
      relative
      hover:shadow-2xl
      ${selected ? "border border-solid border-red-300" : "border-neutral-300"}
      `}
      key={label}
    >
      <div className="flex flex-col items-center">
        <Image
          alt={label}
          src={`${src}.jpeg`}
          width={65}
          height={65}
          className="rounded-full w-14 h-14"
        />
        <span>{label}</span>
      </div>
    </li>
  );
}
