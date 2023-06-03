"use client";

import Container from "../Container";

export const TYPE_OF_DOG = [
  {
    type: "말티즈",
    image: "말티즈 이미지",
    desc: "말티즈 설명!"
  },
  {
    type: "골든리트리버",
    image: "골든리트리버 이미지",
    desc: "골든리트리버 설명!"
  },
  {
    type: "스피치",
    image: "스피치 이미지",
    desc: "스피치 설명!"
  },
  {
    type: "푸들",
    image: "푸들 이미지",
    desc: "푸들 설명!"
  },
  {
    type: "그레이하운드",
    image: "그레이하운드 이미지",
    desc: "그레이하운드 설명!"
  },
  {
    type: "포메라이언",
    image: "포메라이언 이미지",
    desc: "포메라이언 설명!"
  }
];

function TypeDogs() {
  return (
    <Container>
      <ul className="pt-11 flex flex-wrap gap-2 justify-center">
        {TYPE_OF_DOG.map((item) => (
          <li
            className="
              bg-white
              rounded-full
              cursor-pointer
              w-[150px]
              h-[150px]
              flex
              justify-center
              items-center
              border
              border-solid
              border-blue-900
              "
              
            key={item.type}
          >
            <span>{item.type}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default TypeDogs;
