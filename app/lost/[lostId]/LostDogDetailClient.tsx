'use client';

import Container from "@/app/components/Container";
import DogListCard from "@/app/components/list/DogListCard";
import Image from "next/image";
import { LostDogTypes } from "../type";


interface LostDogDetailClientProps {
  getDetailLostDog: LostDogTypes;
  getAllLostDogListing: LostDogTypes[];
}

export default function LostDogDetailClient({ getDetailLostDog, getAllLostDogListing }: LostDogDetailClientProps) {

  console.log(getDetailLostDog.kindCd.replaceAll('[개]',''))

  const dogLabel = getDetailLostDog.kindCd.replaceAll('[개]','')

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex-col">
          <div className="flex justify-center">
            <Image
              className="rounded-2xl"
              alt={getDetailLostDog.filename}
              src={getDetailLostDog.filename}
              width={700}
              height={200}
            />
          </div>
          <div className="w-[750px] m-auto">
            <div className="py-11 border-y-2 border-neutral-200 mb-10">
              <h2 className="text-4xl mb-3">{dogLabel}</h2>
              <div>
                <p className="text-3xl">{getDetailLostDog.age}</p>
              </div>
            </div>
            <div>
              특징{getDetailLostDog.specialMark}
              보호센터:{getDetailLostDog.careAddr}
              유기 된날:{getDetailLostDog.happenDt}
              찾은곳:{getDetailLostDog.happenPlace}
              현재 상태:{getDetailLostDog.processState}
            </div>
            <div>
              <a href={`tel:${getDetailLostDog.careTel}`}>보호소 전화하기</a>
            </div>
            {/* Reletated DogType */}
            {/*
              관련된 상품 같이 보기
              prisma client에서 allDogList에서 갖고온 데이터와 상세페이지에 있는 dogList 와 filter 로 대조해서 강아지 타입이 같은 리스트를 나열한다. 
              여기서 현재 보고있는 게시물은 리스트에 포함이 안되기 때문에 allDogList.id 와 dogList.id 를 필터 처리 해줌.
            */}
            <h3 className="text-2xl mb-6">다</h3>
            <div className="grid grid-cols-4 gap-9 after:mt-9">
              {
                getAllLostDogListing
                  .filter((item)=> item.desertionNo !== getDetailLostDog.desertionNo)
                  .splice(0, 4)
                  .map((item: any) => (
                    <DogListCard
                      dogType={dogLabel}
                      dogName={item.dogName}
                      male={item.sexCd}
                      imageSrc={item.filename}
                      id={item.id}
                      paramsName='listing'
                    />
                  ))
              }
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}
