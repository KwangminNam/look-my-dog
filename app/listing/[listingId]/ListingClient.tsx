'use client';

import Container from "@/app/components/Container";
import DogListCard from "@/app/components/list/DogListCard";
import { SafeListing, SafeUser } from "@/app/types";
import Image from "next/image";

interface ListingClientProps {
  dogList: SafeListing & { user: SafeUser } | any;
  loggedInUser: SafeUser | null;
  allDogList: SafeListing | any;
}

export default function ListingClient({ dogList, loggedInUser, allDogList }: ListingClientProps) {

  console.log(dogList);
  console.log(allDogList);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex-col">
          <div className="flex justify-center">
            <Image
              className="rounded-2xl"
              alt={dogList.desc}
              src={dogList.imageSrc}
              width={700}
              height={200}
            />
          </div>
          <div className="w-[750px] m-auto">
            <div className="py-7 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src={dogList.user?.image || '/images/userPlaceholder.jpg'}
                  alt="사용자"
                  width={50}
                  height={50}
                />
                <div>{dogList.user.name}</div>
              </div>
              <div>
                {dogList.dogType}
              </div>
            </div>
            <div className="py-11 border-y-2 border-neutral-200 mb-10">
              <h2 className="text-4xl mb-3">{dogList.dogName}</h2>
              <h3 className="text-xl">성격</h3>
              <ul className="mt-3 mb-8 flex gap-2">
                {dogList.personality.map((item: any) => (
                  <li key={item} className="w-full mb-2 text-center rounded-xl py-3 border-2 border-neutral-300">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-3xl">{dogList.desc}</p>
              </div>
            </div>
            {/* Reletated DogType */}
            {/*
              관련된 상품 같이 보기
              prisma client에서 allDogList에서 갖고온 데이터와 상세페이지에 있는 dogList 와 filter 로 대조해서 강아지 타입이 같은 리스트를 나열한다. 
              여기서 현재 보고있는 게시물은 리스트에 포함이 안되기 때문에 allDogList.id 와 dogList.id 를 필터 처리 해줌.
            */}
            <h3 className="text-2xl mb-6">다른 {dogList.dogType} 보기</h3>
            <div className="grid grid-cols-4 gap-9 after:mt-9">
              {
                allDogList
                  ?.filter((item: any) => item.dogType === dogList.dogType && item.id !== dogList.id)
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
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
