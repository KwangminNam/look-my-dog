import { Metadata } from "next";
import getListing from "../actions/getDogListing";
import getLoggedInUser from "../actions/getLoginedUser"
import EmptyState from "../components/EmptyState";
import MyPostListClinet from "./MyPostListClient";
import PageTitle from "../components/PageTitle";
import PageContainer from "../components/PageContainer";
import Container from "../components/Container";

export async function generateMetadata(): Promise<Metadata> {
  // read route params
  return {
    title: "룩마독 | 나의 강아지 목록"
  };
}


export default async function MyPostPage() {

  const currentUser = await getLoggedInUser();
  const dogListing = await getListing({
    userId: currentUser?.id
  })

  if (!currentUser) {
    return <EmptyState title="로그인 해주세요." />
  }

  if (dogListing?.length === 0) {
    return <EmptyState title="작성하신 글이 없으시네요!" showButton loggedInUser={currentUser} />
  }

  return (
    <Container>
      <PageTitle title='나의 강아지' />
      <MyPostListClinet loggedInUser={currentUser} dogList={dogListing} />
    </Container>
  )
}