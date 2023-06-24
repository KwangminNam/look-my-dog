"use client";

import Container from "../Container";
import TypeDogs from "../TypeDogs";
import Hamberger from "./Hamberger";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { SafeUser } from "@/app/types";

interface NavBarProps {
  loggedInUser?: SafeUser | null;
}

export default function NavBar({ loggedInUser }: NavBarProps) {
  return (
    <nav className="w-full bg-white z-10 shadow-xl">
      <Container nonPadding>
        <div className="flex flex-row justify-between items-center">
          <Logo />
          <SearchBar />
          <Hamberger loggedInUser={loggedInUser} />
        </div>
      </Container>
    </nav>
  );
}
