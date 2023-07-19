import getLostDogList from "../actions/getLostDogListing";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";
import LostDogClient from "./LostDogClient";
import { LostDogTypes } from "./type";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // read route params
  return {
    title: "룩마독 | 유기견 확인"
  };
}

export default async function LostDog() {
  const getLostDogListing: LostDogTypes[] = await getLostDogList();

  const emptyList = getLostDogListing.length === 0;

  if (emptyList) {
    return (
      <Container>
        <EmptyState title="유기견 리스트가 없습니다" />
      </Container>
    );
  }

  return (
    <Container>
      <PageTitle title='유기견' />
      <PageContainer>
        <LostDogClient lostGetDogList={getLostDogListing} />
      </PageContainer>
    </Container>
  );
}
