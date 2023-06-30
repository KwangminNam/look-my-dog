'use client';

import { LostDogTypes } from "@/app/lost/type";
import DogListCard from "./DogListCard";
import { SafeListing } from "@/app/types";

export interface RelatedDogListCardProps {
  getAllLostDogListing?: LostDogTypes[] | SafeListing | any;
  getDogListing?: any;
  dogLabel?: string;
  title: string;
}

export default function RelatedDogListCard({
  getAllLostDogListing,
  getDogListing,
  dogLabel,
  title
}: RelatedDogListCardProps) {

  console.log(getAllLostDogListing)

  const renderRelatedListByTitle = () => {
    if (title === "다른 유기견 보기") {
      return getAllLostDogListing
        ?.filter((item: any) => item.desertionNo !== getDogListing.desertionNo)
        .splice(0, 4)
        .map((item: any) => (
          <DogListCard
            dogType={dogLabel as any}
            dogName={item.dogName}
            male={item.sexCd}
            imageSrc={item.filename}
            id={item.id}
            paramsName='lost'
          />
        ))
    } else {
      return getAllLostDogListing
        ?.filter((item: any) => item.dogType === getDogListing.dogType && item.id !== getDogListing.id)
        .map((item: any) => (
          // <>
          //   <div>{item.dogType}</div>
          //   <div>{item.dogName}</div>
          // </>
          <DogListCard
            dogType={item.dogType}
            dogName={item.dogName}
            male={item.male}
            imageSrc={item.imageSrc}
            id={item.id}
            paramsName='listing'
          />
        ))
    }
  }

  console.log(getDogListing)
  return (
    <>
      <h3 className="text-2xl mb-6">{title === '다른 유기견 보기' ? "다른 유기견 보기" : title}</h3>
      <div className="grid grid-cols-4 gap-9 after:mt-9">
        {renderRelatedListByTitle()}
      </div>
    </>
  )
}
