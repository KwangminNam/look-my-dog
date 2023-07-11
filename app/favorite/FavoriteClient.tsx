"use client";

import DogListCard from "../components/list/DogListCard";
import { SafeListing, SafeUser } from "../types";

interface FavoriteClient{
  favoriteList:SafeListing;
  loggedInUser:SafeUser;
}

export default function FavoriteClient({ favoriteList, loggedInUser }: any) {1
  return (
    <>
      {favoriteList.map((item: any) => (
        <DogListCard
          showLikeButton
          id={item.id}
          dogType={item.dogType}
          lostDogStatus={item.dogName}
          dogAge={item.dogAge}
          weight={item.weight}
          male={item.male}
          imageSrc={item.imageSrc}
          paramsName="listing"
          loggedInUser={loggedInUser}
        />
      ))}
    </>
  );
}
