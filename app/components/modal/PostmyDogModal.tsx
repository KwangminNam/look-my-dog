'use client';

import { useState } from "react";
import usePostModal from "../hooks/usePostModal";
import Modal from "./Modal";

enum POST_STEPS {
  TITLE = 0,
  CONTENT = 1 ,
  IMAGE = 2 ,
}

export default function PostmyDogModal() {

  const [step, setStep ] = useState(POST_STEPS.TITLE);

  const nextStep = () => {
    setStep(prev => prev + 1);
  }

  const postModal = usePostModal();

  let bodyModal = (
    <div>
      강아지 등록하기 첫번째!
    </div>
  )

  if(step === POST_STEPS.CONTENT){
    bodyModal = (
      <div>
        강아지 등록하기 두번째
      </div>
    )
  }

  if(step === POST_STEPS.IMAGE){
    bodyModal = (
      <div>
        강아지 등록하기 두번째
      </div>
    )
  }

  let footerModal = (
    <button onClick={nextStep}>다음!</button>
  )

  return (
    <Modal
      title="내 강아지 자랑하기"
      isOpen={postModal.isOpen}
      closeAction={postModal.actionClose}
      bodyContent={bodyModal}
      footerContent={footerModal}
    />
  )
}
