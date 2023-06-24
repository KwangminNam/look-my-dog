"use client";

import Image from "next/image";
import { useMemo } from "react";
import { GiMale, GiFemale } from "react-icons/gi";
import LikeButton from "../LikeButton";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StatusTag from "../tag/StatusTag";
import Button from "../Button";

export interface DogListCardProps {
  id?: any;
  desc?: string;
  imageSrc: string;
  dogType: string;
  dogAge?: number;
  dogName?: string;
  weight?: number;
  dogMonth?: string;
  male: string;
  personality?: string[];
  loggedInUser?: SafeUser | null;
  paramsName?: string;
  lostDogStatus?: string;
  disabled?: boolean;
  onAction?: (id: string) => void;
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
  onAction
}: DogListCardProps) {
  const router = useRouter();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onAction?.(id);
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
    <article className="flex flex-col relative">
      <Link href={`/${paramsName}/${id}`} shallow className="group">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
          >
            <Image
              fill
              className="
              cursor-pointer
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110
              transition
            "
              src={imageSrc}
              alt="Listing"
            />
            {lostDogStatus && <StatusTag label={lostDogStatus} />}
          </div>
          <div className="font-semibold text-lg flex gap-3">
            <p>{dogType}</p>
            {dogName && <p className="text-neutral-400">이름은:{dogName}</p>}
          </div>

          <div className="font-light text-neutral-500 flex items-center">
            {dogAge && <div>나이는:{dogAge}살</div>}
            {dogMonth && <div>{dogMonth}</div>}
            <div>{maleLabel || male}</div>
          </div>
        </div>
      </Link>
  
        <LikeButton currentUser={loggedInUser} listingId={id} />

      {onAction && (
        <Button
          disabled={disabled}
          onClick={handleDelete}
          label="게시글 삭제하기"
        />
      )}
    </article>
  );
}
