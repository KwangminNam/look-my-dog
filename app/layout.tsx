import ToasterProvider from "./provider/ToasterProvider";
import getLoggedInUser from "./actions/getLoginedUser";
import HeroBox from "./components/HeroBox";
import LoginModal from "./components/modal/LoginModal";
import PostmyDogModal from "./components/modal/PostmyDogModal";
import RegisterModal from "./components/modal/RegisterModal";
import NavBar from "./components/navBar/NavBar";
import "./globals.css";
import { Jua } from "next/font/google";
import SearchModal from "./components/modal/SearchModal";

const jua = Jua({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Look my Dog",
  description: "Dog pictures of blog"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const loggedInUser = await getLoggedInUser();
  return (
    <html lang="ko">
      <body className={jua.className}>
        <ToasterProvider />
        <SearchModal/>
        <LoginModal />
        <RegisterModal />
        <PostmyDogModal />
        <NavBar loggedInUser={loggedInUser} />
        <div className="w-[1600px] mx-auto py-24 px-4">{children}</div>
      </body>
    </html>
  );
}
