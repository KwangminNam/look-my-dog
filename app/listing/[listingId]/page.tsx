import getListById from "@/app/actions/getListById";

interface IParams {
  listingId?:string;
}

export default async function List({params}:{params:IParams}){
  const dogList = await getListById(params);
  console.log(params)

  return(
    <div>{dogList?.dogType}</div>
  )
}