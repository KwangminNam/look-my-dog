"use client";

import { useEffect, useMemo, useState } from "react";
import usePostModal from "../../hooks/usePostModal";
import Modal from "./Modal";
import Input from "../Input/Input";
import { FieldValues, useForm } from "react-hook-form";
import { TYPE_OF_DOG } from "../TypeDogs";
import Image from "next/image";
import PostDogInput from "../Input/PostDogInput";
import AgeCounter from "../AgeCounter";
import SelectSex from "../Input/SelectSex";

enum POST_STEPS {
  TITLE = 0,
  CONTENT = 1,
  IMAGE = 2
}

const MALE_DATA = [
  { male: '남자' },
  { male: '여자' },
]

export default function PostmyDogModal() {
  const {
    watch,
    setValue,
    register,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      dogType: '',
      dogAge: 1,
      male: '',
    }
  });
  const postModal = usePostModal();
  const stepsArray = Object.keys(POST_STEPS).filter(key => isNaN(Number(key))).map(key => POST_STEPS[key as any]);
  const stepsLength = stepsArray.length;

  console.log(stepsLength)

  const [step, setStep] = useState(POST_STEPS.TITLE);
  const [label, setLabel] = useState("");

  const dogType = watch('dogType');
  const dogAge = watch('dogAge');
  const male = watch('male');


  console.log(dogType);
  console.log(male);
  console.log(dogAge)


  useEffect(() => {
    if (postModal.isOpen === false) {
      setStep(POST_STEPS.TITLE)
    }
  }, [postModal.isOpen]);

  const nextStep = () => {
    if(dogType === "") return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const selectDogType = (value: string) => {
    setCustumValue('dogType', value);
    setLabel(value);
  }

  const selectMaleType = (value: string) => {
    setCustumValue('male', value);
  }

  const onSubmit = () => {
    if (step !== POST_STEPS.IMAGE) return nextStep();
    //TODO: return last step function
  };

  const headerLabel = useMemo(() => {
    switch (step) {
      case POST_STEPS.TITLE:
        return "강아지 종류 선택해주세요";
      case POST_STEPS.CONTENT:
        return "강아지에 대해 간단한 정보를 알려주세요";
      case POST_STEPS.IMAGE:
        return "강아지 사진을 올려주세요";
      default:
        return "Look my Dog";
    }
  }, [step])

  const actionLabel = useMemo(() => {
    if (step === POST_STEPS.IMAGE) return "등록하기";
    if (dogType === "" ) return "강아지 종류를 선택해주세요!"
    return "다음 단계";
  }, [step]);

  const secondActionLabel = useMemo(() => {
    if (step === POST_STEPS.TITLE) return undefined;
    return "뒤로";
  }, [step]);

  const setCustumValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true
    })
  };

  let bodyModal = (
    <div className="grid grid-cols-2 gap-4">
      {TYPE_OF_DOG.map((item) => (
        <PostDogInput
          label={item.label}
          src={item.src}
          selected={dogType === item.label}
          onClick={selectDogType}
        />
      ))}
    </div>
  );

  if (step === POST_STEPS.CONTENT) {
    bodyModal = (
      <div>
        {label ? (
          <>
            <div className="flex">
              <div>나의 강아지 종류는 <span className="text-red-400">{label}</span></div>
              {TYPE_OF_DOG
                .filter(item => item.label === label)
                .map((item) => (
                  <Image src={`${item.src}.jpeg`} alt={label} width={50} height={50} />
                ))
              }
            </div>
            <div className="flex-col flex items-center">
              <Input id="dogName" register={register} errors={errors} label="강아지 이름" />
              <hr />
              <div className="flex">
                <span>성별을 골라주세요</span>
                <div className="flex">
                  {MALE_DATA.map(item =>
                    <SelectSex
                      onClick={selectMaleType}
                      key={item.male}
                      value={item.male}
                      selected={male === item.male}
                    />
                  )}
                </div>
              </div>
              <hr />
              <div className="flex">
                <span>강아지의 나이는 몇살인가요?</span>
                <AgeCounter
                  value={dogAge}
                  onChange={(age) => setCustumValue('dogAge', age)}
                />
              </div>
            </div>
          </>)
          : <div className="h-full bg-red-50"><p>강아지종류 선택을 하지않으셨습니다.</p><span>이전 단계에서 강아지를 선택해주세요</span></div>}
      </div>
    );
  }

  if (step === POST_STEPS.IMAGE) {
    bodyModal = <div>강아지 등록하기 세번째</div>;
  }

  return (
    <Modal
      title={headerLabel}
      isOpen={postModal.isOpen}
      closeAction={postModal.actionClose}
      bodyContent={bodyModal}
      actionLabel={actionLabel}
      actionOnclick={onSubmit}
      secondActionLabel={secondActionLabel}
      secondActionOnclick={step !== POST_STEPS.TITLE ? prevStep : undefined}
      stepsLength={stepsLength}
      currentStep={step + 1}
    />
  );
}
