"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavortie from "../hooks/useFav";

interface HeaderButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}


export default function LikeButton({listingId,currentUser}:HeaderButtonProps) {

  const {hasFav,toggleFav} = useFavortie({
    listingId,
    currentUser
  });

  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={toggleFav}
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={`${hasFav ? "fill-rose-500 " : "fill-neutral-500/70"}`}
      />
    </div>
  );
}
