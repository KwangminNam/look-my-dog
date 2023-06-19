"use client";

import Container from "../components/Container";
import DogListCard from "../components/list/DogListCard";
import { SafeListing, SafeUser } from "../types";

interface MyPostListClinetProps {
  loggedInUser?: SafeUser | null;
  dogList?: SafeListing[];
}

export default function MyPostListClinet({
  loggedInUser,
  dogList
}: MyPostListClinetProps) {
  return (
    <Container>
      <div
        className="
      mt-10
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8
    "
      >
        {dogList?.map((item) => (
          <DogListCard
            paramsName="listing"
            id={item.id}
            imageSrc={item.imageSrc}
            male={item.male}
            dogType={item.dogType}
          />
        ))}
      </div>
    </Container>
  );
}
