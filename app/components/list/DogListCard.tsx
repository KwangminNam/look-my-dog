"use client";

import Image from "next/image";
import { useMemo } from "react";
import { GiMale, GiFemale } from "react-icons/gi";
import LikeButton from "../LikeButton";
import { SafeUser } from "@/app/types";
import Link from "next/link";
import StatusTag from "../tag/StatusTag";
import Button from "../Button";

export interface DogListCardProps {
  id: string;
  desc?: string;
  imageSrc: string;
  dogType: string;
  dogAge?: number;
  dogName?: string;
  weight?: number;
  dogMonth?: string | null;
  male: string;
  personality?: string[];
  loggedInUser?: SafeUser | null;
  paramsName?: string;
  lostDogStatus?: string;
  disabled?: boolean;
  showLikeButton?: boolean;
  onAction?: (id: string) => void;
  edit?: boolean;
}

export default function DogListCard({
  desc,
  imageSrc,
  dogType,
  id,
  male,
  weight,
  dogAge,
  dogMonth,
  dogName,
  lostDogStatus,
  loggedInUser,
  paramsName,
  disabled,
  showLikeButton,
  edit,
  onAction
}: DogListCardProps) {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const checkDel = confirm('게시글을 삭제하시겠습니까?');

    if (checkDel) {
      e.stopPropagation();
      onAction?.(id);
    } else {
      return;
    }
  };

  const maleLabel = useMemo(() => {
    switch (male) {
      case "남자":
      case "M":
        return <GiMale color="blue" />;

      case "여자":
      case "F":
        return <GiFemale color="red" />;
      default:
        return male;
    }
  }, [male]);

  return (
    <article className="flex flex-col relative border-[1px] border-neutral-200 rounded-xl p-3">
      <Link href={`/${paramsName}/${id}`} shallow className="group">
        <div className="flex flex-col gap-2 w-full">
          <div
            className={`
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
            `}
          >
            <Image
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              placeholder="blur"
              fill
              className={`
              cursor-pointer
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110
              transition

              `
              }
              src={imageSrc || "/images/dog-placeholder.png"}
              alt="Listing"
            />
            {lostDogStatus && <StatusTag label={lostDogStatus} />}
          </div>
          <div className="font-semibold text-sm lg:text-lg flex-col md:flex gap-1">
            <p>{dogType}</p>
            {dogName && <p className="text-neutral-400">이름:<span className="text-neutral-600">{dogName}</span></p>}
          </div>

          <div className="font-light text-neutral-500 flex items-center">
            {dogAge && <div>나이:{dogAge}살</div>}
            {dogMonth && <div>{dogMonth}</div>}
            <span className="text-xl">{maleLabel || male}</span>
          </div>
        </div>
      </Link>

      {showLikeButton && (
        <LikeButton currentUser={loggedInUser} listingId={id} />
      )}

      {onAction && (
        <Button
          disabled={disabled}
          onClick={handleDelete}
          label="게시글 삭제하기"
        />
      )}
      {edit && (
        <Link
          href={`edit/${id}`}
          className="
          flex
          items-center
          justify-center
          w-full
          h-12
          disabled:opacity-40
          disabled:cursor-not-allowed
          font-light
          relative
          rounded-md
          text-center
          mt-1
          text-lg
          md:text-2xl
          bg-[#28a649]
          text-white"
          >
            수정하기
          </Link>
      )}
    </article>
  );
}
