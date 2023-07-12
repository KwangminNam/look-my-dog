"use client";

import Image from "next/image";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Lottie from 'lottie-react';
import PuppyLottie from './../lottie/PuppyLottie.json'
import SecondPuppyLottie from './../lottie/SecondPuppyLottie.json'
import { SafeUser } from "../types";
import usePostModal from "../hooks/usePostModal";
import useLoginModal from "../hooks/useLoginModal";

interface HeroBoxProps {
  getLoggedinuser: SafeUser | null;
}

export default function HeroBox({ getLoggedinuser }: HeroBoxProps) {
  const el = useRef(null);
  const postModal = usePostModal();
  const loginModal = useLoginModal();
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

  const onOpenPostModal = () => {
    if (!getLoggedinuser) {
      return loginModal.actionOpen();
    }
    postModal.actionOpen();
  };


  return (
    <section className=" w-full mb-32">
      <Container nonPadding>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          spaceBetween={30}
          hashNavigation={{
            watchState: true
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-[400px] lg:h-[950px] bg-green-500">
              <div className="h-full flex flex-col md:flex-row items-center justify-center">
                <div
                  className="
                    w-[100px]
                    md:w-[300px]
                    m-0
                    md:m-auto">
                  <Lottie animationData={PuppyLottie} width={500} height={300} />
                </div>
                <p
                  className="text-center gap-0 text-3xl md:text-6xl text-white flex flex-col md:gap-10"
                >
                  <strong>Look my dog</strong>
                  <span>사랑스러운 강아지를<br /> 자랑해보세요!</span><br />
                  <button
                    type="button"
                    className="
                      mb-2
                      hover:bg-white
                      hover:text-green-500
                      text-xl
                      md:text-2xl
                      p-1
                      md:p-4
                      border-[4px]
                      rounded-xl
                      border-neutral-50"
                      onClick={onOpenPostModal}>
                    강아지 자랑하기
                  </button>
                </p>

                <div
                  className="
                    w-[100px]
                    md:w-[300px]
                    m-0
                    md:m-auto">
                  <Lottie animationData={SecondPuppyLottie} width={500} height={300} />
                </div>
              </div>
            </div>
          </SwiperSlide>
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
              bg-[url('https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg')]
              bg-cover
              bg-no-repeat
              lg:h-[950px]
              "
            >
              <p
                className="text-center text-neutral-700 text-3xl md:text-6xl"
                ref={el}
              ></p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
