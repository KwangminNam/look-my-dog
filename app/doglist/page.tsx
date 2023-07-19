import getLoggedInUser from "../actions/getLoginedUser";
import getListing, { IListingParmas } from "../actions/getDogListing";
import EmptyState from "../components/EmptyState";
import Container from "../components/Container";
import DogListCard from "../components/list/DogListCard";
import TypeDogs from "../components/TypeDogs";
import { Metadata, ResolvingMetadata } from "next";
import PageTitle from "../components/PageTitle";
import PageContainer from "../components/PageContainer";

interface DogListProps {
  searchParams: IListingParmas;
}


export async function generateMetadata(): Promise<Metadata> {
  // read route params
  return {
    title: "룩마독 | 강아지 목록"
  };
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
        <EmptyState title="텅 비었습니다!" showButton loggedInUser={getLoggedInuser} />
      </>
    );
  }

  return (
    <Container>
      <TypeDogs />
      <PageTitle title='모든 강아지' />
      <PageContainer>
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
      </PageContainer>
    </Container>
  );
}
