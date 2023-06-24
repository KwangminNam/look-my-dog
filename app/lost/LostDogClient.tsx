"use client";

import Container from "../components/Container";
import DogListCard from "../components/list/DogListCard";
import { LostDogTypes } from "./type";

export default function LostDogClient({ lostGetDogList }: any) {
  console.log(lostGetDogList);

  let test = lostGetDogList.map((item: any) => item.kindCd).join("");

  return (
    <>
      {lostGetDogList.map((item: LostDogTypes) => (
        <DogListCard
          imageSrc={item.filename}
          male={item.sexCd}
          dogType={item.kindCd.replaceAll("[개]", "[강아지]")}
          paramsName="lost"
          id={item.desertionNo}
          dogMonth={item.age}
          lostDogStatus={item.processState}
        />
      ))}
    </>
  );
}
