"use client";

import DogListCard from "../components/list/DogListCard";

export default function FavoriteClient({ favoriteList }: any) {
  return (
    <>
      {favoriteList.map((item:any) => (
        <DogListCard
          id={item.id}
          dogType={item.dogType}
          dogAge={item.dogAge}
          weight={item.weight}
          male={item.male}
          imageSrc={item.imageSrc}
          paramsName="listing"
        />
      ))}
    </>
  );
}
