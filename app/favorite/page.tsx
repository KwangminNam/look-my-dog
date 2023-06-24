import getFavorite from "../actions/getFavorite";
import getLoggedInUser from "../actions/getLoginedUser";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
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
      <div
        className=" 
        max-w=[2250px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4"
      >
        <h2 className="text-4xl text-center pb-11">나의 좋아요 강아지들</h2>
        <div className="grid grid-cols-6 gap-9">
          <FavoriteClient favoriteList={favoriteList} />
        </div>
      </div>

      {/* {favoriteList.map((item) => (
          <DogListCard
            id={item.id}
            dogType={item.dogType}
            dogAge={item.dogAge}
            weight={item.weight}
            male={item.male}
            imageSrc={item.imageSrc}
            paramsName="listing"
          />
        ))} */}
    </Container>
  );
}
