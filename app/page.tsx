import Image from "next/image";
import getListing from "./actions/getDogListing";
import EmptyState from "./components/EmptyState";
import DogListCard from "./components/list/DogListCard";
import getLoggedInUser from "./actions/getLoginedUser";

export default async function Home() {
  const getDogList = await getListing();
  const getLoggedinuser = await getLoggedInUser();
  const emptyList = getDogList?.length === 0;

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
            key={item.dogName}
            dogName={item.dogName}
            dogAge={item.dogAge}
            dogType={item.dogType}
            weight={item.weight}
            dogMonth={item.dogMonth}
            male={item.male}
            personality={item.personality}
            imageSrc={item.imageSrc}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}
