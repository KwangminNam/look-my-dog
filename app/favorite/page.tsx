import getFavorite from "../actions/getFavorite";
import getLoggedInUser from "../actions/getLoginedUser";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import PageTitle from "../components/PageTitle";
import DogListCard from "../components/list/DogListCard";
import FavoriteClient from "./FavoriteClient";

export default async function Favoirte() {
  const favoriteList = await getFavorite();
  const getCurrentUser = await getLoggedInUser();

  if (!getCurrentUser) {
    return <EmptyState title="로그인 해주세요." />;
  }

  if (favoriteList.length === 0) {
    return <EmptyState title="좋아요 한 강아지가 없습니다!" />;
  }

  return (
    <Container>
      <PageTitle title="좋아요 누른 강아지"/>
      <FavoriteClient favoriteList={favoriteList} loggedInUser={getCurrentUser} />
    </Container>
  );
}
