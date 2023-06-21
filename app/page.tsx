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

  // console.log(getLostDogListt);

  if (emptyList) {
    return <EmptyState title="텅 비었습니다!" showButton />;
  }

  return (
    <>
      <HeroBox />
      <Container>
        <div className="grid grid-cols-4 gap-9 pb-20 pt-44">
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
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/doglist" className="text-2xl underline">
            더 많은 강아지보기
          </Link>
        </div>
      </Container>
    </>
  );
}
