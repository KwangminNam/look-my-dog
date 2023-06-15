'use client';

import DogListCard from "../components/list/DogListCard";

export default function LostDogClient({ lostGetDogList }: any) {

  console.log(lostGetDogList);

  return (
    <>
      {lostGetDogList.map((item: any) => (
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
