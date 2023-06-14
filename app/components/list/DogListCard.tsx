"use client";

import Image from "next/image";
import { useMemo } from "react";
import { GiMale, GiFemale } from "react-icons/gi";
import { AiOutlineLike } from "react-icons/ai";
import LikeButton from "../LikeButton";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface DogListCardProps {
  id?: any;
  desc?: string;
  imageSrc: string;
  dogType: string;
  dogAge?: number;
  dogName: string;
  weight?: number;
  dogMonth?: string;
  male: string;
  personality?: string[];
  loggedInUser?:SafeUser | null;
}

export default function DogListCard({
  desc,
  imageSrc,
  dogType,
  id,
  male,
  weight,
  personality = [],
  dogAge,
  dogMonth,
  dogName,
  loggedInUser
}: DogListCardProps) {
  
   const router = useRouter();

   const maleLabel = useMemo(() => {
    switch (male) {
      case "남자":
        return <GiMale />;
      case "여자":
        return <GiFemale />;
    }
  }, [male]);

    return (
      <div 
      onClick={() => router.push(`/listing/${id}`)} 
      className=""
    >
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
        </div>
        <div>
          <LikeButton currentUser={loggedInUser} listingId={id}/>
        </div>
        <div className="font-semibold text-lg flex gap-3">
          <p>{dogType}</p>
          <p className="text-neutral-400">이름은:{dogName}</p>
        </div>
        <div className="font-light text-neutral-500 flex">
          <div>나이는:{dogAge}살</div>
          {dogMonth && <div>{dogMonth}</div>}
          <div>성별은:{maleLabel}</div>
        </div>
      </div>
    </div>
    )
  }

