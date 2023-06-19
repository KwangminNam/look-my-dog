import getListing from "../actions/getDogListing";
import getLoggedInUser from "../actions/getLoginedUser"
import EmptyState from "../components/EmptyState";
import MyPostListClinet from "./MyPostListClient";

export default async function MyPostPage(){

  const currentUser =  await getLoggedInUser();
  const dogListing = await getListing({
    userId:currentUser?.id
  })

  if(!currentUser){
    return <EmptyState title="로그인 해주세요."/>
  }

  if(dogListing?.length === 0){
    return <EmptyState title="작성하신 글이 없으시네요!" showButton/>
  }

  return(
    <MyPostListClinet loggedInUser={currentUser} dogList={dogListing} />
  )
}