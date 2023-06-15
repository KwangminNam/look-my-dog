import getLostDogList from "@/app/actions/getLostDogListing";
import LostDogDetailClient from "./LostDogDetailClient";
import { LostDogTypes } from "../type";
import { Metadata, ResolvingMetadata } from 'next';
type Props = {
  params: { lostId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata({ params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.lostId
 
  // fetch data
  const getAllLostDogListing:LostDogTypes[] = await getLostDogList()
  const getDetailLostDog:LostDogTypes | undefined = getAllLostDogListing.find((item)=> item.desertionNo === params.lostId);
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: "룩마독 | 유기견 | " +getDetailLostDog?.kindCd,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

interface IParams {
  lostId?: string;
}

export default async function page({ params }: { params: IParams }) {

  const getAllLostDogListing:LostDogTypes[] = await getLostDogList()
  const getDetailLostDog:LostDogTypes | undefined = getAllLostDogListing.find((item)=> item.desertionNo === params.lostId);

  console.log(params.lostId);
  console.log(getDetailLostDog);

  if(!getDetailLostDog){
    return <div>EMPTY</div>
  }

  return (
    <LostDogDetailClient getDetailLostDog={getDetailLostDog} getAllLostDogListing={getAllLostDogListing} />
  )
}
