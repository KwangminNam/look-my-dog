import getListById from "@/app/actions/getListById";
import ListingClient from "./ListingClient";
import getLoggedInUser from "@/app/actions/getLoginedUser";
import getListing from "@/app/actions/getDogListing";

interface IParams {
  listingId?:string;
}

// useParams() 같은 훅으로 안갖고오는 이유는 서버컴포넌트이기때문에입니다 . 서버컴포넌트에 파라미터에 url parmeter값을 갖고올수있어서 아래와 같은 방식으로 진행합니다.
export default async function List({params}:{params:IParams}){
  const dogList = await getListById(params);
  const allDogList = await getListing();
  const loggedInUser = await getLoggedInUser();

  console.log(params)
  console.log(dogList);

  return(
    <ListingClient loggedInUser={loggedInUser} dogList={dogList} allDogList={allDogList}/>
  )
}