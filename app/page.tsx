import getListing from "./actions/getDogListing";
import EmptyState from "./components/EmptyState";

export default async function Home() {
  const getDogList = await getListing();
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
      {getDogList?.map((item:any)=>(
        <div>
          <div>{item.dogName}</div>
          <div>{item.male}</div>
        </div>
      ))}
    </div>
  );
}
