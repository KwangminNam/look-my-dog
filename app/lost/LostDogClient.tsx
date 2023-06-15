'use client';

import DogListCard from "../components/list/DogListCard";
import { LostDogTypes } from "./type";

export default function LostDogClient({ lostGetDogList }:any) {

  console.log(lostGetDogList);

  return (
    <>
      {lostGetDogList.map((item: LostDogTypes) => (
        <DogListCard
          imageSrc={item.filename}
          male={item.sexCd}
          dogType={item.kindCd}
          paramsName="lost"
          id={item.desertionNo}
        />
      ))}
    </>
  )
}
