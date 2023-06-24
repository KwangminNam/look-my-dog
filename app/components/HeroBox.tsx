"use client";

import Image from "next/image";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';

export default function HeroBox() {
  return (
    <section className=" w-full">
      <Container>
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
            <Image
              src="/images/hero-banner.jpg"
              alt="heroBanner"
              className="w-full h-[765px]"
              width="0"
              height="0"
              sizes="100vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/hero-banner.jpg"
              alt="heroBanner"
              className="w-full h-[765px]"
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
