'use client';

import useSearchModal from '@/app/hooks/useSearchModal';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi'

export default function SearchBar() {

  const searchModal = useSearchModal();
  const params = useSearchParams();

  const dogName = params?.get('dogName');
  const dogAge = params?.get('dogAge');
  const male = params?.get('male');

  console.log(dogName);
  console.log(dogAge)
  console.log(male)

  const nameLabel = useMemo(()=>{
    if(dogName) return decodeURIComponent(dogName);
    return "검색"
  },[dogName]);

  const ageLabel = useMemo(()=>{
    if(dogAge) return dogAge+"살";
    return "";
  },[dogAge])


  return (
    <button
      onClick={searchModal.actionOpen}
      className="
          gap-3
          items-center
          font-bold
          cursor-pointer
          hover:shadow-md
          transition
          text-3xl
          flex
    "
    >
      <div className='hidden md:flex'>{nameLabel}</div>
      <div>{ageLabel}</div>
      <div className='p-2 bg-[#28a649] rounded-full text-white'>
        <BiSearch  />
      </div>  
    </button>
  )
}
