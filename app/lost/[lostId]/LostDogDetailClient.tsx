"use client";

import Container from "@/app/components/Container";
import DogListCard from "@/app/components/list/DogListCard";
import Image from "next/image";
import { LostDogTypes } from "../type";
import RelatedDogListCard from "@/app/components/list/RelatedDogListCard";
import { GiFemale, GiMale } from "react-icons/gi";
import { BsTelephoneFill } from "react-icons/bs";
import { useMemo } from "react";

interface LostDogDetailClientProps {
  getDetailLostDog: LostDogTypes;
  getAllLostDogListing: LostDogTypes[];
}

export default function LostDogDetailClient({
  getDetailLostDog,
  getAllLostDogListing
}: LostDogDetailClientProps) {
  const dogLabel = getDetailLostDog.kindCd.replaceAll("[개]", "");

  console.log(getDetailLostDog);
  console.log(getAllLostDogListing);

  const maleLabel = useMemo(() => {
    switch (getDetailLostDog.sexCd) {
      case "남자":
      case "M":
        return <GiMale color="blue" />;

      case "여자":
      case "F":
        return <GiFemale color="red" />;
      default:
        return getDetailLostDog.sexCd;
    }
  }, [getDetailLostDog.sexCd]);

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
            <div className="py-11">
              <h2 className="text-4xl mb-3 flex gap-2">
                {dogLabel} <span>{maleLabel}</span>
              </h2>
              <div>
                <p className="text-3xl">{getDetailLostDog.age}</p>
                <span className="text-neutral-400">상태: {getDetailLostDog.processState}</span>
              </div>
            </div>
            <div className="py-11 border-y-2 border-neutral-200 mb-10">
              <div>특징{getDetailLostDog.specialMark}</div>
              <div>보호센터:{getDetailLostDog.careAddr}</div>
              <div>유기 된날:{getDetailLostDog.happenDt}</div>
              <div>찾은곳:{getDetailLostDog.happenPlace}</div>
              <div className="border-2 rounded-md p-4 border-[#34C759]">
                <a
                  className="
                  block
                  text-[#34C759]
                  text-center
                  relative
                  "
                  href={`tel:${getDetailLostDog.careTel}`}
                >
                  보호소 전화하기 {getDetailLostDog.careTel}
                  <BsTelephoneFill size={25} color="#34C759" className="absolute top-[-50%] translate-y-1/2 left-52" />
                </a>
              </div>
            </div>
            {/* Reletated DogType */}
            {/*
              관련된 상품 같이 보기
              prisma client에서 allDogList에서 갖고온 데이터와 상세페이지에 있는 dogList 와 filter 로 대조해서 강아지 타입이 같은 리스트를 나열한다. 
              여기서 현재 보고있는 게시물은 리스트에 포함이 안되기 때문에 allDogList.id 와 dogList.id 를 필터 처리 해줌.
            */}
            <RelatedDogListCard
              getAllLostDogListing={getAllLostDogListing}
              getDogListing={getDetailLostDog}
              dogLabel={dogLabel}
              title="다른 유기견 보기"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
