"use client";

import Image from "next/image";
import Container from "./Container";

export default function HeroBox() {
  return (
    <div className=" w-full">
      <Container>
        <Image
          src="/images/hero-banner.jpg"
          alt="heroBanner"
          className="w-full h-[600px]"
          width="0"
          height="0"
          sizes="100vw"
        />
      </Container>
    </div>
  );
}
