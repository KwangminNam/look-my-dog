"use client";

import { useMemo, useState } from "react";
import usePostModal from "../../hooks/usePostModal";
import Modal from "./Modal";
import Input from "../Input/Input";


enum POST_STEPS {
  TITLE = 0,
  CONTENT = 1,
  IMAGE = 2
}

export default function PostmyDogModal() {
  const [step, setStep] = useState(POST_STEPS.TITLE);
  const postModal = usePostModal();

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = () => {
    if(step !== POST_STEPS.IMAGE) return nextStep();
  }

  const actionLabel = useMemo(() => {
    if (step === POST_STEPS.IMAGE) return "등록하기";
    return "다음 단계";
  }, [step]);

  const secondActionLabel = useMemo(() => {
    if (step === POST_STEPS.TITLE) return undefined;
    return "뒤로";
  }, [step]);

  let bodyModal = (
    <div className="flex flex-col gap-4">
      <Input id='id'label="아이디" />
      <Input id='password'label="비밀번호" />
    </div>
  )

  if (step === POST_STEPS.CONTENT) {
    bodyModal = <div>강아지 등록하기 두번째</div>;
  }

  if (step === POST_STEPS.IMAGE) {
    bodyModal = <div>강아지 등록하기 세번째</div>;
  }


  return (
    <Modal
      title="내 강아지 자랑하기"
      isOpen={postModal.isOpen}
      closeAction={postModal.actionClose}
      bodyContent={bodyModal}
      actionLabel={actionLabel}
      actionOnclick={onSubmit}
      secondActionLabel={secondActionLabel}
      secondActionOnclick={step !== POST_STEPS.TITLE ? prevStep : undefined}
    />
  );
}
