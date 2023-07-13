"use client";

import DogListCard from "../components/list/DogListCard";
import { SafeListing, SafeUser } from "../types";

interface FavoriteClient{
  favoriteList:SafeListing[];
  loggedInUser:SafeUser;
}

export default function FavoriteClient({ favoriteList, loggedInUser }: FavoriteClient) {
  return (
    <>
      {favoriteList.map((favItem) => (
        <DogListCard
          showLikeButton
          id={favItem.id}
          dogType={favItem.dogType}
          lostDogStatus={favItem.dogName}
          dogAge={favItem.dogAge}
          weight={favItem.weight}
          male={favItem.male}
          imageSrc={favItem.imageSrc}
          paramsName="listing"
          loggedInUser={loggedInUser}
          key={favItem.id}
          dogName={favItem.dogName}
        />
      ))}
    </>
  );
}
