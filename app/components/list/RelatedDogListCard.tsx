'use client';

import { LostDogTypes } from "@/app/lost/type";
import DogListCard from "./DogListCard";
import { SafeListing } from "@/app/types";
import EmptyRelatedList from "./EmptyRelatedList";
import Validation from "../Validation";

export interface RelatedDogListCardProps {
  getAllDogListing?: SafeListing[] ;
  getAlLostDogListing?:LostDogTypes[];
  getDogListing?: SafeListing;
  dogLabel?: string;
  title: string;
  getLostDogListing?:LostDogTypes;
}

export default function RelatedDogListCard({
  getAllDogListing,
  getLostDogListing,
  getDogListing,
  dogLabel,
  getAlLostDogListing,
  title
}: RelatedDogListCardProps) {

  console.log(getAlLostDogListing);
  console.log(getLostDogListing);

  const renderRelatedListByTitle = () => {
    if (title === "다른 유기견 보기") {
      const filteredList = getAlLostDogListing
        ?.filter((item) => item.kindCd === getLostDogListing?.kindCd && item.desertionNo !== getLostDogListing.desertionNo)
        .splice(0, 4);
  
      if (filteredList?.length === 0) {
        return <EmptyRelatedList title="🐶 같은 종의 유기견이 없습니다."/>
      }
  
      return (
        <>
          {filteredList?.map((item) => (
            <DogListCard
              dogType={dogLabel as any}
              male={item.sexCd}
              imageSrc={item.popfile}
              id={item.desertionNo}
              paramsName="lost"
              key={item.desertionNo}
            />
          ))}
        </>
      );
    } else {
      const filteredList = getAllDogListing
        ?.filter((item) => item.dogType === getDogListing?.dogType && item.id !== getDogListing?.id)
        .splice(0, 4);
  
      if (filteredList?.length === 0) {
        return <EmptyRelatedList title="🐶 같은 종이 없습니다."/>
      }
  
      return (
        <>
          {filteredList?.map((item: any) => (
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
