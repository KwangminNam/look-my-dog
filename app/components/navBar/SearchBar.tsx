'use client';

import useSearchModal from '@/app/hooks/useSearchModal';
import { useSearchParams } from 'next/navigation';
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

  return (
    <div
      onClick={searchModal.actionOpen}
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
      <div>{decodeURIComponent(dogName as string)}</div>
      <div>{decodeURIComponent(male as string)}</div>
      <div className='p-2 bg-[#28a649] rounded-full text-white'>
        <BiSearch  />
      </div>
    </div>
  )
}
