import HeroBox from "./components/HeroBox";
import LoginModal from "./components/modal/LoginModal";
import PostmyDogModal from "./components/modal/PostmyDogModal";
import RegisterModal from "./components/modal/RegisterModal";

export default function Home() {
  return (
    <>
      <HeroBox />
      <LoginModal/>
      <RegisterModal/>
      <PostmyDogModal/>
    </>
  )
      
}
