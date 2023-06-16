import Image from "next/image";
import getListing, { IListingParmas } from "./actions/getDogListing";
import EmptyState from "./components/EmptyState";
import DogListCard from "./components/list/DogListCard";
import getLoggedInUser from "./actions/getLoginedUser";

interface HomeProps {
  searchParams:IListingParmas
}

export default async function Home({searchParams}:HomeProps) {

  const getDogList = await getListing(searchParams);
  const getLoggedinuser = await getLoggedInUser();
  // const getLostDogListt = await getLostDogList();
  const emptyList = getDogList?.length === 0;

  // console.log(getLostDogListt);


  if (emptyList) {
    return <EmptyState />;
  }

  return (
    <div
      className="
        max-w=[2250px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4"
    >
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
      {/* <div className="grid grid-cols-6 gap-9">
        {getLostDogListt.map((item:any)=>(
          <DogListCard
            imageSrc={item.filename}
            male={item.sexCd}
            dogType={item.kindCd}
          />
        ))}
      </div> */}
    </div>
  );
}
