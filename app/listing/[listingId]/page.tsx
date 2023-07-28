import getListById from "@/app/actions/getListById";
import ListingClient from "./ListingClient";
import getLoggedInUser from "@/app/actions/getLoginedUser";
import getListing from "@/app/actions/getDogListing";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { listingId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const dogList = await getListById(params);
  

  // optionally access and extend (rather than replace) parent metadata
  return {
    title: `룩마독 | 상세페이지 | ${dogList?.dogType} | ${dogList?.dogName}`,
  }
}
interface IParams {
  listingId?: string;
}

// useParams() 같은 훅으로 안갖고오는 이유는 서버컴포넌트이기때문에입니다 . 서버컴포넌트에 파라미터에 url parmeter값을 갖고올수있어서 아래와 같은 방식으로 진행합니다.
export default async function List({ params }: { params: IParams }) {
  const dogList = await getListById(params);
  const allDogList = await getListing(params as any);

  console.log(dogList);

  return (
      <ListingClient
        dogList={dogList}
        allDogList={allDogList}
      />
  );
}
