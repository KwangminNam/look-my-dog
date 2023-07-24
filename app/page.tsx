import Image from "next/image";
import getListing, { IListingParmas } from "./actions/getDogListing";
import EmptyState from "./components/EmptyState";
import DogListCard from "./components/list/DogListCard";
import getLoggedInUser from "./actions/getLoginedUser";
import Container from "./components/Container";
import HeroBox from "./components/HeroBox";
import Link from "next/link";

interface HomeProps {
  searchParams: IListingParmas;
}

export default async function Home({ searchParams }: HomeProps) {
  const getDogList = await getListing(searchParams);
  const getLoggedinuser = await getLoggedInUser();
  // const getLostDogListt = await getLostDogList();
  const emptyList = getDogList?.length === 0;

  console.log("WELCOME TO LOOK MY DOG!");

  if (emptyList) {
    return <EmptyState loggedInUser={getLoggedinuser} title="등록된 리스트가 없습니다." showButton />;
  }

  return (
    <div>
      <HeroBox getLoggedinuser={getLoggedinuser} />
      <Container>
        <>
          <h2 className="text-4xl text-center">강아지 포스트</h2>
          <section
            className="
            pt-20
            grid-cols-1
            sm:grid-cols-2
            grid
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            md:grid-cols-3
            gap-8
            "
          >
            {getDogList?.slice(0, 8).map((item: any) => (
              <DogListCard
                loggedInUser={getLoggedinuser}
                id={item.id}
                key={item.id}
                dogName={item.dogName}
                dogAge={item.dogAge}
                dogType={item.dogType}
                weight={item.weight}
                dogMonth={item.dogMonth}
                male={item.male}
                personality={item.personality}
                imageSrc={item.imageSrc}
                paramsName="listing"
                showLikeButton
              />
            ))}
          </section>
        </>
        <div className="flex justify-center pt-16">
          <Link href="/doglist" className="text-xl underline">
            더 많은 강아지보기
          </Link>
        </div>
      </Container>
    </div>
  );
}
