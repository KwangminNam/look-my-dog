"use client";

import Container from "@/app/components/Container";
import RelatedDogListCard from "@/app/components/list/RelatedDogListCard";
import { SafeListing, SafeUser } from "@/app/types";
import Image from "next/image";
import { useMemo } from "react";
import { GiFemale, GiMale } from "react-icons/gi";

interface ListingClientProps {
  dogList: (SafeListing & { user: SafeUser }) | any;
  loggedInUser: SafeUser | null;
  allDogList: SafeListing | any;
}

export default function ListingClient({
  dogList,
  loggedInUser,
  allDogList
}: ListingClientProps) {

  const maleLabel = useMemo(() => {
    switch (dogList.male) {
      case "남자":
      case "M":
        return <GiMale color="blue" />;

      case "여자":
      case "F":
        return <GiFemale color="red" />;
      default:
        return dogList.male;
    }
  }, [dogList.male]);

  const date = new Date(dogList.createdAt);


  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex-col">
          <div className="flex justify-center">
            <Image
              className="rounded-2xl"
              alt={dogList.desc}
              src={dogList.imageSrc || "/images/dog-placeholder.png"}
              width={700}
              height={200}
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </div>
          <div className="md:w-[750px] m-auto">
            <div className="py-7 md:flex md:flex-row justify-between items-center flex-col">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src={dogList.user?.image || '/images/userPlaceholder.jpg'}
                  alt="사용자"
                  width={50}
                  height={50}
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  placeholder="blur"
                />
                <span>{dogList.user.name || dogList.user.email}</span>
              </div>
              <span>게시글 등록날짜:{formattedDate}</span>
            </div>
            <div className="py-11 border-y-2 border-neutral-200 mb-10">
              <h2 className="text-4xl flex items-center gap-3">
                {dogList.dogName}{" "}
                <span className="text-xl text-neutral-500">
                  ({dogList.dogType})
                </span>
                <span>{maleLabel}</span>
              </h2>
              <span className="text-xl text-neutral-500">
                {dogList.dogAge}살 {dogList.dogMonth && dogList.dogMonth}
              </span>
              <div className="my-10">
                <h3 className="text-xl">성격</h3>
                <ul className="mt-3 mb-8 md:flex gap-2">
                  {dogList.personality.map((item: any) => (
                    <li
                      key={item}
                      className="w-full mb-2 text-center rounded-xl py-3 border-2 border-neutral-300"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-2xl text-stone-500">{dogList.desc}</p>
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
  );
}
