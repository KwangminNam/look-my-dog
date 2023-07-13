"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";

interface TypeDogBoxProps {
  label: string;
  src: string;
  selected: boolean;
}

export default function TypeDogBox({
  label,
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
      delete updatedQuery.dogType;
    }

    const url = qs.stringifyUrl(
      {
        url: "/doglist",
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
      cursor-pointer
      flex
      py-4
      justify-center
      items-center
      relative
      hover:border-blue-400
      ${selected ? "border-[3px] border-solid border-blue-500" : "border-neutral-500"}
      `}
      key={label}
    >
      <div className="flex flex-col items-center">
        <Image
          alt={label}
          src={`${src}.png`}
          width={50}
          height={50}
          className="rounded-full w-14"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
        <span>{label}</span>
      </div>
    </li>
  );
}
