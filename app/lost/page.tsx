import getLostDogList from "../actions/getLostDogListing";
import LostDogClient from "./LostDogClient";

export default async function LostDog() {

  const getLostDogListt = await getLostDogList();

  return (
    <div
      className=" 
        max-w=[2250px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4">
      <div className="grid grid-cols-6 gap-9">
        <LostDogClient lostGetDogList={getLostDogListt} />
      </div>
    </div>

  )
}