"use client";

import Image from "next/image";
import { useMemo } from "react";
import { GiMale, GiFemale } from "react-icons/gi";
import {AiOutlineLike } from "react-icons/ai";



interface DogListCardProps {
  id:any;
  desc: string;
  imageSrc: string;
  dogType: string;
  dogAge: number;
  dogName: string;
  weight: number;
  dogMonth?: string;
  male: string;
  personality: string[];
}

export default function DogListCard({
  desc,
  imageSrc,
  dogType,
  male,
  weight,
  personality = [],
  dogAge,
  dogMonth,
  dogName
}: DogListCardProps) {
  const maleLabel = useMemo(() => {
    switch (male) {
      case "남자":
        return <GiMale />;
      case "여자":
        return <GiFemale/>  
    }
  }, [male]);

  return (
    <div
      className="
        flex
        flex-col
        border-solid
        border-2
        border-neutral-400
        rounded-md
      "
    > 
      <h4>{dogName}</h4><div>{dogType}</div>
      <span>{maleLabel}</span>
      <div>성향은 {personality.map(item => <div>{item}</div>)}</div>
      <p>나이는 : {dogAge}</p>
      {dogMonth && <span>{dogMonth} 입니다.</span>}
      <span>설명은 {desc}</span>
      <button>좋아요 <AiOutlineLike size={20}/></button>
      <div>몸무게는 {weight}</div>
      <Image src={imageSrc} alt={dogName} width={150} height={200}/>
    </div>
  );
}
