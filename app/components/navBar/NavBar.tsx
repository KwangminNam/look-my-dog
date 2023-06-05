"use client";

import { User } from "@prisma/client";
import Container from "../Container";
import TypeDogs from "../dogtype/TypeDogs";
import Hamberger from "./Hamberger";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

interface NavBarProps {
  loggedInUser: User | null;
}

export default function NavBar({loggedInUser}:NavBarProps) {
  return (
    <>
      <div className="w-full bg-white z-10 shadow-xl">
        <Container>
          <div className="flex flex-row justify-between py-7 items-center">
            <Logo />
            <SearchBar />
            <Hamberger loggedInUser={loggedInUser} />
          </div>
        </Container>
      </div>
      <TypeDogs />
    </>
  );
}
