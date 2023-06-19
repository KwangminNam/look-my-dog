import Image from "next/image";
import getListing, { IListingParmas } from "./actions/getDogListing";
import EmptyState from "./components/EmptyState";
import DogListCard from "./components/list/DogListCard";
import getLoggedInUser from "./actions/getLoginedUser";
import Container from "./components/Container";

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
    <Container>
      <h2 className="text-4xl text-center pb-11">강아지 자랑하기</h2>
      <div className="grid grid-cols-6 gap-9">
        {getDogList?.map((item: any) => (
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
    </Container>
  );
}
