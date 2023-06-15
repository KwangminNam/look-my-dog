'use client';

import DogListCard from "../components/list/DogListCard";
import { LostDogTypes } from "./type";

export default function LostDogClient({ lostGetDogList }: any) {

  console.log(lostGetDogList);

  let test = lostGetDogList.map((item:any)=> item.kindCd).join("");

  const replacements = [
    { original: "[개]", replace: "" },
    { original: "[고양이]", replace: "" },
  ];

  for (const { original, replace } of replacements) {
    test = test.split(original).join(replace);
  }
;

  return (
    <>
      {lostGetDogList.map((item: LostDogTypes) => (
        <DogListCard
          imageSrc={item.filename}
          male={item.sexCd}
          dogType={item.kindCd.replaceAll('[개]', '[강아지]')}
          paramsName="lost"
          id={item.desertionNo}
          dogMonth={item.age}
        />
      ))}
    </>
  )
}
