import getLoggedInUser from "../actions/getLoginedUser";
import getListing, { IListingParmas } from "../actions/getDogListing";
import EmptyState from "../components/EmptyState";
import Container from "../components/Container";
import DogListCard from "../components/list/DogListCard";
import TypeDogs from "../components/TypeDogs";

interface DogListProps {
  searchParams: IListingParmas;
}

export default async function DogList({ searchParams }: DogListProps) {
  const getLoggedInuser = await getLoggedInUser();
  const getDogList = await getListing(searchParams);
  const emptyList = getDogList?.length === 0;

  if (emptyList) {
    return (
      <>
        <Container>
          <TypeDogs />
        </Container>
        <EmptyState title="텅 비었습니다!" showButton />
      </>
    );
  }

  return (
    <Container>
      <TypeDogs />
      <h2 className="text-4xl text-center pb-11">나의 강아지</h2>
      <div className="            pt-20
            grid-cols-1
            sm:grid-cols-2
            grid
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            md:grid-cols-3
            gap-8">
        {getDogList?.map((item: any) => (
          <DogListCard
            loggedInUser={getLoggedInuser}
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
