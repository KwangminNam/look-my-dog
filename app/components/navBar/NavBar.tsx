'use client'

import Container from "../Container"
import Hamberger from "./Hamberger"
import Logo from "./Logo"
import SearchBar from "./SearchBar"

export default function NavBar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-xl">
      <Container>
        <div className="flex flex-row justify-between py-7 items-center">
          <Logo/>
          <SearchBar/>
          <Hamberger/>
        </div>
      </Container>
    </div>
  )
}
