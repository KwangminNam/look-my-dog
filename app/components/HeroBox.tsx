"use client";

import Image from "next/image";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useRef } from "react";
import Typed from "typed.js";


export default function HeroBox() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "안녕하세요!",
        '<span className="text-red-500">룩마독</span>에<br/> 오신것을 환영합니다.',
        "Hello!",
        "Welcome to Look My Dog.",
        "Thank you for visting Look My Dog!<br/>"
      ],
      typeSpeed: 70,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className=" w-full mb-32">
      <Container nonPadding>
        <Swiper
          autoplay
          spaceBetween={30}
          hashNavigation={{
            watchState: true
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="
              relative
              p-0
              md:p-36
              w-full
              h-[400px]
              justify-center
              flex
              items-center
              bg-[url('/images/puppy2/dog-hero-bg.jpg')]
              bg-cover
              bg-no-repeat
              lg:h-[750px]
              "
            >
              <p
                className="text-center text-neutral-700 text-3xl md:text-6xl"
                ref={el}
              ></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero-banner.jpg"
              alt="heroBanner"
              className="w-full h-[400px] lg:h-[750px]"
              width="0"
              height="0"
              sizes="100vw"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
