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

  // const handleQuery = () => {
  //   let query = {};

  //   if (params) {
  //     query = qs.parse(params.toString());
  //   }

  //   const updateQuery: any = {
  //     ...query,
  //     puppy: type
  //   };

  //   // select가 일어나면 url 파라미터에 다른것들과 중복되지않게 클릭이 되면 클릭된 것 제외 삭제 시킴 / 한번 더누르면 선택된것도 삭제
  //   if (params?.get("puppy") === type) {
  //     delete updateQuery.puppy;
  //   }

  //   const url = qs.stringifyUrl(
  //     {
  //       url: "/",
  //       query: updateQuery
  //     },
  //     { skipNull: true }
  //   );

  //   router.push(url);
  // };
  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      puppy: urlString
    };

    if (params?.get("puppy") === urlString) {
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
