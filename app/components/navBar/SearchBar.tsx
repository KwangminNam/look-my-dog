'use client';
import { BiSearch } from 'react-icons/bi'

export default function SearchBar() {
  return (
    <div
      className="
          flex
          gap-3
          items-center
          font-bold
          cursor-pointer
          hover:shadow-md
          transition
          text-3xl
    "
    >
      <div>강아지 이름</div>
      <div>테스트</div>
      <div className='p-2 bg-rose-500 rounded-full text-white'>
        <BiSearch />
      </div>
    </div>
  )
}
