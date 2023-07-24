"use client";

import DogListCard from "../components/list/DogListCard";
import { LostDogTypes } from "./type";

interface LostDogClientProps {
  lostGetDogList: LostDogTypes[];
}

export default function LostDogClient({ lostGetDogList }: LostDogClientProps) {
  
  return (
    <>
      {lostGetDogList.map((item) => (
        <DogListCard
          imageSrc={item.popfile}
          male={item.sexCd}
          dogType={item.kindCd.replaceAll("[개]", "[강아지]")}
          paramsName="lost"
          id={item.desertionNo}
          dogMonth={item.age}
          lostDogStatus={item.processState}
          key={item.desertionNo}
        />
      ))}
    </>
  );
}
