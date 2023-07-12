'use client';

import { LostDogTypes } from "@/app/lost/type";
import DogListCard from "./DogListCard";
import { SafeListing } from "@/app/types";
import EmptyRelatedList from "./EmptyRelatedList";

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
  console.log(getDogListing);
  
  const renderRelatedListByTitle = () => {
    if (title === "다른 유기견 보기") {
      const filteredList = getAllLostDogListing
        ?.filter((item: any) => item.kindCd === getDogListing.kindCd && item.desertionNo !== getDogListing.desertionNo)
        .splice(0, 4);
  
      if (filteredList.length === 0) {
        return <EmptyRelatedList title="🐶 같은 종의 유기견이 없습니다."/>
      }
  
      return (
        <>
          {filteredList.map((item: any) => (
            <DogListCard
              dogType={dogLabel as any}
              dogName={item.dogName}
              male={item.sexCd}
              imageSrc={item.popfile}
              id={item.id}
              paramsName="lost"
              key={item.id}
            />
          ))}
        </>
      );
    } else {
      const filteredList = getAllLostDogListing
        ?.filter((item: any) => item.dogType === getDogListing.dogType && item.id !== getDogListing.id)
        .splice(0, 4);
  
      if (filteredList.length === 0) {
        return <EmptyRelatedList title="🐶 같은 종이 없습니다."/>
      }
  
      return (
        <>
          {filteredList.map((item: any) => (
            <DogListCard
              dogType={item.dogType}
              dogName={item.dogName}
              male={item.male}
              imageSrc={item.imageSrc}
              id={item.id}
              paramsName="listing"
              key={item.id}
            />
          ))}
        </>
      );
    }
  };
  
  console.log(getDogListing)
  return (
    <>
      <h3 className="text-2xl mb-6">{title === '다른 유기견 보기' ? "다른 유기견 보기" : title}</h3>
      <div
        className="
            grid 
            grid-cols-1
            lg:grid-cols-4
            md:grid-cols-3
            md:gap-9
            after:mt-9
            ">
        {renderRelatedListByTitle()}
      </div>
    </>
  )
}
