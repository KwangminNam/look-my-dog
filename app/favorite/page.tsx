import getFavorite from "../actions/getFavorite";
import getLoggedInUser from "../actions/getLoginedUser";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import DogListCard from "../components/list/DogListCard";

export default async function Favoirte() {
  const favoriteList = await getFavorite();
  const getCurrentUser = await getLoggedInUser();

  
  if(!getCurrentUser){
    return <EmptyState title="로그인 해주세요."/>
  }

  if(favoriteList.length === 0){
    return <EmptyState title="좋아요 한 강아지가 없습니다!"/>
  }

  return (
    <Container>
      <div className="grid grid-cols-6 gap-9">
        {favoriteList.map((item) => (
          <DogListCard
            id={item.id}
            dogType={item.dogType}
            dogAge={item.dogAge}
            weight={item.weight}
            male={item.male}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </Container>
  );
}
