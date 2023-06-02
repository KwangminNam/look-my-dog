'use client';

import { useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io';
import useLoginModal from "../hooks/useLoginModal";

interface ModalProps {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  bodyContent?: React.ReactElement;
  footerContent?: React.ReactElement;
  closeAction: () => void;
}

export default function Modal({
  title,
  subtitle,
  bodyContent,
  isOpen,
  footerContent,
  closeAction
}: ModalProps) {

  console.log(isOpen)

  useEffect(()=>{
    console.log('123')
  },[isOpen])

  return (
    isOpen ? (<div className="fixed z-[100] top-0 left-0 w-full h-full bg-opacity-80 bg-black">
      <div className={`translate duration-300 h-full ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex justify-center items-center h-full">
          <div className="bg-white w-1/2 h-[800px] rounded-2xl">
            <header className="h-16 boder border-b-2 flex justify-center text-2xl items-center relative">
              <span>{title}</span>
              <button className="absolute top-3 right-9" onClick={closeAction}>
                <IoMdClose size={30} />
              </button>
            </header>
          </div>
        </div>
      </div>
    </div>) : null
  )
}
