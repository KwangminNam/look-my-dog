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
  urlString: string;
}

export default function TypeDogBox({
  label,
  desc,
  src,
  selected,
  urlString
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
  }, [label, params, router, urlString]);

  return (
    <li
      onClick={handleClick}
      className={`
      bg-white
      rounded-xl
      cursor-pointer
      flex
      justify-center
      items-center
      border
      border-solid
      border-blue-900
      p-5
      relative
      hover:shadow-2xl
      ${selected ? 'border border-solid border-red-300' : 'border-neutral-300'}
      `}
      key={label}
    >
      <span>{label}</span>
      <div className="absolute right-2">
        <Image
          alt={label}
          src={`${src}.jpeg`}
          width={65}
          height={65}
          className="rounded-full"
        />
      </div>
    </li>
  );
}
