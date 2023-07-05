import getLostDogList from "../actions/getLostDogListing";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
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
      <h2 className="text-4xl text-center pb-11">유기견</h2>
      <section className="
            pt-20
            grid-cols-1
            sm:grid-cols-2
            grid
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            md:grid-cols-3
            gap-8">
        <LostDogClient lostGetDogList={getLostDogListing} />
      </section>
    </Container>
  );
}
