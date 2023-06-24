import getLostDogList from "../actions/getLostDogListing";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import LostDogClient from "./LostDogClient";
import { LostDogTypes } from "./type";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { lostId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  // read route params
  const id = params.lostId;
  return {
    title: "룩마독 | 유기견 확인"
  };
}

export default async function LostDog() {
  const getLostDogListt: LostDogTypes[] = await getLostDogList();

  const emptyList = getLostDogListt.length === 0;

  if (emptyList) {
    return (
      <Container>
        <EmptyState title="유기견 리스트가 없습니다" />
      </Container>
    );
  }

  return (
    <Container>
      <div
        className=" 
        max-w=[2250px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4"
      >
        <h2 className="text-4xl text-center pb-11">유기견</h2>
        <div className="grid grid-cols-6 gap-9">
          <LostDogClient lostGetDogList={getLostDogListt} />
        </div>
      </div>
    </Container>
  );
}
