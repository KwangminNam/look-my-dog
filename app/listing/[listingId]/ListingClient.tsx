'use client';

import Container from "@/app/components/Container";
import RelatedDogListCard from "@/app/components/list/RelatedDogListCard";
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
            <RelatedDogListCard 
                getAllLostDogListing={allDogList}
                title={`다른 ${dogList.dogType} 보기`}
                getDogListing={dogList}
              />
          </div>
        </div>
      </div>
    </Container>
  )
}
