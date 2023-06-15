import getLostDogList from "@/app/actions/getLostDogListing";
import LostDogDetailClient from "./LostDogDetailClient";
import { LostDogTypes } from "../type";

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
